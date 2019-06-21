<template>
  <div class="line" v-bind:id="echartId"></div>
</template>
<script>
/*  环形图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义
    
*/
import echarts from "echarts";
export default {
  name: "lineEchart",
  props: {
    echartId: {
      type: String,
      required: true
    },
    xData:{
      type:Array,
      default:function(){
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
          4.2,
          5.3,
          4.5,
          6.3,
          9.2,
          10.3,
          20.4,
          13.0,
          24.5,
          20.0,
          5.2
        ];
      }
    },
    seriesData2: {
      type: Array,
      default: function() {
        return [
          2.0,
          4.2,
          5.3,
          5.5,
          6.3,
          8.2,
          10.3,
          20.4,
          53.0,
          24.5,
          72.0,
          80.2
        ];
      }
    }
  },
  mounted() {
    if (this.echartId) {
      this.drawEchart(this.echartId);
    }
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
          bottom: "25%"
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
          right: "5%",
          data: ["费用预算执行进度", "收入预算执行进度"],
          textStyle: {
            fontFamily: "Microsoft YaHei",
            color: "#FFF",
            fontSize: 14
          },
          itemWidth: 10,
          itemHeight: 10
        },
        xAxis: {
          type: "category",
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
        },
        yAxis: {
          type: "value",
          name: "(%)",
          nameTextStyle: {
            color: "#FFF",
            fontFamily: "Microsoft YaHei",
            fontSize: 12
          },
          nameGap: 5,
          min: 0,
          max: 100,
          splitNumber: 5,
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
        },
        series: [
          {
            name: "费用预算执行进度",
            type: "line",
            yAxisIndex: 0,
            symbol: "circle",

            symbolSize: 6,
            lineStyle: {
              color: "#FFCC66"
            },
            itemStyle: {
              color: "#FFCC66"
            },
            data: this.seriesData1
          },
          {
            name: "收入预算执行进度",
            type: "line",
            yAxisIndex: 0,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              color: "#FFF"
            },
            itemStyle: {
              color: "#FFF"
            },
            data: this.seriesData2
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

