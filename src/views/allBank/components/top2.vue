<template>
  <div class="top">
    <div class="top-box-wider">
      <div class="top-box-title">
        <img v-if="box1Data.value<box1Data.max" src="../../../assets/blueBulb.png">
        <img v-else src="../../../assets/oriangeBulb.png">
        <span class="title-txt">
          成本收入比<span class='txt-small'>（考核口径）</span>
          <span class="title-value">{{box1Data.value}}</span>%
        </span>
      </div>
      <div class="compare">
        <div class='compare-inline'>
          <span>同期</span>
          <span>{{box1Data.sameTime}}%</span>
        </div>
        <div class='compare-inline'>
          <span>同比</span>
         <img v-if='box1Data.sameCompare>0' src="../../../assets/icon_up.png">
          <img v-if='box1Data.sameCompare<0' src="../../../assets/icon_down.png">
          <span>{{box1Data.sameCompare}}%</span>
        </div>
      </div>
      <gagueEchart class="gauge" :echartId="'topGauge1'" :echartData="{max:box1Data.max,value:box1Data.value}"></gagueEchart>
      <span class="bottom-txt">
        <span class="value">{{box1Data.max}}</span>%(预算)
      </span>
    </div>
    <div class="top-box-wider">
      <div class="top-box-title">
        <img v-if="box2Data.value<box2Data.max" src="../../../assets/blueBulb.png">
        <img v-else src="../../../assets/oriangeBulb.png">
        <span class="title-txt">
          成本收入比<span class='txt-small'>（考核口径）</span>
          <span class="title-value">{{box2Data.value}}</span>%
        </span>
      </div>
     <div class="compare">
        <div class='compare-inline'>
          <span>同期</span>
          <span>{{box2Data.sameTime}}%</span>
        </div>
        <div class='compare-inline'>
          <span>同比</span>
         <img v-if='box2Data.sameCompare>0' src="../../../assets/icon_up.png">
          <img v-if='box2Data.sameCompare<0' src="../../../assets/icon_down.png">
          <span>{{box2Data.sameCompare}}%</span>
        </div>
      </div>
      <gagueEchart class="gauge" :echartId="'topGauge2'" :echartData="{max:box2Data.max,value:box2Data.value}"></gagueEchart>
      <span class="bottom-txt">
        <span class="value">{{box2Data.max}}</span>%(预算)
      </span>
    </div>
    <div class="top-box-wider">
      <div class="top-box-title">
        <img v-if="box3Data.value<box3Data.max" src="../../../assets/blueBulb.png">
        <img v-else src="../../../assets/oriangeBulb.png">
        <span class="title-txt">
          成本收入比<span class='txt-small'>（披露口径）</span>
          <span class="title-value">{{box3Data.value}}</span>%
        </span>
      </div>
      <div class="compare">
        <div class='compare-inline'>
          <span>同期</span>
          <span>{{box3Data.sameTime}}%</span>
        </div>
        <div class='compare-inline'>
          <span>同比</span>
         <img v-if='box3Data.sameCompare>0' src="../../../assets/icon_up.png">
          <img v-if='box3Data.sameCompare<0' src="../../../assets/icon_down.png">
          <span>{{box3Data.sameCompare}}%</span>
        </div>
      </div>
      <gagueEchart class="gauge" :echartId="'topGauge3'" :echartData="{max:box3Data.max,value:box3Data.value}"></gagueEchart>
      <span class="bottom-txt">
        <span class="value">{{box3Data.max}}</span>%(预算)
      </span>
    </div>
  </div>
</template>

<script>
import gagueEchart from "./gagueEchart";
export default {
  name: "top2",
  components: {
    gagueEchart
  },
  data() {
    return {
      box1Data:{
        value: 36,
        max: 40,
        sameTime:0,
        sameCompare:0,
      },
       box2Data:{
        value: 40,
        max: 32,
        sameTime:0,
        sameCompare:0,
      },
       box3Data:{
        value: 19,
        max: 37,
        sameTime:29,
        sameCompare:-10,
      },
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='less' scoped>
/* 顶部box  start */
.top{
  display:flex;
}
.top-box-wider {
  position: relative;
  height: 100%;
  width: 33%;
  .compare {
    float: right;
    margin-right:5%;
    width: auto;
    min-width: 20%;
    font-size: 1.4rem;
   .compare-inline{
     span:last-child{
       float:right;
     }
   }
  }
  .bottom-txt {
    position: absolute;
    float: right;
    font-size: 1.4rem;
    bottom: 7%;
    left: 40%;
    .value {
      font-size: 2rem !important;
    }
  }
  .gauge {
    position: absolute;
    float: left;
    bottom: 8%;
    width: 36.03%;
     height:59.86%;
  }
}
.top-box-title {
  margin-top: 1.2%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  img {
    width: 1.8rem;
    height: 2rem;
  }
  .title-txt {
    font-size: 1.8rem;
    .txt-small {
      font-size: 1.4rem;
    }
    .title-value {
      font-size: 2.8rem;
      font-weight: bold;
    }
  }
}

/* 顶部box  end */
</style>


