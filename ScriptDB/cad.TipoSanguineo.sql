USE [OLTP]
GO

/****** Object:  Table [cad].[TipoSanguineo]    Script Date: 31/10/2018 08:34:00 ******/
DROP TABLE [cad].[TipoSanguineo]
GO

/****** Object:  Table [cad].[TipoSanguineo]    Script Date: 31/10/2018 08:34:00 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[TipoSanguineo](
	[IdTipoSanguineo] [uniqueidentifier] NOT NULL,
	[Descricao] [nvarchar](50) NULL,
 CONSTRAINT [PK_TipoSanguineo] PRIMARY KEY CLUSTERED 
(
	[IdTipoSanguineo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


