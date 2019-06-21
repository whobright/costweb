<template>
  <div class="gauge" v-bind:id="echartId"></div>
</template>
<script>
/*头顶部的仪表盘
    echartId由父组件传入
    div 容器大小 由父组件定义
    echartId、echartData是必传字段
*/
import echarts from "echarts";
export default {
  name: "gagueEchart",
  props: {
    echartId: {
      type: String,
      required: true
    },
    echartData: {
      required: true,
      max: {
        type: Number,
        default: 40
      },
      value: {
        type: Number,
        default: 0
      }
    }
  },
  mounted() {
    this.drawEchart(this.echartId);
  },
  methods: {
    drawEchart(echartId) {
      let myChart = echarts.init(document.getElementById(echartId));
      myChart.clear();
      let option = {
        series: [
          {
            type: "gauge",
            radius: "150%",
            startAngle: 0,
            endAngle: 180,
            clockwise: false,
            min: 0,
            max: this.echartData.max,
            splitNumber: 4,
            data: Array(1).fill(this.echartData.value), //必须转换为数组格式
            center: ["50%", "90%"],
            axisLine: {
              //仪表圈线
              show: true,
              lineStyle: {
                color: [[1, '#FF6600']], //F0F0F0
                width: 10
              }
            },
            splitLine: {
              //刻度线
              length: "25%",
              lineStyle: {
                color: "#FFFFFF"
              }
            },
            pointer: {
              //指针
              length: "75%",
              width: 3
            },
            itemStyle: {
              //指针样式
            },
            title: {
              //标题
              show: true
            },
            axisTick: {
              show: true,
              splitNumber: 3,
              lineStyle: {
                color: "#FFF"
              }
            },
            axisLabel: {
              //刻度标签
              show: true,
              distance: 2,
              color: "#fff"
            },
            detail: {
              show: false
            }
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

