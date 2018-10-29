USE [OLTP]
GO

/****** Object:  Table [dbo].[VersionInfo]    Script Date: 29/10/2018 08:49:45 ******/
DROP TABLE [dbo].[VersionInfo]
GO

/****** Object:  Table [dbo].[VersionInfo]    Script Date: 29/10/2018 08:49:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[VersionInfo](
	[Version] [bigint] NOT NULL,
	[AppliedOn] [datetime] NULL,
	[Description] [nvarchar](1024) NULL
) ON [PRIMARY]

GO


