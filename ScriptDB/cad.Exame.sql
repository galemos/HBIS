USE [OLTP]
GO

/****** Object:  Table [cad].[Exame]    Script Date: 30/10/2018 08:53:46 ******/
DROP TABLE [cad].[Exame]
GO

/****** Object:  Table [cad].[Exame]    Script Date: 30/10/2018 08:53:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Exame](
	[IdExame] [uniqueidentifier] NOT NULL,
	[IdPaciente] [uniqueidentifier] NOT NULL,
	[CRM] [nvarchar](50) NOT NULL,
	[TituloExame] [nvarchar](50) NULL,
	[Resultado] [decimal](18, 2) NULL
) ON [PRIMARY]

GO


