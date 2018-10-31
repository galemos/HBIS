USE [OLTP]
GO

ALTER TABLE [cad].[Historico] DROP CONSTRAINT [FK_Historico_Paciente]
GO

/****** Object:  Table [cad].[Historico]    Script Date: 31/10/2018 08:33:04 ******/
DROP TABLE [cad].[Historico]
GO

/****** Object:  Table [cad].[Historico]    Script Date: 31/10/2018 08:33:04 ******/
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
	[Insulina] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Historico] PRIMARY KEY CLUSTERED 
(
	[IdHistorico] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [cad].[Historico]  WITH CHECK ADD  CONSTRAINT [FK_Historico_Paciente] FOREIGN KEY([IdPaciente])
REFERENCES [cad].[Paciente] ([IdPaciente])
GO

ALTER TABLE [cad].[Historico] CHECK CONSTRAINT [FK_Historico_Paciente]
GO


