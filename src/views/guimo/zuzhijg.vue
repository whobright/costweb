<template>
  <div class="bottom">
    <div class="left-menu">
      <div class="menu font5" @click="clickMenu(index)" v-for="(menuName,index) in menuList" v-bind:key="index">
        <div class="menu-name" :class="{checkedMenu:menuFlag==index}">{{menuName}}</div>
        <div class="menu-line" :class="{checkedMenu:menuFlag==index}"></div>
      </div>
    </div>
    <div class="right-content">
      <div class="content-box1">
        <div class="box1-top">
          <pieEchart class="pie" :echartId="'pie'"></pieEchart>
        </div>
        <div class="box1-bottom">
          <div class="box-title title-margin">
            <img class="title-img" src="../../assets/guimo/dbx.png">
            <span class="font4">战区</span>
          </div>
          <div class="box1-left">
            <div class="font1">本月对公贷款余额</div>
             <div class="font1"><span class="font6">832</span>亿</div>
              <div class="font1">同比   <img src="../../assets/icon_up.png"> 2%</div>
          </div>
          <barEchart1 class="bar1" :echartId="'bar1'"></barEchart1>

        </div>
      </div>
      <div class="content-box2">
        <div class="box2-top">
          <div class="box-title">
            <img class="title-img" src="../../assets/guimo/dbx.png">
            <span class="font4">分行</span>
          </div>
          <barEchart2 class="bar2" :echartId="'bar2'"></barEchart2>
        </div>
        <div class="box2-bottom">
          <div class="box-title">
            <img class="title-img" src="../../assets/guimo/dbx.png">
            <span class="font4">全行-非零</span>
          </div>

          <lineBarEchart class="line-bar" :echartId="'lineBar'"></lineBarEchart>
        </div>
      </div>

    </div>

  </div>

</template>
<script>
  import pieEchart from "./components/pieEchart";
  import lineBarEchart from "./components/lineBarEchart1";
  import barEchart1 from "./components/barEchart1";
  import barEchart2 from "./components/barEchart2";
  export default {
    components: {
      pieEchart,
      lineBarEchart,
      barEchart1,
      barEchart2
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
      background-color: rgba(239, 111, 46, 0.7) !important;
    }
  }

  .right-content {
    float: right;
    height: 100%;
    width: 100%;
    padding-top: 4px;

    .content-box1 {
      height: 100%;
      width: 35%;
      float: left;

      .box1-top {
        width: 100%;
        height: 50%;

        .pie {
          width: 100%;
          height: 100%;
        }
      }

      .box1-bottom {
        width: 100%;
        height: 50%;

        .title-margin {
          margin-left: 5%;
        }

        .box1-left {
          width: 50%;
          height: 100%;
          float: left;
          padding-left:10%;
          padding-top:8%;
           padding-bottom:8%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

        }

        .bar1 {
          width: 50%;
          height: 100%;
          float: right;

        }
      }
    }

    .content-box2 {
      height: 100%;
      width: 65%;
      float: right;

      .box2-top {
        width: 100%;
        height: 50%;

        .bar2 {
          width: 100%;
          height: 100%;
        }
      }

      .box2-bottom {
        width: 100%;
        height: 50%;



        .line-bar {
          width: 100%;
          height: 80%;
        }
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

  .font5 {
    color: #FFFFFF;
    font-size: 14px;
  }
  .font6 {
    color: #FF6600;
    font-size: 28px;
  }

</style>
