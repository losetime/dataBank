//关键断面

import echarts from "echarts";
// import mainNetworkPalnService from "../../../server/mainNetworkPalnService"
let KeySection = {
    destroy() {   //实例销毁之前释放
        this.chartDiv = null;
        this.chart.dispose();
        this.chart = null;
        this.option = null;
        this.originalData = null;
    },
    async init(divId) {
        this.option = null;
        this.originalData = null;
        // this.originalData = await mainNetworkPalnService.getKeySectionData();
        this.chartDiv = document.getElementById(divId);
        this.chart = echarts.init(this.chartDiv);
        this.initChartOption();

    },
    showDataIndex() {
        this.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        this.chart.setOption(this.option, true);
    },
    initChartOption() {
        this.option = {
            title: {
                text: "关键断面"
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    axisLine: {
                        lineStyle: {
                            width: 10,
                            color: [
                                [0.2, '#16F1FF'],
                                [0.8, '#AFAFAF'],
                                [1, '#FF7316']
                            ]
                        }
                    },
                    detail: {
                        formatter: '{value}%',
                        fontSize: 15,
                        color: '#fff',
                        offsetCenter: [0, '60%'],
                        backgroundColor: '#FF7316'
                    },
                    title: {
                        fontSize: 16,
                        offsetCenter: [0, '100%']
                    },
                    data: [
                        { value: 50, name: '龙云线' }
                    ]
                }
            ]
        };
    },
    showChart() {
        this.chart.setOption(this.option, true);
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
export default KeySection