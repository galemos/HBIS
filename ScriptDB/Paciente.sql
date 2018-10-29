/*
   quinta-feira, 25 de outubro de 201808:54:59
   User: sa
   Server: NB-013
   Database: OLTP
   Application: 
*/

/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
CREATE TABLE dbo.Tmp_Paciente
	(
	IdPaciente uniqueidentifier NOT NULL,
	Altura decimal(18, 2) NULL,
	ContatoEmergencia nvarchar(50) NULL,
	DataNascimento date NULL,
	Email nvarchar(50) NULL,
	FatorCorrecao decimal(18, 2) NULL,
	GlicemiaIdeal decimal(18, 2) NULL,
	InsulinaBasal decimal(18, 2) NULL,
	InsulinaRapida decimal(18, 2) NULL,
	Nome nvarchar(50) NULL,
	Peso decimal(18, 2) NULL,
	Sexo nvarchar(50) NULL,
	TipoSanguineo nvarchar(50) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Tmp_Paciente SET (LOCK_ESCALATION = TABLE)
GO
IF EXISTS(SELECT * FROM dbo.Paciente)
	 EXEC('INSERT INTO dbo.Tmp_Paciente (IdPaciente, Altura, ContatoEmergencia, DataNascimento, Email, FatorCorrecao, GlicemiaIdeal, InsulinaBasal, InsulinaRapida, Nome, Peso, Sexo, TipoSanguineo)
		SELECT IdPaciente, Altura, CONVERT(nvarchar(50), ContatoEmergencia), DataNascimento, CONVERT(nvarchar(50), Email), FatorCorrecao, GlicemiaIdeal, InsulinaBasal, InsulinaRapida, CONVERT(nvarchar(50), Nome), Peso, CONVERT(nvarchar(50), Sexo), CONVERT(nvarchar(50), TipoSanguineo) FROM dbo.Paciente WITH (HOLDLOCK TABLOCKX)')
GO
DROP TABLE dbo.Paciente
GO
EXECUTE sp_rename N'dbo.Tmp_Paciente', N'Paciente', 'OBJECT' 
GO
COMMIT
select Has_Perms_By_Name(N'dbo.Paciente', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.Paciente', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.Paciente', 'Object', 'CONTROL') as Contr_Per 