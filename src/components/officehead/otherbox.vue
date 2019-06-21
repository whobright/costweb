<template>
  <div class="small_range2">
    <!-- 左下角箭头 -->
    <img class="arrow_down" src="../../assets/headoffice/Group.png" alt>
    <!-- 中--左 -->
    <div class="range2_left">
      <div class="left_top">
        <img
          v-if="this.gaugecharts2Data.seriesData.data[0].value<this.gaugecharts2Data.seriesData.max"
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
    <!-- 中--右 -->
    <div class="range2_right">
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
            <!-- 下跌图标 -->
            <!-- <img src="../../../assets/icon_down.png" alt> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gaugecharts2Data: {
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
  },
  data() {
    return {
    //   seen: false
    };
  },
  mounted() {
    this.drawEchart();
  },
  methods: {
 
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
            max: this.gaugecharts2Data.seriesData.max,
            splitNumber: 4,
            data: this.gaugecharts2Data.seriesData.data, //必须转换为数组格式
            center: this.gaugecharts2Data.center,//["52%", "83%"],
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
   
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/folio/folioCommon.less");

.small_range2 {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 17px 30px 15px 30px;
  background: rgba(255, 255, 255, 0.12);
  &:hover {
    background: rgba(213, 94, 14, 1);
  }
  .range2_left {
    float: left;
    width: 55%;
    height: 100%;
  }
  .range2_right {
    float: left;
    width: 45%;
    height: 100%;
    padding-right: 2rem;
  }
}
</style>

