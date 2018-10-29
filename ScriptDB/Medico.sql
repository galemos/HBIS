/*
   quinta-feira, 25 de outubro de 201808:57:41
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
CREATE TABLE dbo.Medico
	(
	CRM nvarchar(50) NOT NULL,
	CPF nvarchar(50) NULL,
	Nome nvarchar(50) NULL,
	Email nvarchar(50) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Medico SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.Medico', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.Medico', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.Medico', 'Object', 'CONTROL') as Contr_Per 