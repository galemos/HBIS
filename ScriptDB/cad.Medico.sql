USE [OLTP]
GO

/****** Object:  Table [cad].[Medico]    Script Date: 31/10/2018 08:33:16 ******/
DROP TABLE [cad].[Medico]
GO

/****** Object:  Table [cad].[Medico]    Script Date: 31/10/2018 08:33:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Medico](
	[CRM] [nvarchar](50) NOT NULL,
	[CPF] [nvarchar](50) NULL,
	[Nome] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
 CONSTRAINT [PK_Medico] PRIMARY KEY CLUSTERED 
(
	[CRM] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


