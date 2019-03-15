export class WidgetCardChartBarSkeleton {
    
    public static get getEmptyGraph() : any {
        return {
            title: {},
            chartType : 'bar',
            datasets  : [],
            labels    : [],
            colors    : [ {
                backgroundColor: ['#FF7360','#6FC8CE','#6FC8CE','#FFFCC4','#B9E8E0','#FFFCC4','#B9E8E0','#6FC8CE','#FFFCC4','#FFFCC4','#B9E8E0','#FAFFF2','#B9E8E0'],
                borderColor    : ['#FF7360','#6FC8CE','#6FC8CE','#FFFCC4','#B9E8E0','#FFFCC4','#B9E8E0','#6FC8CE','#FFFCC4','#FFFCC4','#B9E8E0','#FAFFF2','#B9E8E0']
            }],
            // backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
            
            // [
            //     {
            //         borderColor    : '#42a5f5',
            //         backgroundColor: '#42a5f5'
            //     },
            //     {
            //         borderColor    : '#42a5f5',
            //         backgroundColor: '#FF7360'
            //     },
            // ],
            options   : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false,
                            ticks: {
                                display: false,
                                step: 1000
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: -5000,
                                max: 0
                            }
                        }
                    ]
                }
            }
        };
    }
}