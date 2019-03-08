import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { AsChart } from "app/main/_models/account-statement/account-statement-chart.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsChartEvolutionBrut, LoadAsChartEvolutionBrutSuccess } from "./account-statement-chart.action";


export class AsChartStateModel extends DataInfo<AsChart> {
    constructor () {
        super();
    }
}

let asChartStateModel = new AsChartStateModel();

@State<AsChartStateModel>({
    name: 'AsChart',
    defaults : asChartStateModel
})

export class AsChartState {

    constructor(
        private _asService: AsService
        // private _referentialService: ReferentialService
        ) {
    }

    @Selector()
    static get(state: AsChartStateModel) {
 
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsChartEvolutionBrut)
    loadAsChartEvolutionBrut(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrut) {
        // const state = context.getState();
        
        // state.loadingInfo.loaded=false;
        // state.loadingInfo.loading=true;
        // state.datas = null;
        
        // context.patchState(state);
        // this._asService.getAsChartEvolutionBrut(action.payload)
        //     .subscribe(result=> {
        //         context.dispatch(new LoadAsChartEvolutionBrutSuccess(result));
        //     });

    }

    @Action(LoadAsChartEvolutionBrutSuccess)
    LoadAsChartEvolutionBrutSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrutSuccess) {
        // let state = context.getState();
        // state.loadingInfo.loaded = true;
        // state.loadingInfo.loading = false;
        // state.datas = action.payload;

        // context.patchState(state);

    }


//     USE [XmlToSwift_Demo]
// GO
// /****** Object:  StoredProcedure [dbo].[spGetAsChartEvolutionBrut]    Script Date: 08/03/2019 17:18:00 ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO

// ALTER PROCEDURE [dbo].[spGetAsChartEvolutionBrut]
//   (
// 		@idAccount	INT,
// 		@dateStart	DATE,
// 		@dateEnd	DATE
//   )
//   AS
//   BEGIN
  
// --declare @idAccount as int;
// --declare @dateStart as Datetime;
// --declare @dateEnd as Datetime;
// --declare @isWithITransfer INT;

// --set @dateStart='01/08/2017';
// --set @dateEnd='31/08/2018';
// --set @idAccount = null;

// SELECT 
// 	MY.[MONTH],
// 	MY.[YEAR],
// 	COALESCE(AST.AMOUNT_OPERATION_CREDIT,0) AS AMOUNT_OPERATION_CREDIT,
// 	COALESCE(AST.AMOUNT_OPERATION_DEBIT,0) AS AMOUNT_OPERATION_DEBIT,
// 	COALESCE(AST.AMOUNT_OPERATION_BALANCE,0) AS AMOUNT_OPERATION_BALANCE
// FROM  V_MONTH_YEAR MY 
// LEFT JOIN
// 	(
// 	SELECT 
// 		FORMAT(MONTH(DATE_INTEGRATION),'00') AS [MONTH],
// 		YEAR(DATE_INTEGRATION) AS [YEAR],
// 		SUM(IIF(AMOUNT_OPERATION<0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_DEBIT,
// 		SUM(IIF(AMOUNT_OPERATION>0,AMOUNT_OPERATION,0)) AS AMOUNT_OPERATION_CREDIT,
// 		SUM(AMOUNT_OPERATION) AS AMOUNT_OPERATION_BALANCE
// 	FROM ACCOUNT_STATEMENT 
// 	WHERE ID_ACCOUNT=@idAccount OR @idAccount is NULL
// 	AND DATE_INTEGRATION >= @dateStart
// 	AND DATE_INTEGRATION<= @dateEnd
// 	GROUP BY FORMAT(MONTH(DATE_INTEGRATION),'00'),YEAR(DATE_INTEGRATION)
// 	) AS AST
// 	ON AST.[MONTH] = MY.[MONTH]
// 	AND AST.[YEAR] = MY.[YEAR]
// WHERE CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103) >= @dateStart
// AND EOMONTH(CONVERT(DATETIME,'01/' + MY.[MONTH] + '/' + CONVERT(nvarchar(20),MY.[YEAR]) ,103)) <= @dateEnd
// GROUP BY MY.[MONTH],MY.[YEAR],AMOUNT_OPERATION_DEBIT,AMOUNT_OPERATION_CREDIT,AMOUNT_OPERATION_BALANCE
// ORDER BY MY.[YEAR],MY.[MONTH]

// END
    
    
}