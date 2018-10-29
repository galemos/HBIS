/*
   quinta-feira, 25 de outubro de 201808:55:31
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
CREATE TABLE dbo.Exame
	(
	IdExame uniqueidentifier NOT NULL,
	IdPaciente uniqueidentifier NOT NULL,
	CRM nvarchar(50) NOT NULL,
	TituloExame nvarchar(50) NULL,
	Resultado decimal(18, 2) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Exame SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.Exame', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.Exame', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.Exame', 'Object', 'CONTROL') as Contr_Per 