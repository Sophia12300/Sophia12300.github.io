//立即执行函数
//柱状图模块1
(function() {
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //指定配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '2%',
            bottom: '4%',
            top: "10px",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1号路', '2号路', '3号路',
                ' 4号路', '5号路 ', '6号路', '7号路 '
            ],
            axisTick: {
                alignWithLabel: true
            },
            //修改刻度标签 相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6)", //
                fontSize: "12"
            },

        }],
        yAxis: [{
            type: 'value',
            //修改刻度标签 相关样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '45%',
            data: [24, 52, 200, 175, 120, 88, 220],
            itemStyle: {
                barBorderRadius: 5
            } //修改柱子圆角
        }]
    };
    //把配置项给实例对象
    myChart.setOption(option);
    //让图表跟随屏幕自动去适应
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
//柱状图2
(function() {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            left: '22%',
            bottom: '8%',
            top: "4%",

        },
        xAxis: {
            show: false
        },
        yAxis: [{
                type: 'category',
                inverse: true,
                data: ['博学号', '笃行号', '盛德号 ', '日新号 ', '创新号'],
                axisLine: {
                    show: false
                },
                axisTick: { //不显示刻度
                    show: false
                },
                axisLabel: { //把刻度标签里面的文字颜色设置为白色
                    color: "#fff"
                }
            },
            {
                type: 'category',
                inverse: true,
                data: [5, 9, 6, 3, 7],
                axisLine: {
                    show: false
                },
                axisTick: { //不显示刻度
                    show: false
                },
                axisLabel: { //把刻度标签里面的文字颜色设置为白色
                    color: "#fff"
                }
            }
        ],
        series: [{ //条状
                name: '条',
                type: 'bar',
                data: [50, 90, 60, 30, 70],
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 10,
                    color: function(params) {
                        return myColor[params.dataIndex];
                    }
                },
                barCategoryGap: 50, //柱子间的距离
                barWidth: 12, //主子宽度
                label: { //显示主子内的文字
                    show: true,
                    position: "inside",
                    formatter: "{c}%" //可自动解析data里的数据
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 17,
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
            }
        ]
    };
    myChart.setOption(option);
    //让图表跟随屏幕自动去适应
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
//饼状1
(function() {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: [
                'rose1',
                'rose2',
                'rose3',
                'rose4',
                'rose5',
                'rose6',
                'rose7',
                'rose8'
            ]
        },

        series: [{
            name: '包裹量',
            type: 'pie',
            radius: ["20%", "88%"],
            center: ['50%', '50%'],
            roseType: 'area',
            //图形文字标签
            label: {
                fontsize: 10

            },

            itemStyle: {
                borderRadius: 5
            },
            data: [
                { value: 30, name: '北苑宿舍' },
                { value: 26, name: '三拱门' },
                { value: 24, name: '琴湖公寓' },
                { value: 24, name: '图书馆' },
                { value: 22, name: '兴湘公寓' },
                { value: 20, name: '南苑宿舍' },
                { value: 16, name: '北青公寓' },
                { value: 13, name: '西湖公寓' }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
//用电量
(function() {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    var option = {
        grid: {
            left: '16%',
            bottom: '6%',
            top: "13%"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // prettier-ignore
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} W'
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
                    lte: 6,
                    color: 'green'
                },
                {
                    gt: 6,
                    lte: 8,
                    color: 'red'
                },
                {
                    gt: 8,
                    lte: 14,
                    color: 'green'
                },
                {
                    gt: 14,
                    lte: 17,
                    color: 'red'
                },
                {
                    gt: 17,
                    color: 'green'
                }
            ]
        },
        series: [{
            name: 'Electricity',
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: [300, 280, 250, 260, 270, 300, 570, 525, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
                itemStyle: {
                    color: 'rgba(255, 173, 177, 0.6)'
                },
                data: [
                    [{
                            name: 'Morning Peak',
                            xAxis: '07:30'
                        },
                        {
                            xAxis: '10:00'
                        }
                    ],
                    [{
                            name: 'Evening Peak',
                            xAxis: '17:30'
                        },
                        {
                            xAxis: '21:15'
                        }
                    ]
                ]
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
//饼状2
(function() {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {

        tooltip: {
            trigger: 'item'
        },

        legend: {
            top: '0%',
            left: 'center',
            textStyle: {
                color: '#4c9bfd'
            },
        },
        series: [{
            name: '物流量',
            type: 'pie',
            radius: ['43%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 21,
                    name: '空位量'
                },
                { value: 3, name: '延期量' },
                { value: 12, name: '已取量' },
                { value: 9, name: '待取量' }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
//速率图
(function() {
    var myChart = echarts.init(document.querySelector('.no-line1 .chart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: { //图例
            top: '0%',
            right: '2%',
            textStyle: {
                color: '#4c9bfd'
            },
            data: ['博学号', '笃行号', '盛德号', '日新号', '创新号']
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: { //去除刻度线
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: { //去除轴线
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: { //去除刻度线
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: { //去除轴线
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' //分割线颜色
                }
            }
        },
        series: [{
                name: '博学号',
                type: 'line',
                smooth: true,
                data: [0, 2, 5, 5, 4, 2, 3, 3, 5, 7, 5, 4, 4]
            },
            {
                name: '笃行号',
                type: 'line',
                smooth: true,
                data: [0, 2, 6, 9, 9, 9, 4, 3, 2, 0, 3, 3, 5, 6, 6]
            },
            {
                name: '盛德号',
                type: 'line',
                smooth: true,
                data: [0, 4, 6, 3, 0, 4, 4, 4, 4, 5, 6, 6, 3, 3, 0]
            },
            {
                name: '日新号',
                type: 'line',
                smooth: true,
                data: [0, 3, 4, 4, 3, 2, 2, 2, 2, 5, 5, 5, 5, 6, 5]
            },
            {
                name: '创新号',
                type: 'line',
                smooth: true,
                data: [0, 3, 6, 5, 3, 3, 0, 3, 4, 4, 4, 4, 2, 4, 4]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
//路程图
(function() {
    var myChart = echarts.init(document.querySelector('.no-line2 .chart'));
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: { //图例
            top: '0%',
            right: '2%',
            textStyle: {
                color: '#4c9bfd'
            },
            data: ['博学号', '笃行号', '盛德号', '日新号', '创新号']
        },
        grid: {
            top: '12%',
            left: '2%',
            right: '5%',
            bottom: '13%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },

        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: { //去除刻度线
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: { //去除轴线
                show: false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            axisTick: { //去除刻度线
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: { //去除轴线
                show: false
            }
        },
        series: [{
                name: '博学号',
                type: 'line',
                smooth: true,
                data: [0, 80, 208, 313, 390, 510, 600, 670, 780, 856, 960, 1088]
            },
            {
                name: '笃行号',
                type: 'line',
                smooth: true,
                data: [0, 91, 170, 244, 315, 399, 450, 530, 666, 731, 812, 890]
            },
            {
                name: '盛德号',
                type: 'line',
                smooth: true,
                data: [0, 150, 232, 301, 374, 430, 539, 610, 733, 811, 925, 1022]
            },
            {
                name: '日新号',
                type: 'line',
                smooth: true,
                data: [0, 133, 250, 334, 490, 570, 660, 781, 900, 976, 1032, 1200]
            },
            {
                name: '创新号',
                type: 'line',
                smooth: true,
                data: [0, 78, 168, 251, 399, 469, 590, 674, 797, 930, 1120, 1332]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();