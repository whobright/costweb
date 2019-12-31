<template>
  <div class="bottom">
    <div class="left-menu">
      <div class="menu font5" @click="clickMenu(index)" v-for="(menuName,index) in menuList" v-bind:key="index">
        <div class="menu-name" :class="{checkedMenu:menuFlag==index}">{{menuName}}</div>
        <div class="menu-line" :class="{checkedMenu:menuFlag==index}"></div>
      </div>
    </div>
    <div class="right-content">
      <div class="content-top">

        <div class="left-text">
          <span class="font1 ">贷款余额</span>
            <span class=" font6 ">782</span>
            <span class="font1 " style="align-self:flex-end;">亿</span>
        </div>
        <div class="right-text">
          <span class="font1 ">同比 -2亿， <img src="../../assets/icon_down.png"> 2%</span>
          <span class="font1 ">比上日 -2亿， <img src="../../assets/icon_down.png"> 2%</span>
          <span class="font1 ">比年初2亿， <img src="../../assets/icon_up.png"> 2%</span>
        </div>
      </div>
      <div class="content-bottom">
        <div class="box-title">
          <img class="title-img" src="../../assets/guimo/dbx.png">
          <span class="font4">贷款趋势</span>
        </div>
        <lineBarEchart class="line-bar" :echartId="'lineBar'"></lineBarEchart>
      </div>

    </div>

  </div>

</template>
<script>
  import lineBarEchart from "./components/lineBarEchart1";
  export default {
    components: {
      lineBarEchart,
    },
    data() {
      return {
        menuList: ['贷款余额', '新发放'],
        menuFlag: 0, //菜单的选中索引
      }
    },
    methods: {
      clickMenu(index) {
        this.menuFlag = index;
      }
    }

  }

</script>
<style lang='less' scoped>
  .bottom {
    width: 100%;
    height: 60%;
    padding-left: 35px;
  }

  .left-menu {
    width: 35px;
    height: 100%;
    position: relative;
    float: left;
    margin-left: -35px;

    .menu {
      height: 50%;
      width: 100%;
      margin-top: 4px;
      cursor: pointer;
    }

    .menu-line {
      height: 100%;
      width: 3px;
      background-color: rgba(0, 0, 0, 0);
      float: right;
    }

    .menu-name {
      width: 30px;
      height: 100%;
      word-wrap: break-word;
      writing-mode: vertical-rl;
      text-orientation: upright;
      letter-spacing: 4px;
      background-color: #999999;
      text-align: center;
      line-height: 30px;
      float: left;
    }

    .checkedMenu {
      background-color: rgba(239,111,46,0.7) !important;
    }
  }

  .right-content {
    float: right;
    height: 100%;
    width: 100%;
    padding-top: 4px;
    padding-left: 2%;

    .content-top {
      width: 100%;
      height: 25%;
      .left-text {
        height: 50%;
        width: 30%;
        float: left;
        display: flex;
        align-items: center;
        padding-left:10%;
        padding-right:5%;
        justify-content: space-between;

      }

      .right-text {
        height: 50%;
        float: right;
        width: 70%;
        display: flex;
        justify-content: space-between;
        padding-right: 25%;
        align-items: center;

      }
    }

    .content-bottom {
      width: 100%;
      height: 75%;
      .line-bar {
        width: 100%;
        height: 80%;
      }

    }
  }

  .box-title {
    display: flex;
    align-items: center;
    width: auto;
    height: 25px;
    line-height: 25px;
    .title-img {
      width: 40px;
      height: 25px;
      margin-right: 10px;
    }
  }







  .font1 {
    color: #FFFFFF;
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

  .font5 {
    color: #FFFFFF;
    font-size: 14px;
  }

  .font6 {
    color: #FF6600;
    font-size: 72px;
  }

</style>
