USE [OLTP]
GO

ALTER TABLE [cad].[Exame] DROP CONSTRAINT [FK_Exame_Paciente]
GO

ALTER TABLE [cad].[Exame] DROP CONSTRAINT [FK_Exame_Medico]
GO

ALTER TABLE [cad].[Exame] DROP CONSTRAINT [FK_Exame_ExameDescricao]
GO

/****** Object:  Table [cad].[Exame]    Script Date: 31/10/2018 08:32:42 ******/
DROP TABLE [cad].[Exame]
GO

/****** Object:  Table [cad].[Exame]    Script Date: 31/10/2018 08:32:42 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Exame](
	[IdExame] [uniqueidentifier] NOT NULL,
	[IdPaciente] [uniqueidentifier] NOT NULL,
	[IdExameDescicao] [uniqueidentifier] NOT NULL,
	[CRM] [nvarchar](50) NOT NULL,
	[Resultado] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Exame] PRIMARY KEY CLUSTERED 
(
	[IdExame] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [cad].[Exame]  WITH CHECK ADD  CONSTRAINT [FK_Exame_ExameDescricao] FOREIGN KEY([IdExameDescicao])
REFERENCES [cad].[ExameDescicao] ([IdExameDescricao])
GO

ALTER TABLE [cad].[Exame] CHECK CONSTRAINT [FK_Exame_ExameDescricao]
GO

ALTER TABLE [cad].[Exame]  WITH CHECK ADD  CONSTRAINT [FK_Exame_Medico] FOREIGN KEY([CRM])
REFERENCES [cad].[Medico] ([CRM])
GO

ALTER TABLE [cad].[Exame] CHECK CONSTRAINT [FK_Exame_Medico]
GO

ALTER TABLE [cad].[Exame]  WITH CHECK ADD  CONSTRAINT [FK_Exame_Paciente] FOREIGN KEY([IdPaciente])
REFERENCES [cad].[Paciente] ([IdPaciente])
GO

ALTER TABLE [cad].[Exame] CHECK CONSTRAINT [FK_Exame_Paciente]
GO


