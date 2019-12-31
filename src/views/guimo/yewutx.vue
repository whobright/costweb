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
        <img class=" icon" src="../../assets/guimo/icon2.png">
        <annularEchart class="annular2" :echartId="'annular2'"></annularEchart>
      </div>
      <div class="content-box2">
        <div class='font1 box2-title'>零售贷款月趋势</div>
        <lineBarEchart class="line-bar" :echartId="'lineBar'"></lineBarEchart>
      </div>

    </div>

  </div>

</template>
<script>
  import lineBarEchart from "./components/lineBarEchart2";
  import annularEchart from "./components/annularEchart2";
  export default {
    components: {
      lineBarEchart,
      annularEchart,
    },
    data() {
      return {
        menuList: ['贷款余额', '新发放',],
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
      width: 45%;
      position: relative;
      float: left;

      .icon {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .annular2 {
        width: 100%;
        height: 90%;
        margin: 0 auto;
      }

    }

    .content-box2 {
      float: right;
      height: 100%;
      width: 50%;
      .box2-title{
        margin-top:2%;
        margin-left:8%;
      }

      .line-bar {
        margin-top: 8%;
        height: 80%;
        width: 100%;
      }

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
