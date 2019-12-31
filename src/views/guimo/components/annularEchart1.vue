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
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "pieEchart",
  props: {
    echartId: {
      type: String,
      required: true
    },
    echartData: {
      type: Object,
      default: function() {
        return {
          series: [{ value: 335, name: "零售贷款" },{ value: 335, name: "票据直贴" },{ value: 335, name: "小企业贷款" },{ value: 335, name: "公司贷款" }],
        };
      }
    },
    // currentRadio: {
    //   type: Number,
    //   default: 0
    // }
  },

  mounted() {
    // this.getPieData();
    this.drawEchart(this.echartId);
  },
  methods: {
    // ...mapActions('allBank',[
    //   "getPieData",]),
    resize(echartId){
       let myChart = echarts.init(document.getElementById(echartId));
       myChart.resize();

    },

    drawEchart(echartId) {
      //alert(1);
      let myChart = echarts.init(document.getElementById(echartId));
      myChart.clear();
      let option = {
        color: ["#FF6600", "#F19F63", "#F9D462","#FF9900"],
        tooltip: {
          trigger: "item",
          confine: true,
          formatter: "{b}: {c} ({d}%)"
        },
       

        series: [
          {
            name: "费用结构",
            type: "pie",
            radius: ["25%", "35%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            animation: false, //关闭动画
            label: {
              normal: {
                show: true,
                color: "#FFF",
                //formatter: "{c}亿\n{d}%"
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
                show: true
              }
            },
            data: this.echartData.series
          }
        ]
      };
      let that = this;
      myChart.setOption(option);
      window.addEventListener("resize", function () {
          myChart.resize();
        });
      myChart.on("click", function(params) {
        
          
        
      });
    }
  }
};
</script>
<style>
</style>

