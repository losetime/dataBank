//关键主变

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
        this.initChartOption();
        this.chart.setOption(this.option, true);
    },
    initChartOption() {
        let val1 = Math.floor(Math.random() * 200);
        let val2 = Math.floor(Math.random() * 200);
        let val3 = Math.floor(Math.random() * 200);
        var demoData = [
            { name: '阳泉站/500kv', value: val1, unit: 'V', pos: ['16.40%', '55%'], range: [0, 400] },
            { name: '晋中站/500kv', value: val2, unit: 'A', pos: ['49.8%', '50%'], range: [0, 60] },
            { name: '吕梁站/500kv', value: val3, pos: ['83%', '55%'], range: [0.1, 1.0], splitNum: 9 }
        ];
        this.option = {
            series: (function () {
                var result = [];

                demoData.forEach(function (item, index) {
                    result.push(
                        {
                            name: item.name,
                            type: 'gauge',
                            center: item.pos,
                            radius: '38%',
                            // min: item.range[0],
                            // max: item.range[1],
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    width: 10,
                                    color: [
                                        [0.2, '#16F1FF'],
                                        [0.8, '#AFAFAF'],
                                        [1, '#FF7316']
                                    ]
                                }
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                length: 20
                            },
                            title: {
                                fontSize: 14,
                                color: '#000',
                                offsetCenter: [0, '110%']
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '65%'],
                                backgroundColor: '#FF7316',
                                textStyle: {
                                    fontSize: 15,
                                    color: '#fff',
                                }
                            },
                            data: [{
                                value: item.value, name: item.name
                            }]
                        }
                    );
                    if (index == 1) {
                        result[index].radius = "48%";
                    }

                });

                return result;
            })()
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