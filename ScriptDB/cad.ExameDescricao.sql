USE [OLTP]
GO

/****** Object:  Table [cad].[ExameDescicao]    Script Date: 31/10/2018 08:32:53 ******/
DROP TABLE [cad].[ExameDescicao]
GO

/****** Object:  Table [cad].[ExameDescicao]    Script Date: 31/10/2018 08:32:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[ExameDescicao](
	[IdExameDescricao] [uniqueidentifier] NOT NULL,
	[Descricao] [nvarchar](50) NULL,
 CONSTRAINT [PK_ExameDescicao] PRIMARY KEY CLUSTERED 
(
	[IdExameDescricao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


