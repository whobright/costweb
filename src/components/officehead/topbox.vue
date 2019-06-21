<template>
  <div class="small_range1">
    <!-- 左下角箭头 -->
    <img class="arrow_down" src="../../assets/headoffice/Group.png" alt>
    <img
      class="arrow_right"
      src="../../assets/headoffice/right_coner.png"
      alt
      v-on:mouseenter="mouseOn"
      v-on:mouseout="mouseOut"
    >
    <span class="coner_text" v-show="seen">这个是移入之后显示的文字</span>
    <!-- 左--左 -->
    <div class="range1_left">
      <div class="left_top">
        <img
          v-if="this.gaugechartsData.seriesData.data[0].value<this.gaugechartsData.seriesData.max"
          class="blue_bulb"
          src="../../assets/blueBulb.png"
        >
        <img v-else class="blue_bulb" src="../../assets/oriangeBulb.png">
        <span class="left_title">总行年累计业管费</span>
      </div>
      <div class="left_bottom">
        <div class="gauge" ref="gauge"></div>
      </div>
    </div>
    <!-- 左--中 -->
    <div class="range1_mid">
      <div class="right_top">
        <p class="right_title">
          <span>836</span>
          <span>亿</span>
        </p>
      </div>

      <div class="right_bottom">
        <div class="price_left">
          <p>年度预算</p>
          <p>增额</p>
          <p>同比</p>
        </div>
        <div class="price_right">
          <p>8000亿</p>
          <p>10亿</p>
          <p>
            <span>10%</span>
            <!-- 增涨图标 -->
            <img src="../../assets/headoffice/icon_up.png" alt>
            <!-- <img v-if="constructObj.tb>0" src="../../assets/headoffice/icon_up.png" alt> -->
            <!-- <img v-else src="../../assets/headoffice/icon_down.png" alt> -->

            <!-- 下跌图标 -->
            <!-- <img src="../../../assets/icon_down.png" alt> -->
          </p>
        </div>
      </div>
    </div>
    <!-- 左--右 -->
    <div class="range1_right">
      <div class="piecharts" ref="piecharts1"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gaugechartsData: {
      type: Object,
      default: function() {
        return {
          center: [],
          seriesData: {
            required: true,
            max: {
              type: Number,
              default: 40
            },
            data: [{
              value: 0,
              name:"(%)"
            }],
          }
        };
      }
    },
    piechartsData: {
      type: Object,
      default: function() {
        return {
          center: [],
          radius: "",
          fontsize: "",
          seriesData: []
        };
      }
    },
    constructObj: {
      type: Object,
      default: function() {
        return {
          tb: "-1"
        };
      }
    }
  },
  data() {
    return {
      seen: false
    };
  },
  mounted() {
    this.drawEchart();
    this.pieEchart2();
  },
  methods: {
    mouseOn: function() {
      this.seen = true;
    },
    mouseOut: function() {
      this.seen = false;
    },
    drawEchart() {
      let myChart = this.$echarts.init(this.$refs.gauge);
      // let boxData = [{ value: 24, max: 24, name: "(%)" }];
      myChart.clear();
      let option = {
        title: {
          text: "预算达成率",
          left: "center",
          bottom: "0%",
          textStyle: {
            fontSize: 14,
            color: "#fff"
          }
        },

        series: [
          {
            type: "gauge",
            radius: "135%",
            startAngle: 0,
            endAngle: 180,
            clockwise: false,
            min: 0,
            // max: this.echartData.max,
            max:this.gaugechartsData.seriesData.max,
            splitNumber: 4,
            data: this.gaugechartsData.seriesData.data, //必须转换为数组格式
            center: this.gaugechartsData.center,
            axisLine: {
              //仪表圈线
              show: true,
              lineStyle: {
                color: [[1, "#FF6600"]], //F0F0F0
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
              length: "55%",
              width: 3
            },

            title: {
              show: true,
              // offsetCenter: [0, "-20%"], // x, y，单位px
              textStyle: {
                color: "#fff",
                fontSize: 12
              }
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
    },
    pieEchart2() {
      let colors = ["#ff6600", "#FFCC66", "#FFFFCC"];
      let echartsOption = this.$echarts.init(this.$refs.piecharts1);
      let option = {
        series: [
          {
            color: colors,
            type: "pie",
            center: this.piechartsData.center,
            radius: this.piechartsData.radius,
            hoverAnimation: false,
            labelLine: {
              length: 4,
              length2: 5
            },
            label: {
              normal: {
                show: true,
                formatter: "{b}"
              },
              textStyle: {
                color: "#fff",
                fontSize: this.piechartsData.fontsize
              }
            },
            data: this.piechartsData.seriesData
          }
        ]
      };
      echartsOption.clear();
      echartsOption.setOption(option);

      echartsOption && echartsOption.resize && echartsOption.resize();
      let vm = this;
      let resizeCharts = function() {
        vm.echartsOption.resize();
      };
      window.addEventListener("resize", resizeCharts);
      // 通过$once来监听定时器，在deactivated钩子可以被清除,resize事件。
      this.$once("hook:deactivated", () => {
        window.removeEventListener("resize", resizeCharts);
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/folio/folioCommon.less");

.small_range1 {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 17px 0 15px 30px;
  background: rgba(255, 255, 255, 0.12);
  &:hover {
    background: rgba(213, 94, 14, 1);
  }
  .range1_left,
  .range1_mid,
  .range1_right {
    float: left;
    width: 33.3%;
    height: 100%;
    // padding-right: 2.0rem;
    .piecharts {
      width: 100%;
      height: 100%;
    }
  }
  .range1_mid {
    padding-right: 3rem;
  }
  .range1_left {
    .left_top {
      height: 2.3rem;
      .blue_bulb {
        width: 2.2rem;
        height: 2.3rem;
        float: left;
      }
      .left_title {
        font-size: 1.6rem;
        line-height: 2.3rem;
        float: left;
        margin-left: 0.4rem;
        word-wrap: nowrap;
        text-overflow: ellipsis;
      }
    }
    .left_bottom {
      width: 100%;
      height: 80%;
    }
  }
}
</style>

