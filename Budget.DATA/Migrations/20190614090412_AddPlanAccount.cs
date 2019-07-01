using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class AddPlanAccount : Migration
    {
        //==============================================================================
        //Données ajoutées/modifiés:
        //insert into[XmlToSwift_Demo].[plan].[POSTE] values('Epargne')
        //insert into gen.[MONTH] values('XX','FR','Annuel','an')
        //delete from ref.OPERATION_METHOD_LEXICAL where ID=20 --2,8,CARTE,2
        //update ref.OPERATION_METHOD_LEXICAL set KEYWORD = 'CB*' where ID = 1
        //update ref.OPERATION_METHOD_LEXICAL set ORDER_ID=14 where KEYWORD = 'CB*' AND ID_BANK_FAMILY = 2
        //insert into ref.OPERATION_METHOD_LEXICAL values(2,2,'SC*',14)
        //==============================================================================
        // procedure / vue modifiée
        //        ALTER VIEW[plan].[V_PLAN_OPERATION_TYPE_FAMILY]
        //        AS
        //SELECT

        //    ACS.ID AS ID_ACCOUNT_STATEMENT,
        //	CAST(ACS.DATE_INTEGRATION AS DATE) AS DATE_INTEGRATION,
        //    ABS(COALESCE(ACS.AMOUNT_OPERATION, 0)) AS AMOUNT_OPERATION,
        //     ABS(OPERATION.PREVIEW_AMOUNT) AS PREVIEW_AMOUNT,
        //     OPERATION.ID_PLAN as ID_PLAN,
        //	OPERATION.ID_PLAN_POSTE as ID_PLAN_POSTE,
        //	OPERATION.PLAN_POSTE_LABEL as PLAN_POSTE_LABEL,
        //	OPERATION.ID_POSTE as ID_POSTE,
        //	OPERATION.ID_REFERENCE as ID_REFERENCE,
        //	OPERATION.LABEL_REFERENCE as LABEL_REFERENCE,
        //	OPERATION.[MONTH] as [MONTH],
        //	OPERATION.[YEAR] as [YEAR]
        //        FROM[as].ACCOUNT_STATEMENT ACS
        //RIGHT JOIN(

        // SELECT
        //    P.ID AS ID_PLAN,
        //    PP.ID AS ID_PLAN_POSTE,
        //    PP.LABEL AS PLAN_POSTE_LABEL,
        //    PP.ID_POSTE AS ID_POSTE,
        //    PPR.ID_REFERENCE,
        //    OTF.LABEL AS LABEL_REFERENCE,
        //    PPF.ID_FREQUENCY AS [MONTH],
        //    P.[YEAR] AS [YEAR],
        //	--U.FIRST_NAME,
        //	--PPU.PERCENTAGE_PART,
        //	--PPU.PERCENTAGE_PART* PPF.PREVIEW_AMOUNT / 100 AS PA,
        //    PPF.PREVIEW_AMOUNT,
        //    RT.TABLE_NAME
        // FROM [plan].[PLAN] P
        // INNER JOIN[plan].PLAN_POSTE PP

        //    ON P.ID= PP.ID_PLAN
        // --INNER JOIN PLAN_POSTE_USER PPU
        //	--ON PP.ID= PPU.ID_PLAN_POSTE
        // --INNER JOIN PLAN_USER PU
        //	--ON PPU.ID_PLAN_USER= PU.ID
        // --INNER JOIN [USER] U
        //	--ON PU.ID_USER = U.ID
        // INNER JOIN [plan].PLAN_POSTE_REFERENCE PPR

        //    ON PP.ID= PPR.ID_PLAN_POSTE
        // INNER JOIN [plan].REFERENCE_TABLE RT

        //    ON PPR.ID_REFERENCE_TABLE= RT.ID
        // INNER JOIN [ref].OPERATION_TYPE_FAMILY OTF

        //    ON PPR.ID_REFERENCE=OTF.ID
        // INNER JOIN[plan].[PLAN_POSTE_FREQUENCY] PPF
        //    ON PP.ID= PPF.ID_PLAN_POSTE
        //WHERE TABLE_NAME = 'OPERATION_TYPE_FAMILY'
        //) AS OPERATION
        //	--Si mois = 13, faire jointure auto sur le mois
        //    ON MONTH(ACS.DATE_INTEGRATION)=IIF(OPERATION.[MONTH]= 13, MONTH(ACS.DATE_INTEGRATION), OPERATION.[MONTH])

        //    AND YEAR(ACS.DATE_INTEGRATION)=OPERATION.[YEAR]
        //    AND ACS.ID_OPERATION_TYPE_FAMILY=OPERATION.ID_REFERENCE





        //        ALTER PROCEDURE[as].[spGetAsChartEvolutionBrut]
        //        (
        //          @idAccount INT,
        //          @dateMin DATE,
        //          @dateMax DATE
        //    )
        //    AS
        //  BEGIN

        //--declare @idAccount as int;
        //--declare @dateMin as Datetime;
        //--declare @dateMax as Datetime;
        //--declare @isWithITransfer INT;

        //--set @dateMin = '01/08/2017';
        //--set @dateMax = '31/08/2018';
        //--set @idAccount = null;

        //        SELECT
        //            CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
        //	MY.[MONTH] AS[Month],
        //    MY.[YEAR] AS[Year],
        //	COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS[Credit],
        //	COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS[Debit],
        //	COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS[Balance]
        //FROM
        //    (SELECT* FROM  [gen].V_MONTH_YEAR MY WHERE MY.[MONTH]<>'XX' ) AS MY
        //LEFT JOIN
        //    (
        //    SELECT
        //        FORMAT(MONTH(DATE_INTEGRATION),'00') AS[MONTH],
        //		YEAR(DATE_INTEGRATION) AS[YEAR],
        //		SUM(IIF(AMOUNT_OPERATION<0, AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_DEBIT,
        //         SUM(IIF(AMOUNT_OPERATION > 0, AMOUNT_OPERATION, 0)) AS AMOUNT_OPERATION_CREDIT,
        //             SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION_BALANCE

        //    FROM[as].ACCOUNT_STATEMENT
        //   WHERE(ID_ACCOUNT= @idAccount OR @idAccount is NULL)

        //    AND DATE_INTEGRATION >= @dateMin
        //    AND DATE_INTEGRATION<= @dateMax
        //    GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
        //	) AS AST

        //    ON AST.[MONTH] = MY.[MONTH]

        //    AND AST.[YEAR] = MY.[YEAR]

        //AND CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
        //AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax


        //--GROUP BY ID, MY.[MONTH],MY.[YEAR],AMOUNT_OPERATION_DEBIT,AMOUNT_OPERATION_CREDIT,AMOUNT_OPERATION_BALANCE
        //ORDER BY MY.[YEAR], MY.[MONTH]




        //        ALTER PROCEDURE[as].[spGetAsChartEvolutionCustomOtf]
        //        (
        //   @idAccount INT,
        //   @idOperationTypeFamily INT,
        //   @dateMin DATE,
        //   @dateMax DATE
        //)
        //AS
        //  BEGIN

        //--declare @idAccount as int;
        //--declare @dateMin as Datetime;
        //--declare @dateMax as Datetime;
        //--declare @idOperationTypeFamily INT;

        //--set @dateMin = '01/08/2017';
        //--set @dateMax = '31/08/2018';
        //--set @idAccount = null;
        //--set @idOperationTypeFamily = 11

        //SELECT
        //    CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
        //	MY.[MONTH] AS[Month],
        //    MY.[YEAR] AS[Year],
        //	COALESCE(AMOUNT_OPERATION,0) AS[Amount]
        //FROM
        //    (SELECT* FROM  [gen].V_MONTH_YEAR WHERE [MONTH]<>'XX' ) AS MY
        //LEFT JOIN
        //    (
        //    SELECT
        //        FORMAT(MONTH(DATE_INTEGRATION),'00') AS[MONTH],
        //		YEAR(DATE_INTEGRATION) AS[YEAR],
        //		SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION

        //    FROM[as].ACCOUNT_STATEMENT
        //   WHERE(ID_ACCOUNT= @idAccount OR @idAccount is NULL)

        //    AND DATE_INTEGRATION >= @dateMin
        //    AND DATE_INTEGRATION<= @dateMax
        //    AND ID_OPERATION_TYPE_FAMILY = @idOperationTypeFamily
        //    GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
        //	) AS AST

        //    ON AST.[MONTH] = MY.[MONTH]

        //    AND AST.[YEAR] = MY.[YEAR]
        //WHERE CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
        //AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax
        //ORDER BY MY.[YEAR], MY.[MONTH]

        //END





        //        ALTER PROCEDURE[as].[spGetAsChartEvolutionNoIntTransfer]
        //        (
        //   @idAccount INT,
        //   @dateMin DATE,
        //   @dateMax DATE
        //)
        //AS
        //  BEGIN

        //--declare @idAccount as int;
        //--declare @dateMin as Datetime;
        //--declare @dateMax as Datetime;

        //--set @dateMin = '01/08/2017';
        //--set @dateMax = '31/08/2018';
        //--set @idAccount = null;

        //        SELECT
        //            CAST(ROW_NUMBER() OVER (ORDER BY MY.[YEAR], MY.[MONTH]) as INT) as Id,
        //	MY.[MONTH] AS[Month],
        //    MY.[YEAR] AS[Year],
        //	COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS[Credit],
        //	COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS[Debit],
        //	COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS[Balance]
        //FROM(SELECT* FROM  [gen].V_MONTH_YEAR WHERE [MONTH]<>'XX' ) AS MY
        //LEFT JOIN
        //    (
        //    SELECT
        //        FORMAT(MONTH(DATE_INTEGRATION),'00') AS[MONTH],
        //		YEAR(DATE_INTEGRATION) AS[YEAR],
        //		SUM(IIF(AMOUNT_OPERATION<0, AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_DEBIT,
        //         SUM(IIF(AMOUNT_OPERATION > 0, AMOUNT_OPERATION, 0)) AS AMOUNT_OPERATION_CREDIT,
        //             SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION_BALANCE

        //    FROM[as].ACCOUNT_STATEMENT
        //   WHERE(ID_ACCOUNT= @idAccount OR @idAccount is NULL)

        //    AND DATE_INTEGRATION >= @dateMin
        //    AND DATE_INTEGRATION<= @dateMax
        //    AND ID_OPERATION_TYPE_FAMILY<>6
        //	GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
        //	) AS AST

        //    ON AST.[MONTH] = MY.[MONTH]

        //    AND AST.[YEAR] = MY.[YEAR]
        //WHERE CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateMin
        //AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateMax
        //--GROUP BY ID, MY.[MONTH],MY.[YEAR],AMOUNT_OPERATION_DEBIT,AMOUNT_OPERATION_CREDIT,AMOUNT_OPERATION_BALANCE
        //ORDER BY MY.[YEAR], MY.[MONTH]

        //END


        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PLAN_ACCOUNT",
                schema: "plan",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_PLAN = table.Column<int>(nullable: false),
                    ID_ACCOUNT = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PLAN_ACCOUNT", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PLAN_ACCOUNT_ACCOUNT_ID_ACCOUNT",
                        column: x => x.ID_ACCOUNT,
                        principalSchema: "ref",
                        principalTable: "ACCOUNT",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PLAN_ACCOUNT_PLAN_ID_PLAN",
                        column: x => x.ID_PLAN,
                        principalSchema: "plan",
                        principalTable: "PLAN",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_ACCOUNT_ID_ACCOUNT",
                schema: "plan",
                table: "PLAN_ACCOUNT",
                column: "ID_ACCOUNT");

            migrationBuilder.CreateIndex(
                name: "IX_PLAN_ACCOUNT_ID_PLAN",
                schema: "plan",
                table: "PLAN_ACCOUNT",
                column: "ID_PLAN");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PLAN_ACCOUNT",
                schema: "plan");
        }
    }
}
