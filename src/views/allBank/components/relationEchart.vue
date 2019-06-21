<template>
  <div class="graph" v-bind:id="echartId"></div>
</template>
<script>
/*  底部左边的关系图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义
    
*/
import echarts from "echarts";
export default {
  name: "relationEchart",
  props: {
    echartId: {
      type: String,
      required: true
    }, //头部菜单的索引
    echartData:{
      data1:Number,
      data2:Number,
      data3:Number,
      default:{
        data1:0,
        data2:0,
        data3:0,
        data4:0,
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
      let that=this;
      myChart.clear();
      let option = {
        series: [
          {
            type: "graph",
            //layout: "force",
            animation: false,
            symbol:'circle',
            top:'30%',
            left:'15%',
            right:'15%',
            label:{
              show:true,
              position:'top',
              color:'#FFF',
              fontSize:14,
              formatter:"{b}\n{c}亿"

            },
            data: [
              {
                name: "业管费",
                x: -8,
                y: 2,
                value: this.echartData.data1,
                symbolSize: 20,
                itemStyle: {
                  color: '#FF8737'
                }
              },
              {
                name: "总费用",
                x: 0,
                y: 0,
                value: this.echartData.data2,
                symbolSize: 40,
                itemStyle: {
                  color: "#FF6600"
                }
              },
              {
                name: "固定费",
                x: 6,
                y: -5,
                value: this.echartData.data3,
                symbolSize: 20,
                itemStyle: {
                 color: "#FF8737"
                }
              },
               {
                name: "人工费",
                x: 8,
                y: 2,
                value: this.echartData.data4,
                symbolSize: 20,
                itemStyle: {
                 color: "#FF8737"
                }
              }
            ],
            links: [
              {
                source: "业管费",
                target: "总费用",
                lineStyle:{
                  color:"#FF8737",
                }
              },
              {
                source: "总费用",
                target: "固定费",
                lineStyle:{
                  color:"#FF8737",
                }
              },
               {
                source: "总费用",
                target: "人工费",
                 lineStyle:{
                  color:"#FF8737",
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
      myChart.on("click", function(params) {
       //alert(params.name);
        that.$router.push({ path: "subjectTree", query: {} });
       });
    }
  }
};
</script>
<style>
</style>

