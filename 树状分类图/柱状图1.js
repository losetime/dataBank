//用户用电负荷曲线分解

import echarts from "echarts";
import {indeustryClassify} from "../../server/loadForecastService"

let classifyWay = {
    destroy() {   //实例销毁之前需要释放
        this.chartDiv = null;
        this.chart.dispose();
        this.chart = null;
        this.option = null;
        this.originalData = null;
        this.data = null;
    },
    async init(divId,val) {
        this.cons_no="",
        this.originalData = await indeustryClassify(val);
        this.chartDiv = document.getElementById(divId);
        this.chart = echarts.init(this.chartDiv);
        this.initChartOption();
    },
    showChart() {
        this.chart.setOption(this.option);
    },
    initChartOption() {
        let targetCoord = []
        const curveness = 0.2
        const linesData = []
        const categories = [
            {
                name: '暂无流入',
                itemStyle: {
                    normal: {
                        color: '#E4E4E4'
                        // new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ffb402'
                        // }, {
                        //     offset: 1,
                        //     color: '#ffdc84'
                        // }]),
                    },
                    emphasis: {
                        color: '#2485C2'
                    }
                },
                label: {
                    normal: {
                        fontSize: '14',
                    },
                    emphasis: {
                        color: '#fff'
                    }
                },
            }
        ]

        const items=[];
        let x=0;
        for(let val of this.originalData){
            items.push(
                {
                    name:val.industry_name,
                    cons_no:val.industry_no,
                    category: 0,
                    active: true,
                    value: [x, 0]
                }
            )
            x+=150;
        }
        targetCoord=[(x-150)/2,120]
        const item = {
            name: "全部",
            value: targetCoord,
            symbolSize: 80,
            itemStyle: {
                normal: {
                    color:"#E4E4E4",
                },
                emphasis: {
                    color: '#2485C2'
                }
            },
            label: {
                normal: {
                    fontSize: '14'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }

        const data = items.concat(item)

        items.forEach(function (el) {
            if (el.active) {
                linesData.push([{
                    coord: el.value
                }, {
                    coord: targetCoord
                }])
            }
        })

        const links = items.map((el) => {
            return {
                source: el.name,
                target: item.name,
                speed: el.speed,
                lineStyle: {
                    normal: {
                        color:'#B7B7B7',
                        // curveness: curveness,   //曲线还是直线
                    }
                },
            }
        })

        this.option = {
            // legend: [{
            //     formatter: function (name) {
            //         return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
            //     },
            //     tooltip: {
            //         show: true
            //     },
            //     textStyle: {
            //         color: '#999'
            //     },
            //     selectedMode: false,
            //     right: 0,
            //     data: categories.map(function (el) {
            //         return el.name
            //     })
            // }],
            grid:{
                left: '10%',
                right: '10%',
                top:'25%',
                bottom: '15%',
            },
            xAxis: {
                show: false,
                type: 'value'
            },
            yAxis: {
                show: false,
                type: 'value'
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbol: "rect",
                    symbolSize: 100,
                    silent:false,
                    // z: 3,
                    // edgeLabel: {
                    //     normal: {
                    //         show: true,
                    //         textStyle: {
                    //             fontSize: 14
                    //         },
                    //         formatter: function(params) {
                    //             let txt = ''
                    //             if (params.data.speed !== undefined) {
                    //                 txt = params.data.speed
                    //             }
                    //             return txt
                    //         },
                    //     }
                    // },
                    label: {
                        normal: {
                            show: true,
                            // position: 'bottom',
                            color: '#5e5e5e'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowColor: 'none'
                        },
                        emphasis: {

                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            shadowColor: 'none'
                        },
                    },
                    edgeSymbol: ['arrow', 'none'],  //箭头指向 
                    edgeSymbolSize: 8,
                    data: data,
                    links: links,
                    categories: categories,
                }
            ]
        }

    },
    // changeTheme(theme) {
    //     if (theme === 'dark') {
    //         this.option.textStyle.color = 'white';
    //         this.option.title.textStyle.color = 'white';
    //     } else if (theme === 'light') {
    //         this.option.textStyle.color = 'black';
    //         this.option.title.textStyle.color = 'black';
    //     }
    //     this.chart.setOption(this.option);
    // }

}
export default classifyWay