//负荷K线分析
import echarts from "echarts";
import "echarts/map/js/china";
import "echarts/map/js/province/henan";
import "echarts/map/js/province/shanxi";
import "echarts/map/js/province/anhui";
import "echarts/map/js/province/aomen";
import "echarts/map/js/province/beijing";
import "echarts/map/js/province/chongqing";
import "echarts/map/js/province/fujian";
import "echarts/map/js/province/gansu";
import "echarts/map/js/province/guangdong";
import "echarts/map/js/province/guangxi";
import "echarts/map/js/province/guizhou";
import "echarts/map/js/province/hainan";
import "echarts/map/js/province/hebei";
import "echarts/map/js/province/heilongjiang";
import "echarts/map/js/province/hubei";
import "echarts/map/js/province/hunan";
import "echarts/map/js/province/jiangsu";
import "echarts/map/js/province/jiangxi";
import "echarts/map/js/province/jilin";
import "echarts/map/js/province/liaoning";
import "echarts/map/js/province/neimenggu";
import "echarts/map/js/province/ningxia";
import "echarts/map/js/province/qinghai";
import "echarts/map/js/province/shandong";
import "echarts/map/js/province/shanghai";
import "echarts/map/js/province/shanxi1";
import "echarts/map/js/province/sichuan";
import "echarts/map/js/province/taiwan";
import "echarts/map/js/province/tianjin";
import "echarts/map/js/province/xianggang";
import "echarts/map/js/province/xinjiang";
import "echarts/map/js/province/xizang";
import "echarts/map/js/province/yunnan";
import "echarts/map/js/province/zhejiang";

// import { sliceTimeOutput, day3, day5, day10, day20, day3_des, day5_des, day10_des, day20_des, day, week, month, probability_sliceTime } from "../../server/mainNetworkPalnService";


let AnalysisMap = {
    destroy() {   //实例销毁之前释放内存
        this.option = null;
        this.originalData = null;
        this.probability_sliceTime = null;
        this.chart = null;
    },
    init(divId) {
        this.option = null;
        this.originalData = null;
        this.probability_sliceTime = null;
        this.chart = echarts.init(document.getElementById(divId));
        this.initChartOption();
    },
    showChart() {
        this.chart.setOption(this.option, true);
    },
    initChartOption() {
        var citydata = [
            { name: "永州市", value: 6 },
            { name: "湘潭市", value: 7 },
            { name: "滨州市", value: 8 },
            { name: "株洲市", value: 10.6 },
            { name: "衡阳市", value: 10.3 },
            { name: "常德市", value: 11.5 },
            { name: "岳阳市", value: 13.7 },
            { name: "长沙市", value: 16.4 },
        ];
        var titledata = [];
        for (var i = 0; i < citydata.length; i++) {
            titledata.push(citydata[i].name);
        }

        this.option = {
            tooltip: {
                formatter: '{a}<br />{c}'+'%'
            },
            legend: {
                show: false
            },
            grid: {
                // 仅仅控制条形图的位置
                show: false,
                containLabel: false,
                right: 40,
                top: 50,
                bottom: 30,
                width: "30%"
            },
            toolbox: {
                show: false
            },
            // visualMap: {
            //     show:true,
            //     min: 0,
            //     max: 200,
            //     calculable: true,
            //     inRange: {
            //         color: ["#8E8A8A", "#32A30C", "#eac736", "#d94e5d"]
            //     },
            //     textStyle: {
            //         color: "#fff"
            //     }
            // },
            xAxis: [
                {
                    type: "value",
                    inside: false,
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick:{
                        show:false
                    },
                    axisLine: {
                        show: false
                    },
                    margin: 10
                }
            ],
            yAxis: [
                {
                    type: "category",
                    boundaryGap: true,
                    axisLine: {
                        show: false
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel: {
                        align: "right",
                        margin: 10,
                        showMaxLabel: true
                    },
                    data: titledata
                }
            ],

            series: [
                {
                    name: "占比",
                    type: "map",
                    mapType: "湖南",
                    left: "120",
                    roam: "move",
                    width:'25%',
                    mapValueCalculation: "sum",
                    zoom: 1,
                    selectedMode: false,
                    showLegendSymbol: false,
                    label: {
                        normal: {
                            textStyle: {
                                color: "#666"
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: "#234EA5"
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: "#EEEEEE",
                            borderColor: "#FFFFFF"
                        },
                        emphasis: {
                            areaColor: "#11DBED"
                        }
                    },
                    data: citydata
                },
                {
                    name: "占比",
                    type: "bar",
                    roam: false,
                    visualMap: false,
                    itemStyle: {
                      color: "#11DBED"
                    },
                    barWidth: 18,
                    label: {
                        normal: {
                            show: true,
                            fontSize: 12,
                            color:'#000',
                            position: "right"
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: citydata
                }
            ]
        };
    }
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
export default AnalysisMap