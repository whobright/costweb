<template>
  <div class="foliopage2">
    <div class="top_range">
     <!-- 左框 -->
      <div class="top_range1">
        <otherbox :gaugecharts2Data="gaugechartsData1"></otherbox>
      </div>
      <!-- 中框 -->
      <div class="top_range2">
        <otherbox :gaugecharts2Data="gaugechartsData2"></otherbox>
      </div>
      <!-- 右框 -->
      <div class="top_range3">
        <otherbox :gaugecharts2Data="gaugechartsData3"></otherbox>
      </div>
    </div>
    <div class="bottom_detail">
      <div class="title-item1">
        <img class="title-img" src="../../../assets/headoffice/icon_title.png">
        <span>各中后台部门预算执行-{{business}}</span>
        <el-radio-group v-model="radio" class="origin-radio right-radio" @change="getRadio">
          <el-radio :label="0">费用/预算达成率</el-radio>
          <el-radio :label="1">增额/增速</el-radio>
        </el-radio-group>
      </div>
      <div class="title-item2">
        <tab></tab>
      </div>
    </div>
  </div>
</template>

<script>
import otherbox from "@/components/officehead/otherbox.vue";
import tab from "@/components/officehead/tab.vue";
export default {
  components: {
    otherbox,
    tab
  },
  data() {
    return {
      radio: 0,
      gaugechartsData1: {
        center: ["52%", "83%"],

        seriesData: {
          max: 40,
          data: [
            {
              value: 56,
              name: "(%)"
            }
          ]
        }
      },
      gaugechartsData2: {
        center: ["52%", "83%"],
        seriesData: {
          max: 40,
          data: [
            {
              value: 55,
              name: "(%)"
            }
          ]
        }
      },
      gaugechartsData3: {
        center: ["52%", "83%"],
        seriesData: {
          max: 40,
          data: [
            {
              value: 35,
              name: "(%)"
            }
          ]
        }
      },
      business:'合计'
    };
  },
  mounted() {
    // this.drawEchart();
    // this.pieEchart2();
    // this.pieEchart3();
  },
  methods: {
    getRadio(index) {},
  
  }
};
</script>


<style lang="less" scoped>
// @import url('../../../assets/css/folio/folioCommon.less');

.foliopage2 {
  width: 100%;
  height: 100%;
  .top_range {
    width: 100%;
    height: 28%;
    display: flex;
    padding: 10px 0;
    .top_range1 {
      width: 33.5%;
      padding-right: 10px;
    }
    .top_range2 {
      padding-right: 10px;
      width: 33.5%;
    }
    .top_range3 {
      width: 33%;
    }
  }
  .bottom_detail {
    width: 100%;
    height: 72%;
    position: relative;
    .title-item1 {
      position: absolute;
      left: 0;
      top: 0;
      align-items: center;
      width: auto;
      height: 1.8vw;
      line-height: 1.8vw;
      padding-left: 1vw;
      color: #fff;
      .title-img {
        height: 1.5vw;
        float: left;
        margin-top: 0.3rem;
        margin-right: 0.3rem;
      }
      span {
        font-size: 2rem;
        font-weight: bold;
      }
      .right-radio {
        //   line-height: 1.8vw;
        padding-left: 1.5vw;
        font-size: 1rem;
        padding-bottom: 0.8vh;
      }
    }
    .title-item2 {
      width: 100%;
      height: 100%;
      padding: 2.8vw 10px 1.8vw 10px;
    }
  }
}
</style>
