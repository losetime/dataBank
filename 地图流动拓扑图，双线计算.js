
import echarts from "echarts";
import "echarts/dist/extension/bmap.min.js"

async function ceshi() {
    let x1,y1,x2,y2,x3,y3,x4,y4;
    function test(){
      let point1=[112.0736,40.250061];  //平城
      let point2=[113.408439,39.892756];  //燕同
      let r=0.02; 
      let ang=Math.atan((point2[1]-point1[1])/(point2[0]-point1[0]));
      x1=point1[0]-r*Math.sin(ang);
      y1=point1[1]+r*Math.cos(ang);
      x2=point2[0]-r*Math.sin(ang);
      y2=point2[1]+r*Math.cos(ang);

      x3=point1[0]+r*Math.sin(ang);
      y3=point1[1]-r*Math.cos(ang);
      x4=point2[0]+r*Math.sin(ang);
      y4=point2[1]-r*Math.cos(ang);
    };
    test();
    var geoCoordMap = {
        测试1:[x1,y1],
        测试2:[x2,y2],
        测试3:[x3,y3],
        测试4:[x4,y4],
        平城:[114.219105,39.776490],
        燕同:[113.326431,40.108811],
        大二:[113.615119,40.154569],
        大二_1:[113.659579,40.03415],
        大二_2:[113.802058,39.997339],
        至房山:[114.454028,39.82485],
        京隆:[113.653571,40.614829],
        明海湖:[112.054227,39.873236],
        五寨:[111.853402,38.917022],
        朔州:[112.439254,39.337810],
        忻州:[112.740781,38.422447],
        固贤:[111.188378,38.287052],
        吕梁:[111.148053,37.525550],
        临汾西:[111.472068,36.108288],
        稷山:[110.989546,35.610093],
        侯村:[112.659709,38.025422],
        侯村_1:[112.796466,38.071617],
        侯村_2:[112.98598,38.160215],
        侯村_3:[113.355396,38.164534],
        阳泉:[113.587072,37.862340],
        侯村_4:[113.675372,38.162374],
        侯村_5:[113.993976,38.173171],
        云顶山:[112.072055,37.952057],
        娄烦:[111.791217,38.06513],
        袁家村:[111.606509,38.170877],
        岚县:[111.65159,38.285738],
        静乐:[111.931741,38.348232],
        河口:[111.744973,38.390492],
        燕家村:[111.646874,38.574445],
        驼铃:[111.471779,38.647684],
        婆娑:[112.20958,38.415102],
        谢家坪:[112.34431,38.604001],
        双井:[112.115657,38.274314],
        阁上:[112.14484,38.097694],
        福瑞:[112.910496,37.946602],
        龙城:[112.570901,37.920558],
        晋中:[112.738788,37.700401],
        榆社:[112.981812,37.076500],
        榆社_1:[112.885272,36.842033],
        霍州:[112.659709,38.025422],
        久安:[113.065173,36.762862],
        晋城:[112.857683,35.496129],
        临汾:[111.513354,36.085222],
        海会:[112.572526,35.507064],
        桐乡:[111.220235,35.355619],
        运城:[111.013377,35.032595],
        柳园:[110.868033,34.750856],
        风陵渡:[110.317343,34.630034],
        托克托:[112.0736,40.250061],
        托克托_1:[113.408439,39.892756],
        至北京西:[114.402702,39.833726],
        至锦界:[112.799213,38.328469],
        至锦界_1:[112.048023,38.339241],
        至锦界_2:[111.733024,38.689672],
        至锦界_3:[110.33776,38.663941],
        至河北:[113.21532,38.516751],
        至河北_1:[113.767383,38.521049],
        哈密:[109.94414,36.590684],
        哈密_1:[111.910693,35.730311],
        郑州:[113.998095,35.413078],
        宁东:[110.174853,36.050726],
        宁东_1:[110.801074,35.739229],
        宁东_2:[111.47369,35.317893],
        宁东_3:[111.454464,34.990032],
        浙江:[111.858212,34.659724]
    };
    
    var BJData = [

      [{name:"平城"}, { name:"燕同", value: 40, type:1}],
      [{name:"燕同"}, { name:"大二", value: 40, type:1}],
      [{name:"大二"}, { name:"京隆", value: 40, type:1}],
      [{name:"大二"}, { name:"大二_1", value: 40, type:1}],
      [{name:"大二_1"}, { name:"大二_2", value: 40, type:1}],
      [{name:"大二_2"}, { name:"至房山", value: 40, type:1}],
      [{name:"燕同"}, { name:"明海湖", value: 40, type:1}],
      [{name:"明海湖"}, { name:"五寨", value: 40, type:1}],
      [{name: "五寨"}, { name: "朔州", value: 40, type:1}],
      [{name: "朔州"}, { name: "云顶山", value: 40, type:1}],
      [{name: "云顶山"}, { name: "吕梁", value: 40, type:1}],
      [{name: "云顶山"}, { name: "晋中", value: 40, type:1}],

      [{name: "云顶山"}, { name: "娄烦", value: 40, type:1}],
      [{name: "云顶山"}, { name: "岚县", value: 40, type:1}],
      [{name: "娄烦"}, { name: "袁家村", value: 40, type:1}],
      [{name: "袁家村"}, { name: "岚县", value: 40, type:1}],
      [{name: "岚县"}, { name: "静乐", value: 40, type:1}],
      [{name: "岚县"}, { name: "河口", value: 40, type:1}],
      [{name: "岚县"}, { name: "燕家村", value: 40, type:1}],
      [{name: "燕家村"}, { name: "驼铃", value: 40, type:1}],

      [{name: "静乐"}, { name: "婆娑", value: 40, type:1}],
      [{name: "婆娑"}, { name: "谢家坪", value: 40, type:1}],
      [{name: "静乐"}, { name: "双井", value: 40, type:1}],
      [{name: "双井"}, { name: "阁上", value: 40, type:1}],

      [{name:"五寨"},{name:"固贤",value:40,type:1}],


      [{name:"测试1"},{name:"测试2",value:40,type:1}],
      [{name:"测试3"},{name:"测试4",value:40,type:1}],


      [{name: "固贤"}, { name: "吕梁",   value: 40, type:1}],
      [{name: "吕梁"}, { name: "临汾西", value: 40, type:1}],
      [{name: "临汾西"}, { name: "稷山", value: 40, type:1}],
      [{name: "稷山"}, { name: "运城", value: 40, type:1}],
      [{name: "燕同"}, { name: "忻州", value: 40, type:1}],
      [{name: "忻州"}, { name: "侯村", value: 40, type:1}],

      [{name: "侯村"}, { name: "侯村_1", value: 40, type:1}],
      [{name: "侯村_1"}, { name: "侯村_2", value: 40, type:1}],
      [{name: "侯村_2"}, { name: "侯村_3", value: 40, type:1}],
      [{name: "侯村_3"}, { name: "阳泉", value: 40, type:1}],
      [{name: "阳泉"}, { name: "侯村_4", value: 40, type:1}],
      [{name: "侯村_4"}, { name: "侯村_5", value: 40, type:1}],

      [{name: "侯村"}, { name: "福瑞", value: 40, type:1}],
      [{name: "福瑞"}, { name: "晋中", value: 40, type:1}],
      [{name: "霍州"}, { name: "临汾", value: 40, type:1}],
      [{name:"晋中"},{name:"榆社",value:40,type:1}],
      [{name:"榆社"},{name:"榆社_1",value:40,type:1}],
      [{name:"晋中"},{name:"霍州",value:40,type:1}], 
      [{name:"榆社_1"},{name:"久安",value:40,type:1}],
      [{name:"久安"},{name:"晋城",value:40,type:1}],
      [{name:"晋城"},{name:"海会",value:40,type:1}],
      [{name:"海会"},{name:"临汾",value:40,type:1}],
      [{name:"临汾"},{name:"桐乡",value:40,type:1}],
      [{name:"桐乡"},{name:"运城",value:40,type:1}],
      [{name:"运城"},{name:"柳园",value:40,type:1}],
      [{name:"柳园"},{name:"风陵渡",value:40,type:1}],

      [{name:"托克托"},{name:"托克托_1",value:40,type:1}],
      [{name:"托克托_1"},{name:"至北京西",value:40,type:1}],

      [{name:"至锦界"},{name:"至锦界_1",value:40,type:1}],
      [{name:"至锦界_1"},{name:"至锦界_2",value:40,type:1}],
      [{name:"至锦界_2"},{name:"至锦界_3",value:40,type:1}],

      [{name:"至锦界"},{name:"至河北",value:40,type:1}],
      [{name:"至河北"},{name:"至河北_1",value:40,type:1}],

      [{name:"哈密"},{name:"哈密_1",value:40,type:1}],
      [{name:"哈密_1"},{name:"郑州",value:40,type:1}],
      

      [{name:"宁东"},{name:"宁东_1",value:40,type:1}],
      [{name:"宁东_1"},{name:"宁东_2",value:40,type:1}],
      [{name:"宁东_2"},{name:"宁东_3",value:40,type:1}],
      [{name:"宁东_3"},{name:"浙江",value:40,type:1}],
    ];
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value:dataItem[1].value,
                    type:dataItem[1].type
                });
            }
        }
        return res;
    };
    
    // 得到的数据结构：{fromName: "大同", toName: "高石", coords: Array(2)}
    [["山西", BJData]].map(function (item, i) {
        let mapData0=[];
        let mapData1=[];
        item[1].forEach(function(dataItem,index){
            if(dataItem[1].type==1){
                mapData0.push(
                    {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    }
                ) 
            }
            else if(dataItem[1].type==2){
                mapData1.push(
                    {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    }
                ) 
            }
        })
        series.push(
            {
                name: item[0] + " 电网规划图",
                type: "lines",
                coordinateSystem: 'bmap',
                polyline: true,
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: "#fff",
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: "#35BBC0",
                        width:0,
                        curveness: 0
                    }
                },
                data: convertData(item[1])
            },
            //小球移动后面的阴影
            {
                name: item[0] + " 电网规划图",
                type: "lines",
                coordinateSystem: 'bmap',
                polyline: true,
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    // symbol: planePath,
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: "#35BBC0",
                        width: 1,
                        opacity: 0.4,
                        curveness: 0
                    }
                },
                data: convertData(item[1])
            },
            // {
            //     name: item[0] + " 电网规划图",
            //     type: "scatter",
            //     symbol: "circle",
            //     coordinateSystem: "bmap",
            //     zlevel: 2,
            //     rippleEffect: {
            //         brushType: "stroke"
            //     },
            //     label: {
            //         normal: {
            //             show: true,
            //             position: "right",
            //             formatter: "{b}"
            //         }
            //     },
            //     symbolSize: function (val) {
            //         return val[2] / 6;
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: "#35BBC0"
            //         }
            //     },
            //     data:mapData1
            // },
            // {
            //     name: item[0] + " 电网规划图",
            //     type: "scatter",
            //     symbol: "pin",
            //     coordinateSystem: "bmap",
            //     zlevel: 2,
            //     rippleEffect: {
            //         brushType: "stroke"
            //     },
            //     label: {
            //         normal: {
            //             show: true,
            //             position: "right",
            //             formatter: "{b}"
            //         }
            //     },
            //     symbolSize: function (val) {
            //         return val[2] / 6;
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: "#35BBC0"
            //         }
            //     },
            //     data:mapData0     
            // }
        )

    });
    var myChart = echarts.init(document.getElementById('echartMap'));
    myChart.setOption({
        bmap: {
            center: [112.528557,37.752578],
            zoom: 8,
            roam: true,
            mapStyle: {
              'styleJson': [
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#031628'
                  }
                },
                {
                  'featureType': 'land',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000102'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#0b3d51'
                  }
                },
                {
                  'featureType': 'local',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#08304b'
                  }
                },
                {
                  'featureType': 'subway',
                  'elementType': 'geometry',
                  'stylers': {
                    'lightness': -70
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#857f7f'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.stroke',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'green',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#062032'
                  }
                },
                {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#465b6c'
                  }
                },
                {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'label',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }
              ]
            }
        },
        title: {
            text: "山西电网规划图",
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            orient: "vertical",
            top: "bottom",
            left: "right",
            data: [],
            textStyle: {
                color: "#fff"
            },
            selectedMode: "single"
        },
        series:series


    });

    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
}

export default ceshi