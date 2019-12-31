<template>
  <div class="page">
    <div class="page-body">
      <div class="top">
        <div class="top-box" :class="{expand:expandFlag==0}" @click="expand(0)">
          <div class="top-box-title font4" :class="{checked:expandFlag==0}">
            全行贷款规模
          </div>
          <div class="top-box-content font3" :class="{font1:expandFlag==0}">
            <img class=" top-box-icon" src="../../assets/guimo/icon1.png">
            <div class="content-row ">
              <div class="row-icon icon-color1"></div>
              <span>贷款余额<span class='font2'>782</span>亿，同比<span class='font2'>2%</span>，比上日<span
                  class='font2'>-2%</span>，比年初<span class='font2'>1%</span></span>
            </div>
            <div class="content-row">
              <div class="row-icon icon-color2"></div>
              <span>贷款本月日均余额<span class='font2'>682</span>亿，低于年日均<span class='font2'>-0.13%</span>，本年日均<span
                  class='font2'>782</span>亿</span>
            </div>
            <div class="content-row" >
              <div class="row-icon icon-color3"></div>
              <span>年累计新发放贷款<span class='font2'>82</span>亿，同比<span class='font2'>-2%</span></span>

            </div>
          </div>
        </div>
        <div class="top-box" :class="{expand:expandFlag==1}" @click="expand(1)">
          <div class="top-box-title font4" :class="{checked:expandFlag==1}">
            按业务条线
          </div>
          <div class="top-box-content1 font3" :class="{font1:expandFlag==1}">
            <img class=" top-box-icon" src="../../assets/guimo/icon1.png">
            <annularEchart ref="refAnnular1" class="annular1" :echartId="'annular1'"></annularEchart>
            <div class="left-box">
              <div class="content-row" >
                <div class="row-icon icon-color1"></div>
                <span>其中，<span class='font2'>公司贷款</span>占比年初下降最多，<span class='font2'>-5%</span></span>
              </div>
              <div class="content-row" >
                <div class="row-icon icon-color2"></div>
                <span>其中<span class='font2'>零售贷款</span>新发放同比最低，同比<span class='font2'>1%</span>；</span>
              </div>
              <div class="content-row row-margin" >
                <div class="row-icon icon-color4"></div>
                <span class='font2'>小企业</span>新发放同比最高，同比<span class='font2'>7%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="top-box" :class="{expand:expandFlag==2}" @click="expand(2)">
          <div class="top-box-title font4" :class="{checked:expandFlag==2}">
            按组织机构
          </div>
           <el-radio-group v-model="radio" class="origin-radio radio" @change="getRadio">
            <el-radio :label="0">零售</el-radio>
            <el-radio :label="1">非零</el-radio>
          </el-radio-group>
          <div class='top-box-content font3' :class="{font1:expandFlag==2}">
            <div class="content-row">
              <div class="row-icon icon-color1"></div>
              <span>贷款余额较年初增速，最低的5个机构：<span v-for="(list,index) in cityList" v-bind:key="index"><span
                    class='font2'>{{list}}</span>、</span></span>
            </div>
            <div class="content-row">
              <div class="row-icon icon-color2"></div>
              <span>新发放较去年同期增速，最低的5个机构：<span v-for="(list,index) in cityList" v-bind:key="index"><span
                    class='font2'>{{list}}</span>、</span></span>

            </div>
            <div class="content-row">
              <div class="row-icon icon-color3"></div>
              <span>RWA风险权重，最高的5个机构：<span v-for="(list,index) in cityList" v-bind:key="index"><span
                    class='font2'>{{list}}</span>、</span></span>

            </div>
          </div>
        </div>
      </div>

      <router-view></router-view>

    </div>

  </div>

</template>
<script>
  import annularEchart from "./components/annularEchart1";
  export default {
    components: {
      annularEchart,
    },
    data() {
      return {
        expandFlag: 0, //头部盒子选中索引
        cityList: ['深圳', '长沙', '北京', '杭州', '上海'],
        radio:0,//非零/零售，单选框
      }
    },
    methods: {
      getRadio(value) {
      
    },
      expand(i) {
        this.expandFlag = i;
        this.$refs.refAnnular1.resize('annular1');
        if (i == 0) {
          this.$router.push({
            path: "/guimo/quanhangdk",
            query: {}
          });
        }
        if (i == 1) {

          this.$router.push({
            path: "/guimo/yewutx",
            query: {}
          });
        }
        if (i == 2) {
          this.$router.push({
            path: "/guimo/zuzhijg",
            query: {}
          });
        }

      }
    }

  }

</script>


<style lang='less' scoped>
  .page {
    width: 100%;
    height: 100%;
  }

  .page-body {
    width: 100%;
    height: 88%;
    background-color: rgba(47, 60, 71);
    overflow: hidden;
  }

  .top {
    width: 100%;
    height: 40%;
    display: flex;
  }



  .top-box-title {
    background-color: #999999;
    margin-left: 20%;
    margin-top: 50px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .radio{
     position: absolute;
     top:18%;
     right:10%;
  }



  .content-row {
    width: 100%;
    padding-right: 6%;
    padding-left: 5%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .row-icon {
      width: 25px;
      height: 15px;
      border-radius: 50%;
      display: inline-block;
    }

    .icon-color1 {
      background-color: #FF6600;
    }

    .icon-color2 {
      background-color: #FF9955;
    }

    .icon-color3 {
      background-color: #FFD88D;
    }

    .icon-color4 {
      //隐藏
      background-color: rgba(0, 0, 0, 0);
     
    }

  }

  .top-box-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .top-box {
    position: relative;
    height: 100%;
    width: 30%;
    transition: width 0.5s;
    cursor: pointer;

  }

  .expand {
    width: 40%;
  }

  .checked {
    background-color: #FF6600;
  }

  .top-box-content {
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 12%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  }

  .top-box-content1 {
    width: 100%;
    height: 70%;
    position: absolute;
    bottom: 0px;

    .annular1 {
      height: 100%;
      width: 50%;
      float: left;
    }

    .left-box {
      width: 50%;
      height: 100%;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-top:5vh;
      padding-bottom:5vh;
      .row-margin{
        margin-top:-20px;
      }
    }
  }


  .font1 {
    color: #FFFFFF !important;
    font-size: 18px;
  }

  .font2 {
    color: #FF6600;
    font-size: 18px;
  }

  .font3 {
    color: #999999;
    font-size: 18px;
  }

  .font4 {
    color: #FFFFFF;
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: bold;
  }

</style>
