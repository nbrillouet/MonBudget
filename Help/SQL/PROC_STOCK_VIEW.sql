USE [XmlToSwift_Demo]
GO
/****** Object:  View [gen].[V_YEAR]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [gen].[V_YEAR] AS (
SELECT 
	YEAR(DATE_INTEGRATION) AS [YEAR]
FROM [as].ACCOUNT_STATEMENT
GROUP BY YEAR(DATE_INTEGRATION)
UNION
SELECT 
	YEAR(MIN(DATE_INTEGRATION))-1 AS [YEAR]
FROM [as].ACCOUNT_STATEMENT
UNION 
SELECT YEAR(MIN(DATE_INTEGRATION))+1 AS [YEAR]
FROM [as].ACCOUNT_STATEMENT
)
GO
/****** Object:  View [gen].[V_MONTH_YEAR]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [gen].[V_MONTH_YEAR] AS (
SELECT 
	M.NUMBER AS [MONTH],
	Y.[YEAR]
FROM gen.[MONTH] M 
CROSS JOIN [gen].V_YEAR Y
)
GO
/****** Object:  View [plan].[V_PLAN_OPERATION]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE VIEW [plan].[V_PLAN_OPERATION] AS 
SELECT 
	ACS.ID AS ID_ACCOUNT_STATEMENT,
	CAST(ACS.DATE_INTEGRATION AS DATE) AS DATE_INTEGRATION,
	ABS(COALESCE(ACS.AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION,
	ABS(OPERATION.PREVIEW_AMOUNT) AS PREVIEW_AMOUNT,
	OPERATION.ID_PLAN as ID_PLAN,
	OPERATION.ID_PLAN_POSTE as ID_PLAN_POSTE,
	OPERATION.PLAN_POSTE_LABEL as PLAN_POSTE_LABEL,
	OPERATION.ID_POSTE as ID_POSTE,
	OPERATION.ID_REFERENCE as ID_REFERENCE,
	OPERATION.LABEL_REFERENCE as LABEL_REFERENCE,
	OPERATION.[MONTH] as [MONTH],
	OPERATION.[YEAR] as [YEAR]
FROM [as].ACCOUNT_STATEMENT ACS
RIGHT JOIN (

 SELECT 
	P.ID AS ID_PLAN,
	PP.ID AS ID_PLAN_POSTE,
	PP.LABEL AS PLAN_POSTE_LABEL,
	PP.ID_POSTE AS ID_POSTE,
	PPR.ID_REFERENCE,
	O.LABEL AS LABEL_REFERENCE,
	PPF.ID_FREQUENCY AS [MONTH],
	P.[YEAR] AS [YEAR],
	PPF.PREVIEW_AMOUNT,
	RT.TABLE_NAME
 FROM [plan].[PLAN] P
 INNER JOIN [plan].PLAN_POSTE PP
	ON P.ID=PP.ID_PLAN
 INNER JOIN [plan].PLAN_POSTE_REFERENCE PPR 
	ON PP.ID=PPR.ID_PLAN_POSTE
 INNER JOIN [plan].REFERENCE_TABLE RT
	ON PPR.ID_REFERENCE_TABLE=RT.ID
 INNER JOIN [ref].OPERATION O
	ON PPR.ID_REFERENCE=O.ID
 INNER JOIN [plan].[PLAN_POSTE_FREQUENCY] PPF
	ON PP.ID=PPF.ID_PLAN_POSTE
WHERE TABLE_NAME = 'OPERATION'
) AS OPERATION
	--Si mois =13 , faire jointure auto sur le mois
	ON MONTH(ACS.DATE_INTEGRATION)=IIF(OPERATION.[MONTH]=13,MONTH(ACS.DATE_INTEGRATION),OPERATION.[MONTH])
	AND YEAR(ACS.DATE_INTEGRATION)=OPERATION.[YEAR]
	AND ACS.ID_OPERATION=OPERATION.ID_REFERENCE
GO
/****** Object:  View [plan].[V_PLAN_OPERATION_TYPE]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE VIEW [plan].[V_PLAN_OPERATION_TYPE] AS 
SELECT 
	ACS.ID AS ID_ACCOUNT_STATEMENT,
	CAST(ACS.DATE_INTEGRATION AS DATE) AS DATE_INTEGRATION,
	ABS(COALESCE(ACS.AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION,
	ABS(OPERATION.PREVIEW_AMOUNT) AS PREVIEW_AMOUNT,
	OPERATION.ID_PLAN as ID_PLAN,
	OPERATION.ID_PLAN_POSTE as ID_PLAN_POSTE,
	OPERATION.PLAN_POSTE_LABEL as PLAN_POSTE_LABEL,
	OPERATION.ID_POSTE as ID_POSTE,
	OPERATION.ID_REFERENCE as ID_REFERENCE,
	OPERATION.LABEL_REFERENCE as LABEL_REFERENCE,
	OPERATION.[MONTH] as [MONTH],
	OPERATION.[YEAR] as [YEAR]
FROM [as].ACCOUNT_STATEMENT ACS
RIGHT JOIN (

 SELECT 
	P.ID AS ID_PLAN,
	PP.ID AS ID_PLAN_POSTE,
	PP.LABEL AS PLAN_POSTE_LABEL,
	PP.ID_POSTE AS ID_POSTE,
	PPR.ID_REFERENCE,
	OT.LABEL AS LABEL_REFERENCE,
	PPF.ID_FREQUENCY AS [MONTH],
	P.[YEAR] AS [YEAR],
	--U.FIRST_NAME,
	--PPU.PERCENTAGE_PART,
	--PPU.PERCENTAGE_PART * PPF.PREVIEW_AMOUNT / 100 AS PA,
	PPF.PREVIEW_AMOUNT,
	RT.TABLE_NAME
 FROM [plan].[PLAN] P
 INNER JOIN [plan].PLAN_POSTE PP
	ON P.ID=PP.ID_PLAN
 --INNER JOIN PLAN_POSTE_USER PPU
	--ON PP.ID=PPU.ID_PLAN_POSTE
 --INNER JOIN PLAN_USER PU
	--ON PPU.ID_PLAN_USER=PU.ID
 --INNER JOIN [USER] U
	--ON PU.ID_USER = U.ID
 INNER JOIN [plan].PLAN_POSTE_REFERENCE PPR 
	ON PP.ID=PPR.ID_PLAN_POSTE
 INNER JOIN [plan].REFERENCE_TABLE RT
	ON PPR.ID_REFERENCE_TABLE=RT.ID
 INNER JOIN [ref].OPERATION_TYPE OT 
	ON PPR.ID_REFERENCE=OT.ID
 INNER JOIN [plan].[PLAN_POSTE_FREQUENCY] PPF
	ON PP.ID=PPF.ID_PLAN_POSTE
WHERE TABLE_NAME = 'OPERATION_TYPE'
) AS OPERATION
	--Si mois =13 , faire jointure auto sur le mois
	ON MONTH(ACS.DATE_INTEGRATION)=IIF(OPERATION.[MONTH]=13,MONTH(ACS.DATE_INTEGRATION),OPERATION.[MONTH])
	AND YEAR(ACS.DATE_INTEGRATION)=OPERATION.[YEAR]
	AND ACS.ID_OPERATION_TYPE=OPERATION.ID_REFERENCE
GO
/****** Object:  View [plan].[V_PLAN_OPERATION_TYPE_FAMILY]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE VIEW [plan].[V_PLAN_OPERATION_TYPE_FAMILY] AS 
SELECT 
	ACS.ID AS ID_ACCOUNT_STATEMENT,
	CAST(ACS.DATE_INTEGRATION AS DATE) AS DATE_INTEGRATION,
	ABS(COALESCE(ACS.AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION,
	ABS(OPERATION.PREVIEW_AMOUNT) AS PREVIEW_AMOUNT,
	OPERATION.ID_PLAN as ID_PLAN,
	OPERATION.ID_PLAN_POSTE as ID_PLAN_POSTE,
	OPERATION.PLAN_POSTE_LABEL as PLAN_POSTE_LABEL,
	OPERATION.ID_POSTE as ID_POSTE,
	OPERATION.ID_REFERENCE as ID_REFERENCE,
	OPERATION.LABEL_REFERENCE as LABEL_REFERENCE,
	OPERATION.[MONTH] as [MONTH],
	OPERATION.[YEAR] as [YEAR]
FROM [as].ACCOUNT_STATEMENT ACS
RIGHT JOIN (

 SELECT 
	P.ID AS ID_PLAN,
	PP.ID AS ID_PLAN_POSTE,
	PP.LABEL AS PLAN_POSTE_LABEL,
	PP.ID_POSTE AS ID_POSTE,
	PPR.ID_REFERENCE,
	OTF.LABEL AS LABEL_REFERENCE,
	PPF.ID_FREQUENCY AS [MONTH],
	P.[YEAR] AS [YEAR],
	--U.FIRST_NAME,
	--PPU.PERCENTAGE_PART,
	--PPU.PERCENTAGE_PART * PPF.PREVIEW_AMOUNT / 100 AS PA,
	PPF.PREVIEW_AMOUNT,
	RT.TABLE_NAME
 FROM [plan].[PLAN] P
 INNER JOIN [plan].PLAN_POSTE PP
	ON P.ID=PP.ID_PLAN
 --INNER JOIN PLAN_POSTE_USER PPU
	--ON PP.ID=PPU.ID_PLAN_POSTE
 --INNER JOIN PLAN_USER PU
	--ON PPU.ID_PLAN_USER=PU.ID
 --INNER JOIN [USER] U
	--ON PU.ID_USER = U.ID
 INNER JOIN [plan].PLAN_POSTE_REFERENCE PPR 
	ON PP.ID=PPR.ID_PLAN_POSTE
 INNER JOIN [plan].REFERENCE_TABLE RT
	ON PPR.ID_REFERENCE_TABLE=RT.ID
 INNER JOIN [ref].OPERATION_TYPE_FAMILY OTF 
	ON PPR.ID_REFERENCE=OTF.ID
 INNER JOIN [plan].[PLAN_POSTE_FREQUENCY] PPF
	ON PP.ID=PPF.ID_PLAN_POSTE
WHERE TABLE_NAME = 'OPERATION_TYPE_FAMILY'
) AS OPERATION
	--Si mois =13 , faire jointure auto sur le mois
	ON MONTH(ACS.DATE_INTEGRATION)=IIF(OPERATION.[MONTH]=13,MONTH(ACS.DATE_INTEGRATION),OPERATION.[MONTH])
	AND YEAR(ACS.DATE_INTEGRATION)=OPERATION.[YEAR]
	AND ACS.ID_OPERATION_TYPE_FAMILY=OPERATION.ID_REFERENCE

GO
/****** Object:  View [plan].[V_PLAN_GLOBAL]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

	CREATE VIEW [plan].[V_PLAN_GLOBAL] AS 
	SELECT 
		CAST(ROW_NUMBER() OVER (ORDER BY ID_REFERENCE, [MONTH],[YEAR]) as INT) as ID,
		T.*
	FROM (
	SELECT * FROM [plan].V_PLAN_OPERATION
	UNION
	SELECT * FROM [plan].V_PLAN_OPERATION_TYPE
	UNION
	SELECT * FROM [plan].V_PLAN_OPERATION_TYPE_FAMILY
	) AS T

GO
/****** Object:  StoredProcedure [as].[spGetAsChartCategorisationSelect]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [as].[spGetAsChartCategorisationSelect]
  (
		@idAccount	INT,
		@dateMin	DATE,
		@dateMax	DATE,
		@tableRef	nvarchar(20)
  )
  AS
  BEGIN
	
--declare @idAccount		as int;
--declare @dateMin		as Datetime;
--declare @dateMax		as Datetime;
--declare @tableRef		as nvarchar(20);

--set @dateMin='01/10/2016';
--set @dateMax='30/10/2016';
--set @idAccount = 2;
--set @tableRef='OperationType'

DECLARE @sqlCommand nvarchar(500);
DECLARE @tableName nvarchar(50);
DECLARE @idFieldName	nvarchar(50);

	IF @tableRef='OperationMethod'
	BEGIN
		SET @tableName='OPERATION_METHOD'
		SET @idFieldName='ID_OPERATION_METHOD'
	END
	IF @tableRef='OperationTypeFamily'
	BEGIN
		SET @tableName='OPERATION_TYPE_FAMILY'
		SET @idFieldName='ID_OPERATION_TYPE_FAMILY'
	END
	IF @tableRef='OperationType'
	BEGIN
		SET @tableName='OPERATION_TYPE'
		SET @idFieldName='ID_OPERATION_TYPE'
	END

	print @tableName;
				--CAST(ROW_NUMBER() OVER (ORDER BY OP.LABEL) as INT) as Id,
	SELECT @sqlCommand = N'
		SELECT 
			OP.ID as [Id],
			OP.LABEL as [Name],
			SUM(AMOUNT_OPERATION) as [Value]
		FROM [as].ACCOUNT_STATEMENT [AS]
		INNER JOIN Ref.' + QUOTENAME(@tableName) + ' OP 
		ON [AS].' + QUOTENAME(@idFieldName) + '= OP.ID
		WHERE (ID_ACCOUNT=' + cast(@idAccount as nvarchar(20)) + ' OR ' + cast(@idAccount as nvarchar(20)) + ' is NULL)
		AND [as].ID_MOVEMENT=2
		AND DATE_INTEGRATION>= CONVERT(Datetime,''' + CONVERT(VARCHAR(10),@dateMin, 101) + ''', 101)
		AND DATE_INTEGRATION<= CONVERT(Datetime,''' + CONVERT(VARCHAR(10),@dateMax, 101) + ''', 101)
		GROUP BY OP.ID, OP.LABEL
		ORDER BY Value'
	print @sqlCommand;

	EXEC sp_executesql @sqlCommand

END

GO
/****** Object:  StoredProcedure [as].[spGetAsChartEvolutionBrut]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [as].[spGetAsChartEvolutionBrut]
  (
		@idAccount	INT,
		@dateMin	DATE,
		@dateMax	DATE
  )
  AS
  BEGIN
  
--declare @idAccount as int;
--declare @dateMin as Datetime;
--declare @dateMax as Datetime;
--declare @isWithITransfer INT;

--set @dateMin='01/07/2015';
--set @dateMax='31/07/2016';
--set @idAccount = null;

--SELECT 
--	CAST(ROW_NUMBER() OVER (ORDER BY T.[YEAR], T.[MONTH]) as INT) as Id,
--	T.[MONTH] AS [Month],
--	T.[YEAR] AS [Year],
--	COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS [Credit],
--	COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS [Debit],
--	COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS [Balance]
--FROM 
--	(
	SELECT 
		CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
		MY.[MONTH],
		MY.[YEAR],
		COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS [Credit],
		COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS [Debit],
		COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS [Balance]
	FROM  [gen].V_MONTH_YEAR MY 

	LEFT JOIN
		(
		SELECT 
			FORMAT(MONTH(DATE_INTEGRATION),'00') AS [MONTH],
			YEAR(DATE_INTEGRATION) AS [YEAR],
			SUM(IIF(AMOUNT_OPERATION<0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_DEBIT,
			SUM(IIF(AMOUNT_OPERATION>0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_CREDIT,
			SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION_BALANCE
		FROM [as].ACCOUNT_STATEMENT 
		WHERE (ID_ACCOUNT=@idAccount OR @idAccount is NULL)
		AND DATE_INTEGRATION >= @dateMin
		AND DATE_INTEGRATION<= @dateMax
		GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
		) AS AST
		ON AST.[MONTH] = MY.[MONTH]
		AND AST.[YEAR] = MY.[YEAR]
		
	WHERE MY.[MONTH]<>'XX' 
	AND CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
	AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax
	--) as T
--GROUP BY ID, MY.[MONTH],MY.[YEAR],AMOUNT_OPERATION_DEBIT,AMOUNT_OPERATION_CREDIT,AMOUNT_OPERATION_BALANCE
	ORDER BY MY.[YEAR],MY.[MONTH]

END

GO
/****** Object:  StoredProcedure [as].[spGetAsChartEvolutionBrut_old]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [as].[spGetAsChartEvolutionBrut_old]
  (
		@idAccount	INT,
		@dateMin	DATE,
		@dateMax	DATE
  )
  AS
  BEGIN
  
--declare @idAccount as int;
--declare @dateMin as Datetime;
--declare @dateMax as Datetime;
--declare @isWithITransfer INT;

--set @dateMin='01/08/2017';
--set @dateMax='31/08/2018';
--set @idAccount = null;

SELECT 
	CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
	MY.[MONTH] AS [Month],
	MY.[YEAR] AS [Year],
	COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS [Credit],
	COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS [Debit],
	COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS [Balance]
FROM 
	(SELECT * FROM  [gen].V_MONTH_YEAR MY WHERE MY.[MONTH]<>'XX' ) AS MY
LEFT JOIN
	(
	SELECT 
		FORMAT(MONTH(DATE_INTEGRATION),'00') AS [MONTH],
		YEAR(DATE_INTEGRATION) AS [YEAR],
		SUM(IIF(AMOUNT_OPERATION<0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_DEBIT,
		SUM(IIF(AMOUNT_OPERATION>0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_CREDIT,
		SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION_BALANCE
	FROM [as].ACCOUNT_STATEMENT 
	WHERE (ID_ACCOUNT=@idAccount OR @idAccount is NULL)
	AND DATE_INTEGRATION >= @dateMin
	AND DATE_INTEGRATION<= @dateMax
	GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
	) AS AST
	ON AST.[MONTH] = MY.[MONTH]
	AND AST.[YEAR] = MY.[YEAR]

AND CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax


--GROUP BY ID, MY.[MONTH],MY.[YEAR],AMOUNT_OPERATION_DEBIT,AMOUNT_OPERATION_CREDIT,AMOUNT_OPERATION_BALANCE
ORDER BY MY.[YEAR],MY.[MONTH]

END

GO
/****** Object:  StoredProcedure [as].[spGetAsChartEvolutionCustomOtf]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [as].[spGetAsChartEvolutionCustomOtf]
  (
		@idAccount	INT,
		@idOperationTypeFamily INT,
		@dateMin	DATE,
		@dateMax	DATE
  )
  AS
  BEGIN
  
--declare @idAccount as int;
--declare @dateMin as Datetime;
--declare @dateMax as Datetime;
--declare @idOperationTypeFamily INT;

--set @dateMin='01/08/2017';
--set @dateMax='31/08/2018';
--set @idAccount = null;
--set @idOperationTypeFamily=11

SELECT 
	CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
	MY.[MONTH] AS [Month],
	MY.[YEAR] AS [Year],
	COALESCE(AMOUNT_OPERATION,0) AS [Amount]
FROM
	(SELECT * FROM  [gen].V_MONTH_YEAR WHERE [MONTH]<>'XX' ) AS MY  
LEFT JOIN
	(
	SELECT 
		FORMAT(MONTH(DATE_INTEGRATION),'00') AS [MONTH],
		YEAR(DATE_INTEGRATION) AS [YEAR],
		SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION
	FROM [as].ACCOUNT_STATEMENT 
	WHERE (ID_ACCOUNT=@idAccount OR @idAccount is NULL)
	AND DATE_INTEGRATION >= @dateMin
	AND DATE_INTEGRATION<= @dateMax
	AND ID_OPERATION_TYPE_FAMILY = @idOperationTypeFamily
	GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
	) AS AST
	ON AST.[MONTH] = MY.[MONTH]
	AND AST.[YEAR] = MY.[YEAR]
WHERE CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax
ORDER BY MY.[YEAR],MY.[MONTH]

END

GO
/****** Object:  StoredProcedure [as].[spGetAsChartEvolutionNoIntTransfer]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [as].[spGetAsChartEvolutionNoIntTransfer]
  (
		@idAccount	INT,
		@idUserGroup INT,
		@dateMin	DATE,
		@dateMax	DATE
  )
  AS
  BEGIN
  
--declare @idAccount as int;
--declare @idUserGroup as int;
--declare @dateMin as Datetime;
--declare @dateMax as Datetime;


--set @dateMin='01/02/2016';
--set @dateMax='28/02/2017';
--set @idAccount = 2;
--set @idUserGroup = 3;

SELECT 
	CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
	MY.[MONTH] as [Month],
	MY.[YEAR] as [Year],
	COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS [Credit],
	COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS [Debit],
	COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS [Balance] 
	--AST.AMOUNT_OPERATION_CREDIT AS [Credit],
	--AST.AMOUNT_OPERATION_DEBIT AS [Debit],
	--AST.AMOUNT_OPERATION_BALANCE AS [Balance] 

FROM  [gen].V_MONTH_YEAR MY
LEFT JOIN
	(
	SELECT 
		FORMAT(MONTH(DATE_INTEGRATION),'00') AS [MONTH],
		YEAR(DATE_INTEGRATION) AS [YEAR],
		SUM(IIF(AMOUNT_OPERATION<0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_DEBIT,
		SUM(IIF(AMOUNT_OPERATION>0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_CREDIT,
		SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION_BALANCE
	FROM [as].ACCOUNT_STATEMENT 
	WHERE (ID_ACCOUNT=@idAccount OR @idAccount is NULL)
	AND DATE_INTEGRATION >= @dateMin
	AND DATE_INTEGRATION<= @dateMax
	AND ID_OPERATION_TYPE_FAMILY<> (SELECT ID FROM ref.OPERATION_TYPE_FAMILY WHERE LABEL='Virement interne' AND ID_USER_GROUP=@idUserGroup)
	GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
	) AS AST
	ON AST.[MONTH] = MY.[MONTH]
	AND AST.[YEAR] = MY.[YEAR]
WHERE MY.[MONTH]<>'XX' 
AND CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax
ORDER BY MY.[YEAR],MY.[MONTH]

END

GO
/****** Object:  StoredProcedure [as].[spGetAsChartEvolutionNoIntTransfer_old]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [as].[spGetAsChartEvolutionNoIntTransfer_old]
  (
		@idAccount	INT,
		@dateMin	DATE,
		@dateMax	DATE
  )
  AS
  BEGIN
  
--declare @idAccount as int;
--declare @dateMin as Datetime;
--declare @dateMax as Datetime;

--set @dateMin='01/08/2017';
--set @dateMax='31/08/2018';
--set @idAccount = null;

SELECT 
	CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
	MY.[MONTH] AS [Month],
	MY.[YEAR] AS [Year],
	COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS [Credit],
	COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS [Debit],
	COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS [Balance]
FROM  (SELECT * FROM  [gen].V_MONTH_YEAR WHERE [MONTH]<>'XX' ) AS MY 
LEFT JOIN
	(
	SELECT 
		FORMAT(MONTH(DATE_INTEGRATION),'00') AS [MONTH],
		YEAR(DATE_INTEGRATION) AS [YEAR],
		SUM(IIF(AMOUNT_OPERATION<0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_DEBIT,
		SUM(IIF(AMOUNT_OPERATION>0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_CREDIT,
		SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION_BALANCE
	FROM [as].ACCOUNT_STATEMENT 
	WHERE (ID_ACCOUNT=@idAccount OR @idAccount is NULL)
	AND DATE_INTEGRATION >= @dateMin
	AND DATE_INTEGRATION<= @dateMax
	AND ID_OPERATION_TYPE_FAMILY<>6
	GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
	) AS AST
	ON AST.[MONTH] = MY.[MONTH]
	AND AST.[YEAR] = MY.[YEAR]
WHERE CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax
--GROUP BY ID, MY.[MONTH],MY.[YEAR],AMOUNT_OPERATION_DEBIT,AMOUNT_OPERATION_CREDIT,AMOUNT_OPERATION_BALANCE
ORDER BY MY.[YEAR],MY.[MONTH]

END

GO
/****** Object:  StoredProcedure [as].[spGetAsInternalTransferCouple]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [as].[spGetAsInternalTransferCouple]
  (
	@idAccountStatement INT,
	@idUserGroup INT
  )
  AS
  BEGIN

--DECLARE @idAccountStatement	INT;
--DECLARE @idUserGroup INT;
--SET @idAccountStatement=5
--SET @idUserGroup=2

	DECLARE @idOperationType INT
	SET @idOperationType = (SELECT ID FROM ref.OPERATION_TYPE
		WHERE LABEL = 'Virement interne' 
		AND ID_USER_GROUP = @idUserGroup)
	print @idOperationType

	SELECT 
		CAST(ROW_NUMBER() OVER (ORDER BY AS1.ID, AS2.ID) as INT) as ID,
		--UPPER(SUBSTRING(AS1.LABEL_OPERATION,LEN(AS1.LABEL_OPERATION) - CHARINDEX(' ',REVERSE(AS1.LABEL_OPERATION))+1,4)) + '' + CAST(ABS(AS1.AMOUNT_OPERATION) as nvarchar(max)) + '' + cast(MONTH(AS1.DATE_INTEGRATION) as nvarchar(max)) + '' + cast(YEAR(AS1.DATE_INTEGRATION) as nvarchar(max)) + '' + cast(DAY(AS1.DATE_INTEGRATION) as nvarchar(max)) AS KEY_VALUE,
		AS1.ID AS ID_1,
		AS2.ID AS ID_2,
		AS1.ID_ACCOUNT,
		AS1.LABEL_OPERATION,
		AS1.DATE_INTEGRATION,
		AS1.AMOUNT_OPERATION
	INTO #INTERNAL_TRANSFER_COUPLE
	FROM [as].[ACCOUNT_STATEMENT] AS1
	INNER JOIN [as].[ACCOUNT_STATEMENT] AS2
	ON 
	--RIGHT(AS1.LABEL_OPERATION,charindex(' ',reverse(AS1.LABEL_OPERATION))-1)=right(AS2.LABEL_OPERATION,charindex(' ',reverse(AS2.LABEL_OPERATION))-1)
	 ABS(AS1.AMOUNT_OPERATION) = ABS(AS2.AMOUNT_OPERATION)
	AND MONTH(AS1.DATE_INTEGRATION) = MONTH(AS2.DATE_INTEGRATION)
	AND YEAR(AS1.DATE_INTEGRATION) = YEAR(AS2.DATE_INTEGRATION)
	AND DAY(AS1.DATE_INTEGRATION) = DAY(AS2.DATE_INTEGRATION)
	AND AS1.ID<>AS2.ID
	 WHERE AS1.ID_OPERATION_TYPE=@idOperationType
	 GROUP BY 	
		AS1.ID,
		AS2.ID,
		AS1.ID_ACCOUNT,
		AS1.LABEL_OPERATION,
		AS1.DATE_INTEGRATION,
		AS1.AMOUNT_OPERATION

  SELECT AST.* 
  FROM #INTERNAL_TRANSFER_COUPLE VITC
  INNER JOIN [as].ACCOUNT_STATEMENT AST
  ON VITC.ID_2 = AST.ID
  WHERE ID_1 = @idAccountStatement

  --DROP TABLE #INTERNAL_TRANSFER_COUPLE
END

GO
/****** Object:  StoredProcedure [as].[spGetAsInternalTransferOrphan]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [as].[spGetAsInternalTransferOrphan]
  (
	@idUserGroup INT
  )
  AS
  BEGIN

--DECLARE @idAccountStatement	INT;
----SET @idAccountStatement=5
--DECLARE @idUserGroup INT;
--SET @idUserGroup=6

	DECLARE @idOperationType INT
	SET @idOperationType = (SELECT ID FROM ref.OPERATION_TYPE
		WHERE CODE='VIRI' --'Virement interne' 
		AND ID_USER_GROUP = @idUserGroup)
	--select @idOperationType

	SELECT 
		CAST(ROW_NUMBER() OVER (ORDER BY AS1.ID, AS2.ID) as INT) as ID,
		AS1.ID AS ID_1,
		AS2.ID AS ID_2,
		AS1.ID_ACCOUNT,
		AS1.LABEL_OPERATION,
		AS1.DATE_INTEGRATION,
		AS1.AMOUNT_OPERATION
	INTO #INTERNAL_TRANSFER_COUPLE
	FROM [as].[ACCOUNT_STATEMENT] AS1
	INNER JOIN [as].[ACCOUNT_STATEMENT] AS2
	ON 
		ABS(AS1.AMOUNT_OPERATION) = ABS(AS2.AMOUNT_OPERATION)
		AND AS1.ID_OPERATION=AS2.ID_OPERATION
		AND MONTH(AS1.DATE_INTEGRATION) = MONTH(AS2.DATE_INTEGRATION)
		AND YEAR(AS1.DATE_INTEGRATION) = YEAR(AS2.DATE_INTEGRATION)
		AND DAY(AS1.DATE_INTEGRATION) = DAY(AS2.DATE_INTEGRATION)
		AND AS1.ID<>AS2.ID
	WHERE AS1.ID_OPERATION_TYPE = COALESCE(@idOperationType,0) -- OR @idOperationType is NULL)
	GROUP BY 	
		AS1.ID,
		AS2.ID,
		AS1.ID_ACCOUNT,
		AS1.LABEL_OPERATION,
		AS1.DATE_INTEGRATION,
		AS1.AMOUNT_OPERATION

	
	SELECT AST.* FROM [as].ACCOUNT_STATEMENT AST
	INNER JOIN ref.OPERATION_TYPE OT
		ON AST.ID_OPERATION_TYPE = OT.ID
	WHERE CODE='VIRI'
	AND ID_USER_GROUP = @idUserGroup
	AND AST.ID NOT IN ( (SELECT ID_1 as ID FROM #INTERNAL_TRANSFER_COUPLE )
	UNION 
	(SELECT ID_2 as ID FROM #INTERNAL_TRANSFER_COUPLE ) )

  --SELECT AST.* 
  --FROM #INTERNAL_TRANSFER_COUPLE VITC
  --INNER JOIN [as].ACCOUNT_STATEMENT AST
  --ON VITC.ID_2 = AST.ID
  --WHERE (ID_1=@idAccountStatement OR @idAccountStatement is NULL) 

  --DROP TABLE #INTERNAL_TRANSFER_COUPLE
END


--select * from #INTERNAL_TRANSFER_COUPLE

--exec sp_executesql N'[as].spGetAsInternalTransferOrphan @idUserGroup
--',N'@idUserGroup int',@idUserGroup=3

--select * from [as].ACCOUNT_STATEMENT where ID_OPERATION_TYPE is null
GO
/****** Object:  StoredProcedure [as].[spGetSolde]    Script Date: 04/11/2020 14:07:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [as].[spGetSolde]
  (
		@idUser		INT,
		@idAccount	INT,
		@dateStart	DATE,
		@dateEnd	DATE,
		@isWithITransfer INT
  )
  AS
  BEGIN

--DECLARE		@idAccount	INT;
--DECLARE		@dateStart	DATE;
--DECLARE		@dateEnd	DATE;
--DECLARE		@isWithITransfer INT;
--DECLARE		@idUser INT;

--SET @idAccount	=null
--SET @idUser		=3
--SET @dateStart	='01-01-2000'
--SET @dateEnd	='28-02-2019'
--SET @isWithITransfer =0


SELECT 
	UA.ID_ACCOUNT AS IdAccount,
	CAST(round(coalesce(CDT.CREDIT,0),2) as float) AS Credit,
	CAST(round(coalesce(CDT.DEBIT,0),2) as float) AS Debit,
	CAST(round(coalesce(CDT.TOTAL,0),2) as float) AS Total,
	cast(A.START_AMOUNT + round(coalesce(TOTAL.TOTAL,0),2) as float) AS Solde

FROM [user].USER_ACCOUNT UA
INNER JOIN [ref].ACCOUNT A
	ON UA.ID_ACCOUNT = A.ID
LEFT JOIN 
(
	SELECT 
		AST.ID_ACCOUNT,
		SUM(AMOUNT_OPERATION) as TOTAL
	FROM [as].ACCOUNT_STATEMENT AST
	WHERE (ID_ACCOUNT = @idAccount OR @idAccount is NULL)
	AND DATE_INTEGRATION<=@dateEnd
	GROUP BY AST.ID_ACCOUNT
) AS TOTAL
 ON UA.ID_ACCOUNT = TOTAL.ID_ACCOUNT
LEFT JOIN
(
	SELECT	
		ID_ACCOUNT,
		SUM(coalesce(DEBIT,0)) AS DEBIT,
		SUM(coalesce(CREDIT,0)) AS CREDIT,
		SUM(coalesce(DEBIT,0)) + SUM(coalesce(CREDIT,0)) AS TOTAL
	FROM (
	SELECT 
		ID_ACCOUNT,
		CASE WHEN AMOUNT_OPERATION<0 THEN AMOUNT_OPERATION END AS DEBIT,
		CASE WHEN AMOUNT_OPERATION>0 THEN AMOUNT_OPERATION END AS CREDIT
	FROM [as].ACCOUNT_STATEMENT
	WHERE (ID_ACCOUNT = @idAccount OR @idAccount is NULL)
	AND DATE_INTEGRATION >= @dateStart
	AND DATE_INTEGRATION <= @dateEnd
	) AS CDT
	GROUP BY ID_ACCOUNT
) AS CDT
	ON UA.ID_ACCOUNT = CDT.ID_ACCOUNT
WHERE ID_USER=@idUser
AND (UA.ID_ACCOUNT = @idAccount OR @idAccount is NULL)
END
GO
