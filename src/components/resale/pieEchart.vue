<template>
  <div class="pie" v-bind:id="echartId"></div>
</template>
<script>
/*  环形图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义
*/
import echarts from "echarts";
export default {
  name: "pieEchart",
  props: {
    echartId: {
      type: String,
      required: true
    },
    seriesData: {
      type: Array,
      // required: true,
      default: function() {
        return [
          { value: 335, name: "大对公" },
          { value: 310, name: "零售" },
          { value: 234, name: "总行及其它" }
        ];
      }
    },
    legendData: {
      type: Array,
      default: function() {
        //默认取seriesData里面的name
        return this.seriesData.map(items => {
          return items.name;
        });
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
        color: ["#FF6600",  "#FFCC33","#FFFFCC"],
        tooltip: {
          trigger: "item",
          confine: true,
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          align: "left",
          top: "35%",
          x: "right",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#FFF",
            fontFamily: "Microsoft YaHei",
            fontSize: 12
          },
          data: this.legendData
        },

        series: [
          {
            name: "费用结构",
            type: "pie",
            radius: ["45%", "65%"],
            center: ["40%", "55%"],
            avoidLabelOverlap: false,
            animation: false, //关闭动画
            label: {
              normal: {
                show: true,
                color: "#FFF",
                formatter: "{c}亿\n{d}%"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  color: "#FFF",
                  fontFamily: "Microsoft YaHei"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length:8,
                length2:5
              }
            },
            data: this.seriesData
          }
        ]
      };
      let that = this ;
      myChart.setOption(option);
      myChart.on("click", function(params) {
        
        
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .pie{
    width:100%;
    height:100%;
  }
</style>

