<template>
  <div class="scatter" v-bind:id="echartId"></div>
</template>
<script>
/*  环形图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义
    
*/
import echarts from "echarts";
import { mapMutations } from "vuex";
export default {
  name: "scatterEchart",
  data() {
    return {
      chartName: ["全行", "大对公", "零售", "总行及其它"],
      chartData: [[14, 6], [22, 9], [21, 0], [-1, 5]],
      series: [
        {
          type: "scatter",
          markLine: {
            symbol: "none",
            silent: true,
            label: {
              show: false
            },
            lineStyle: {
              color: "#797979",
              type: "dashed"
            },
            data: [
              {
                name: "Y",
                xAxis: 14 //
              },
              {
                name: "X",
                yAxis: 6 //
              }
            ]
          }
        }
      ]
    };
  },
  props: {
    echartId: {
      type: String,
      required: true //设置为必传
    },
    xName: {
      type: String
    },
    yName: {
      type: String
    }
  },
  mounted() {
    this.setSeries();
  },
  methods: {
    ...mapMutations("allBank", ["setSeriesName"]),
    setSeries() {
      let series = this.series.slice(0, 1);
      for (let i = 0; i < this.chartName.length; i++) {
        let seriesStruct = {
          name: String, //
          data: [[0,0]], //
          type: "scatter",
          symbolSize: 20,
          zlevel: 10,
          animation: false
        };
        seriesStruct.name = this.chartName[i];
        let x = this.chartData[i][0];
        let y = this.chartData[i][1];
        seriesStruct.data[0][0]=x;
        seriesStruct.data[0][1]=y;
        series.push(seriesStruct);
      }
      this.drawEchart(series);
    },
    drawEchart(series) {
      let that = this;
      let myChart = echarts.init(document.getElementById(this.echartId));
      myChart.clear();

      let option = {
        color: ["#FFF", "#FF6600", "#FFCC66", "#999999"],
        grid: {
          zlevel: 10,
          left: "10%",
          right: "30%",
          top: "20%",
          bottom: "15%"
        },
        tooltip: {
          trigger: "item",
          confine: true,
          formatter: function(param) {
            return (
              param.seriesName +
              "<br/>" +
              that.xName.replace("(%)", "") +
              ":" +
              param.data[0] +
              "<br/>" +
              that.yName.replace("(%)", "") +
              ":" +
              param.data[1]
            );
          }
        },
        legend: {
          shwo: true,
          right: "5%",
          orient: "vertical",
          textStyle: {
            fontFamily: "Microsoft YaHei",
            color: "#FFF",
            fontSize: 14
          },
          itemWidth: 10,
          itemHeight: 10
        },

        xAxis: {
          show: true,
          name: this.xName,
          max: 25,
          min: -2,
          nameTextStyle: {
            color: "#FFF",
            fontFamily: "Microsoft YaHei",
            fontSize: 12
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
          },
          axisLabel: {
            color: "#FFF"
          }
        },
        yAxis: {
          show: true,
          name: this.yName,
          max: 10,
          min: -2,
          nameTextStyle: {
            color: "#FFF",
            fontFamily: "Microsoft YaHei",
            fontSize: 12
          },
          splitNumber: 2,
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
        series: series
      };
      myChart.setOption(option, true);

      myChart.on("click", function(params) {
        that.setSeriesName(params.seriesName);
        // alert(params.seriesName);
      });
    }
  }
};
</script>
<style>

</style>

