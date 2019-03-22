//出力概率密度与出力持续曲线图

import echarts from "echarts";
// import mainNetworkPalnService from "../service/mainNetworkPalnService"
let userLoadClassify = {
    destroy() {
        this.chart.dispose();
        this.chart = null;
        this.option = null;
        this.originalData = null;
    },
    async init(divId) {
        this.option = null;
        this.originalData = null;
        this.chart = echarts.init(document.getElementById(divId));
        window.onresize = this.chart.resize
        this.initChartOption();
    },
    initChartOption() {
        var dataGY = [
            [1,55,9,56,0.46,18,6,"良"],
            [2,25,11,21,0.65,34,9,"优"],
            [3,56,7,63,0.3,14,5,"良"],
            [4,33,7,29,0.33,16,6,"优"],
            [9,267,216,280,4.8,108,64,"重度污染"],
            [10,185,127,216,2.52,61,27,"中度污染"],
            [11,39,19,38,0.57,31,15,"优"],
            [14,108,79,120,1.7,75,41,"轻度污染"],
            [15,108,63,116,1.48,44,26,"轻度污染"]
        ];
        var dataJM=[
            [16,33,6,29,0.34,13,5,"优"],
            [17,94,66,110,1.54,62,31,"良"],
            [18,186,142,192,3.88,93,79,"中度污染"],
            [19,57,31,54,0.96,32,14,"良"],
            [20,22,8,17,0.48,23,10,"优"],
            [21,39,15,36,0.61,29,13,"优"],
            [22,94,69,114,2.08,73,39,"良"],
            [23,99,73,110,2.43,76,48,"良"],
            [24,31,12,30,0.5,32,16,"优"],
            [25,42,27,43,1,53,22,"优"],
            [26,154,117,157,3.05,92,58,"中度污染"],
            [27,234,185,230,4.09,123,69,"重度污染"],
            [28,160,120,186,2.77,91,50,"中度污染"],
            [29,134,96,165,2.76,83,41,"轻度污染"],
            [30,52,24,60,1.03,50,21,"良"],
            [31,46,5,49,0.28,10,6,"优"]
        ]
        var dataSY = [
            [1,26,37,27,1.163,27,13,"优"],
            [2,85,62,71,1.195,60,8,"良"],
            [3,78,38,74,1.363,37,7,"良"],
            [4,21,21,36,0.634,40,9,"优"],
            [5,41,42,46,0.915,81,13,"优"],
            [12,64,51,101,0.862,58,23,"良"],
            [13,70,69,120,1.198,65,36,"良"],
            [14,77,105,178,2.549,64,16,"良"]
        ];
        var dataPG=[
            [15,109,68,87,0.996,74,29,"轻度污染"],
            [16,73,68,97,0.905,51,34,"良"],
            [17,54,27,47,0.592,53,12,"良"],
            [18,51,61,97,0.811,65,19,"良"],
            [19,91,71,121,1.374,43,18,"良"],
            [20,73,102,182,2.787,44,19,"良"],
            [21,73,50,76,0.717,31,20,"良"],
            [25,146,84,139,1.094,40,17,"轻度污染"],
            [26,113,108,137,1.481,48,15,"轻度污染"],
            [30,106,116,188,3.628,101,16,"轻度污染"],
            [31,118,50,0,1.383,76,11,"轻度污染"]
        ]
        var dataFGY = [
            [1,91,45,125,0.82,34,23,"良"],
            [2,65,27,78,0.86,45,29,"良"],
            [3,83,60,84,1.09,73,27,"良"],
            [4,109,81,121,1.28,68,51,"轻度污染"],
            [5,106,77,114,1.07,55,51,"轻度污染"],
            [6,109,81,121,1.28,68,51,"轻度污染"],
            [7,106,77,114,1.07,55,51,"轻度污染"],
            [11,117,81,124,1.03,45,24,"轻度污染"],
            [12,99,71,142,1.1,62,42,"良"],
            [13,95,69,130,1.28,74,50,"良"],
            [14,116,87,131,1.47,84,40,"轻度污染"]
        ];
        var dataNY=[
            [15,108,80,121,1.3,85,37,"轻度污染"],
            [16,134,83,167,1.16,57,43,"轻度污染"],
            [17,79,43,107,1.05,59,37,"良"],
            [18,71,46,89,0.86,64,25,"良"],
            [19,97,71,113,1.17,88,31,"良"],
            [20,84,57,91,0.85,55,31,"良"],
            [21,87,63,101,0.9,56,41,"良"],
            [22,104,77,119,1.09,73,48,"轻度污染"],
            [23,87,62,100,1,72,28,"良"],
            [24,168,128,172,1.49,97,56,"中度污染"],
            [29,188,143,197,1.66,99,51,"中度污染"],
            [30,174,131,174,1.55,108,50,"中度污染"],
            [31,187,143,201,1.39,89,53,"中度污染"]
        ];
        var schema = [
            {name: 'AQIindex', index: 0, text: '用户'},
            {name: 'PM25', index: 1, text: '最大负荷值'},
            {name: 'PM10', index: 2, text: '最小负荷值'},
            {name: 'CO', index: 3, text: '平均负荷值'},
        ];
        this.option = {
            
            title: {
                text: '用户用电负荷分类'
            },
            legend: {
                y:'bottom',
                data: ['工业用户', '居民用户','商业用户','排灌用户','非工业用户','农业用户']
            },
            grid:{
                left: '5%',
                right: '8%',
                top:'18%',
                bottom: '15%',
            },
            tooltip: {
                padding: 10,
                backgroundColor: 'rgba(0,0,0,.6)',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return schema[0].text + '：' + value[0] + '<br>'
                        + schema[1].text + '：' + value[1] + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>'
                }
            },
            xAxis: {
                name:'峰谷差率',
                splitLine: {
                    show:false
                }
            },
            yAxis: {
                name: '平均负荷',
                splitLine: {
                    show:false
                }
            },
            series: [
            {
                name: '工业用户',
                data: dataGY,
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2]/5;
                },
                label: {
                    emphasis: {
                        show: true,
                        // formatter: function (param) {
                        //     return param.data[3];
                        // },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(78,203,115,0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(158,255,187)'
                        }, {
                            offset: 1,
                            color: 'rgb(78,203,115)'
                        }])
                    }
                }
            }, 
            {
                name: '居民用户',
                data: dataJM,
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2]/5;
                },
                label: {
                    emphasis: {
                        show: true,
                        // formatter: function (param) {
                        //     return param.data[3];
                        // },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(234,85,6,0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(248,186,154)'
                        }, {
                            offset: 1,
                            color: 'rgb(234,85,6)'
                        }])
                    }
                }
            },
            {
                name: '商业用户',
                data: dataSY,
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2]/5;
                },
                label: {
                    emphasis: {
                        show: true,
                        // formatter: function (param) {
                        //     return param.data[3];
                        // },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(242,99,123, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(255,163,178)'
                        }, {
                            offset: 1,
                            color: 'rgb(242,99,123)'
                        }])
                    }
                }
            },
            {
                name: '排灌用户',
                data: dataPG,
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2]/5;
                },
                label: {
                    emphasis: {
                        show: true,
                        // formatter: function (param) {
                        //     return param.data[3];
                        // },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(151,95,229, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(199,160,253)'
                        }, {
                            offset: 1,
                            color: 'rgb(151,95,229)'
                        }])
                    }
                }
            },
            {
                name: '非工业用户',
                data: dataFGY,
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2]/5;
                },
                label: {
                    emphasis: {
                        show: true,
                        // formatter: function (param) {
                        //     return param.data[3];
                        // },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(30,129,222, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(155,202,247)'
                        }, {
                            offset: 1,
                            color: 'rgb(30,129,222)'
                        }])
                    }
                }
            },
            {
                name: '农业用户',
                data: dataNY,
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2]/5;
                },
                label: {
                    emphasis: {
                        show: true,
                        // formatter: function (param) {
                        //     return param.data[3];
                        // },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(54,203,203, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(154,229,248)'
                        }, {
                            offset: 1,
                            color: 'rgb(54,203,203)'
                        }])
                    }
                }
            }
        ]
        };
    },

    showChart() {
        this.chart.setOption(this.option);
    }

    // updateChartData() { }
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
export default userLoadClassify