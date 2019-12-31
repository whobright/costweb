<template>
  <div class="bar2" v-bind:id="echartId"></div>
</template>
<script>
/*  环形图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义
    
*/
import echarts from "echarts";
export default {
  name: "barEchart",
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
          "东部战区",
          "南部战区",
          "北部战区",
          
        ];
      }
    },
    seriesData1: {
      type: Array,
      default: function() {
        return [
              324,
              224,
              134,
            ];
      }
    },
   
    
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
             // rotate: 45
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "#FFF",
              show:false,
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              onZero: true,
              lineStyle: {
                color: "#797979"
              }
            }
          },
        ],
        series: [
          {
            name: "贷款余额",
            type: "bar",
            barWidth: 25,
            barGap: 0,
            itemStyle: {
              color: "#FF6600"
            },
           
            label:{
              show:true,
              formatter:"{c}亿",
              position:'top',
              color:'#FFF'

            },
            data:this.seriesData1
          },
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style>
</style>

