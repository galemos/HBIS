USE [OLTP]
GO

/****** Object:  Table [cad].[Paciente]    Script Date: 30/10/2018 08:54:43 ******/
DROP TABLE [cad].[Paciente]
GO

/****** Object:  Table [cad].[Paciente]    Script Date: 30/10/2018 08:54:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Paciente](
	[IdPaciente] [uniqueidentifier] NOT NULL,
	[Altura] [decimal](18, 2) NULL,
	[ContatoEmergencia] [nvarchar](50) NULL,
	[DataNascimento] [date] NULL,
	[Email] [nvarchar](50) NULL,
	[FatorCorrecao] [decimal](18, 2) NULL,
	[GlicemiaIdeal] [decimal](18, 2) NULL,
	[InsulinaBasal] [decimal](18, 2) NULL,
	[InsulinaRapida] [decimal](18, 2) NULL,
	[Nome] [nvarchar](50) NULL,
	[Peso] [decimal](18, 2) NULL,
	[Sexo] [nvarchar](50) NULL,
	[TipoSanguineo] [nvarchar](50) NULL
) ON [PRIMARY]

GO


