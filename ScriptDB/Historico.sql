/*
   quinta-feira, 25 de outubro de 201808:50:34
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
CREATE TABLE dbo.Tmp_Historico
	(
	IdHistorico uniqueidentifier NOT NULL,
	IdPaciente uniqueidentifier NOT NULL,
	Carboidrato decimal(18, 2) NULL,
	Data date NULL,
	GlicemiaAtual decimal(18, 2) NULL,
	Insulina decimal(18, 2) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Tmp_Historico SET (LOCK_ESCALATION = TABLE)
GO
IF EXISTS(SELECT * FROM dbo.Historico)
	 EXEC('INSERT INTO dbo.Tmp_Historico (IdHistorico, IdPaciente, Carboidrato, Data, GlicemiaAtual, Insulina)
		SELECT IdHistorico, IdPaciente, Carboidrato, Data, GlicemiaAtual, Insulina FROM dbo.Historico WITH (HOLDLOCK TABLOCKX)')
GO
DROP TABLE dbo.Historico
GO
EXECUTE sp_rename N'dbo.Tmp_Historico', N'Historico', 'OBJECT' 
GO
COMMIT
select Has_Perms_By_Name(N'dbo.Historico', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.Historico', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.Historico', 'Object', 'CONTROL') as Contr_Per 