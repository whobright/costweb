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
      required: true,
      default: function() {
        return {
          series: [],//对象数组，如：[{ value: 335, name: "大对公" }],
          legend: []//字符串数组，如：['大对公'，零售]
        };
      }
    },
    // currentRadio: {
    //   type: Number,
    //   default: 0
    // }
  },
  computed: {
    ...mapState("allBank", ["radioIndex"])
  },
  mounted() {
    // this.getPieData();
    this.drawEchart(this.echartId);
  },
  methods: {
     ...mapMutations('allBank',[
      "setRadioIndex",
    ]),
    // ...mapActions('allBank',[
    //   "getPieData",]),

    drawEchart(echartId) {
      let myChart = echarts.init(document.getElementById(echartId));
      myChart.clear();
      let option = {
        color: ["#FF6600", "#FFCC33", "#FFFFCC"],
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
          data: this.echartData.legend
        },

        series: [
          {
            name: "费用结构",
            type: "pie",
            radius: ["45%", "65%"],
            center: ["45%", "40%"],
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
                show: true
              }
            },
            data: this.echartData.series
          }
        ]
      };
      let that = this;
      myChart.setOption(option);
      myChart.on("click", function(params) {
        //that.test();
        if (that.radioIndex == 0) {
          if (params.data.name == "大对公") {
            that.$router.push({ path: "allBankPage2", query: {} });
            that.setRadioIndex(1);
          } else if (params.data.name == "零售") {
            that.$router.push({ path: "allBankPage3", query: {} });
            that.setRadioIndex(2);
          } else {
            alert("去总行页");
          }
        } else if (that.radioIndex == 1) {
          //去大对公费用，带参数
          // that.$router.push({ path: "allBankPage2" , query: {} });
          // that.setRadioIndex(1);
        } else if (that.radioIndex == 2) {
          if (params.name == "零售") {
            //不含运营
            //请求接口
          } else if (params.name == "运营") {
            //含运营
            //请求接口
          }
        }
      });
    }
  }
};
</script>
<style>
</style>

