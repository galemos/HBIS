USE [OLTP]
GO

/****** Object:  Table [cad].[Medico]    Script Date: 30/10/2018 08:54:30 ******/
DROP TABLE [cad].[Medico]
GO

/****** Object:  Table [cad].[Medico]    Script Date: 30/10/2018 08:54:30 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [cad].[Medico](
	[CRM] [nvarchar](50) NOT NULL,
	[CPF] [nvarchar](50) NULL,
	[Nome] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL
) ON [PRIMARY]

GO


