USE [OLTP]
GO

/****** Object:  Table [cad].[Sexo]    Script Date: 31/10/2018 08:33:41 ******/
DROP TABLE [cad].[Sexo]
GO

/****** Object:  Table [cad].[Sexo]    Script Date: 31/10/2018 08:33:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Sexo](
	[IdSexo] [uniqueidentifier] NOT NULL,
	[Descricao] [nvarchar](50) NULL,
 CONSTRAINT [PK_Sexo] PRIMARY KEY CLUSTERED 
(
	[IdSexo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


