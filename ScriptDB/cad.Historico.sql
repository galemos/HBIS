USE [OLTP]
GO

/****** Object:  Table [cad].[Historico]    Script Date: 30/10/2018 08:54:17 ******/
DROP TABLE [cad].[Historico]
GO

/****** Object:  Table [cad].[Historico]    Script Date: 30/10/2018 08:54:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Historico](
	[IdHistorico] [uniqueidentifier] NOT NULL,
	[IdPaciente] [uniqueidentifier] NOT NULL,
	[Carboidrato] [decimal](18, 2) NULL,
	[Data] [date] NULL,
	[GlicemiaAtual] [decimal](18, 2) NULL,
	[Insulina] [decimal](18, 2) NULL
) ON [PRIMARY]

GO


