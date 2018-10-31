USE [OLTP]
GO

ALTER TABLE [cad].[Paciente] DROP CONSTRAINT [FK_Paciente_TipoSanguineo]
GO

ALTER TABLE [cad].[Paciente] DROP CONSTRAINT [FK_Paciente_Sexo]
GO

/****** Object:  Table [cad].[Paciente]    Script Date: 31/10/2018 08:33:30 ******/
DROP TABLE [cad].[Paciente]
GO

/****** Object:  Table [cad].[Paciente]    Script Date: 31/10/2018 08:33:30 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Paciente](
	[IdPaciente] [uniqueidentifier] NOT NULL,
	[IdSexo] [uniqueidentifier] NOT NULL,
	[IdTipoSanguineo] [uniqueidentifier] NOT NULL,
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
 CONSTRAINT [PK_Paciente] PRIMARY KEY CLUSTERED 
(
	[IdPaciente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [cad].[Paciente]  WITH CHECK ADD  CONSTRAINT [FK_Paciente_Sexo] FOREIGN KEY([IdSexo])
REFERENCES [cad].[Sexo] ([IdSexo])
GO

ALTER TABLE [cad].[Paciente] CHECK CONSTRAINT [FK_Paciente_Sexo]
GO

ALTER TABLE [cad].[Paciente]  WITH CHECK ADD  CONSTRAINT [FK_Paciente_TipoSanguineo] FOREIGN KEY([IdTipoSanguineo])
REFERENCES [cad].[TipoSanguineo] ([IdTipoSanguineo])
GO

ALTER TABLE [cad].[Paciente] CHECK CONSTRAINT [FK_Paciente_TipoSanguineo]
GO


