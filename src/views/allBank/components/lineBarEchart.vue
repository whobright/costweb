<template>
  <div class="lineBar" v-bind:id="echartId"></div>
</template>
<script>
/*  环形图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义
    
*/
import echarts from "echarts";
export default {
  name: "lineBarEchart",
  props: {
    echartId: {
      type: String,
      required: true //设置为必传
    },
    echartData: {},
    xData: {
      type: Array,
      default: function() {
        return [
          "1901",
          "1902",
          "1903",
          "1904",
          "1905",
          "1906",
          "1907",
          "1908",
          "1909",
          "1910",
          "1911",
          "1912"
        ];
      }
    },
    seriesData1: {
      type: Array,
      default: function() {
        return [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ];
      }
    },
    seriesData2: {
      type: Array,
      default: function() {
        return  [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ];
      }
    },
    seriesData3: {
      type: Array,
      default: function() {
        return [
              2.0,
              4.2,
              5.3,
              4.5,
              6.3,
              9.2,
              10.3,
              20.4,
              13.0,
              24.5,
              12.0,
              5.2
            ];
      }
    }
  },
  mounted() {
    this.drawEchart(this.echartId);
  },
  methods: {
    drawEchart(echartId) {
      let myChart = echarts.init(document.getElementById(this.echartId));
      myChart.clear();
      let option = {
        grid: {
          zlevel: 10,
          left: "10%",
          right: "5%",
          top: "20%",
          bottom: "20%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          right: "7%",
          data: ["实际费用", "同期费用", "费用同比增速", "收入同比增速"],
          textStyle: {
            fontFamily: "Microsoft YaHei",
            color: "#FFF",
            fontSize: 14
          },
          itemWidth: 10,
          itemHeight: 10
        },
        xAxis: [
          {
            type: "category",
            min: 0,
            data: this.xData,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              onZero: true,
              lineStyle: {
                color: "#797979"
              }
            },
            axisLabel: {
              color: "#FFF",
              rotate: 45
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "(亿)",
            nameTextStyle: {
              color: "#FFF",
              fontFamily: "Microsoft YaHei",
              fontSize: 12
            },
            nameGap: 10,
            min: -300,
            max: 300,
            splitNumber: 5,
            axisLabel: {
              color: "#FFF"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              onZero: true,
              lineStyle: {
                color: "#797979"
              }
            }
          },
          {
            type: "value",
            name: "(%)",
            nameTextStyle: {
              color: "#FFF",
              fontFamily: "Microsoft YaHei",
              fontSize: 12
            },
            nameGap: 10,
            min: 0,
            max: 25,
            interval: 5,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              onZero: true,
              lineStyle: {
                color: "#797979"
              }
            },
            axisLabel: {
              color: "#FFF"
            }
          }
        ],
        series: [
          {
            name: "实际费用",
            yAxisIndex: 0,
            type: "bar",
            barWidth: 8,
            barGap: 0,
            itemStyle: {
              color: "#FF6600"
            },
            data:this.seriesData1
          },
          {
            name: "同期费用",
            type: "bar",
            yAxisIndex: 0,
            barGap: 0,
            barWidth: 8,
            itemStyle: {
              color: "#FFCC66"
            },
            data:this.seriesData2
          },
          {
            name: "费用同比增速",
            type: "line",
            yAxisIndex: 1,
            symbol: "circle",

            symbolSize: 6,
            lineStyle: {
              color: "#FFF"
            },
            itemStyle: {
              color: "#FFF"
            },
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          },
          {
            name: "收入同比增速",
            type: "line",
            yAxisIndex: 1,
            symbol: "circle",

            symbolSize: 6,
            lineStyle: {
              color: "#33DFFF"
            },
            itemStyle: {
              color: "#33DFFF"
            },
            data: this.seriesData3
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style>
</style>

