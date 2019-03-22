//模拟曲线
import echarts from "echarts";
// import mainNetworkPalnService from "../service/mainNetworkPalnService"
let SimulatOutput = {
    destroy() {
        this.chartDiv = null;
        this.chart.dispose();
        this.chart = null;
        this.option = null;
        this.originalData = null;
    },
    async init(divId) {
        this.chartDiv = null;
        this.chart = null;
        this.option = null;
        this.originalData = null;

        this.chartDiv = document.getElementById(divId);
        this.chart = echarts.init(this.chartDiv);
        this.initChartOption();
    },
    
    showDataIndex() {
        let value=[
            [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301],
            [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101],
            [220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101],
            [150, 232, 201, 154, 190, 330, 410,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101],
            [154, 190, 330, 410,120, 132,150, 232, 201,  101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101],
            [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301],
            [330, 310,120, 132, 101, 134,220, 182, 191, 234, 290, 90, 230,  230, 210,120, 210,120, 132, 101, 134, 90,132, 101],
            [301, 334, 390, 330, 320,320,320, 332, 301, 334, 390, 330, 320,320, 332,  332, 301, 134, 90, 230, 210,120, 132, 101],
            [154, 190, 330, 410,120, 132,150, 232, 201,  101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101],
            [330, 101, 134,220, 182,  230, 310,120, 132,  230, 210,120, 210,120, 132, 101, 134, 90,132, 101,191, 234, 290, 90,],
            [301, 320, 332, 301, 334, 390, 330,334, 390, 330, 320,320, 332, 301, 134, 90,320,320, 332,   230, 210,120, 132, 101],
        ]
        this.option.series[0].data=value[Math.floor(Math.random()*10)];
        this.option.series[1].data=value[Math.floor(Math.random()*10)];
        this.option.series[2].data=value[Math.floor(Math.random()*10)];
        this.option.series[3].data=value[Math.floor(Math.random()*10)];
        this.chart.setOption(this.option);
    },


    initChartOption() {
        this.option = {
            // title:{
            //     text:"机组运行出力位置图",
            //     left:'4%'
            // },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                bottom:"0%",
                // data:['核电基荷典型曲线（万千瓦）','火电基荷典型曲线（万千瓦）','气电基荷典型曲线（万千瓦）','水电基荷典型曲线（万千瓦）','抽水基荷典型曲线（万千瓦）','核电峰荷典型曲线（万千瓦）','火电峰荷典型曲线（万千瓦）','光伏出力典型曲线（万千瓦）','风电出力典型曲线（万千瓦）','外送功率典型曲线（万千瓦）']
            },
            grid: {
                left: '2.4%',
                right: '5%',
                top:'2%',
                bottom: '10%',
                containLabel: true
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                // {
                //     show: true,
                //     type: 'slider',
                //     y: '90%',
                //     start: 50,
                //     end: 100
                // }
            ],
            xAxis : [
                {
                    type : 'category',
                    name:'时间',
                    axisLabel: {
                        interval:0,
                        rotate:40
                    },
                    data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'万千瓦',
                    splitLine:{  //去掉网格线
                        show:false
                    },
                }
            ],
            series : [
                {
                    // name:'核电基荷典型曲线（万千瓦）',
                    type:'bar',
                    // stack: '广告',
                    itemStyle:{
                        color:"rgba(17,219,237,1)"
                    },
                    data:[320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301]
                },
                {
                    // name:'火电基荷典型曲线（万千瓦）',
                    type:'bar',
                    // stack: '广告',
                    itemStyle:{
                        color:"rgba(234,85,6,1)"
                    },
                    data:[301, 320, 332, 301, 334, 390, 330,334, 390, 330, 320,320, 332, 301, 134, 90,320,320, 332,   230, 210,120, 132, 101]
                },
                // {
                //     name:'气电基荷典型曲线（万千瓦）',
                //     type:'bar',
                //     stack: '广告',
                //     itemStyle:{
                //         color:"#EF31C0"
                //     },
                //     data:[301, 334, 390, 330, 320,320,320, 332, 301, 334, 390, 330, 320,320, 332,  332, 301, 134, 90, 230, 210,120, 132, 101]
                // },
                // {
                //     name:'水电基荷典型曲线（万千瓦）',
                //     type:'bar',
                //     stack: '广告',
                //     itemStyle:{
                //         color:"#999999"
                //     },
                //     data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // },
                // {
                //     name:'抽水基荷典型曲线（万千瓦）',
                //     type:'bar',
                //     stack: '广告',
                //     data:[320, 332, 301, 334, 390, 330, 320,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // },
                // {
                //     name:'核电峰荷典型曲线（万千瓦）',
                //     type:'bar',
                //     stack: '广告',
                //     data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // },
                // // {
                // //     name:'火电峰荷典型曲线（万千瓦）',
                // //     type:'bar',
                // //     stack: '广告',
                // //     data:[220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // // },
                // // {
                // //     name:'气电峰荷典型曲线（万千瓦）',
                // //     type:'bar',
                // //     stack: '广告',
                // //     data:[150, 232, 201, 154, 190, 330, 410,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // // },
                // // {
                // //     name:'水电峰荷典型曲线（万千瓦）',
                // //     type:'bar',
                // //     stack: '广告',
                // //     data:[320, 332, 301, 334, 390, 330, 320,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // // },
                // // {
                // //     name:'抽水峰荷典型曲线（万千瓦）',
                // //     type:'bar',
                // //     stack: '广告',
                // //     data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // // },
                // // {
                // //     name:'光伏出力典型曲线（万千瓦）',
                // //     type:'line',
                // //     symbol:'circle',
                // //     symbolSize:'10',
                // //     itemStyle:{
                // //         color:'#F16A27'
                // //     },
                // //     data:[220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
                // // },
                // // {
                // //     name:'风电出力典型曲线（万千瓦）',
                // //     type:'line',
                // //     symbol:'rect',
                // //     symbolSize:'10',
                // //     data:[150, 232, 201, 154, 190, 330, 410,120, 132, 850, 1340, 900, 2300, 2100,1200, 1320, 1010, 1340, 900, 2300, 2100,1200, 1320, 1010]
                // // },
                // // {
                // //     name:'外送功率典型曲线（万千瓦）',
                // //     type:'line',
                // //     symbol:'triangle',
                // //     symbolSize:'10',
                // //     data:[1320, 1332, 1301, 1334, 1390, 1330, 1320,1120, 1132, 1101, 1134, 190, 1230, 1210,1120, 1132, 1101, 1134, 190, 1230, 1210,1120, 1132, 1101]
                // // }
            ]
        };
        
        
    },

    showChart() {
        this.chart.setOption(this.option);
    },

    

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

export default SimulatOutput