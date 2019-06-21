<template>
<body class="body">
  <div class="header">
    <ul class="header-radio">
      <li
        v-for="(list,index) in radioList"
        v-bind:key="index"
        :index="index"
        :class="{checked:index==radioIndex}"
        @click="radioClick(index)"
      >{{list}}</li>
    </ul>
    <span class="header-title">总行业务及管理费执行概况({{title}})</span>
    <Filter-item
      class="header-time dateSelect"
      :date.sync="timeValue"
      date-type="month"
      :show-item="{date:true,unit:false}"
      @dateChange="getDate"
    ></Filter-item>
    <div class="home" @click="routerChange()">
      <img src="../../assets/headoffice/home.png" alt>
      {{area}}
    </div>
  </div>
  <div id="mainContent">
      
      <keep-alive>
        <router-view class="top"></router-view>
      </keep-alive>
     
  </div>
</body>
</template>
<script>
import FilterItem from "../../components/FilterItem";
export default {
  components: {
    FilterItem
  },
  data() {
    return {
      radioList: ["总行", "产品事业部", "中后台部门"],
      radioIndex: 0, //头部的左下选中的radio索引，
      title: "非零", //页面的大标题
      area: "大对公概览",
      timeValue: "", //选中的value
      fromRoute: "", // 路由来源名称，用于切换系统头部判断
      routerDetail: ""
    };
  },
  computed: {},
  mounted() {
    //根据路由判断头部信息
    this.getRoute();
  },
  watch: {
    $route(to, from) {
      this.getStatus(to.path);
    }
  },
  methods: {
    // 地址栏url改变时，调用头部方法
    getStatus(fullRoute) {
      let routerArr = fullRoute.split("/");
      let toRoute = routerArr[2].replace(/\d+/g, "");
      if (this.fromRoute && toRoute !== this.fromRoute) {
        this.getRoute();
        
      }
    },
    getRoute() {
      let fullRoute = this.$route.path;
      //   console.log(fullRoute);
      let routerArr = fullRoute.split("/");
      let routerDetail = routerArr[2];
      this.fromRoute = routerDetail; // 赋值路由来源
      //   console.log(routerDetail);
      //点击切换tab栏
      let numrouter = this.fromRoute.replace(/[^0-9]/gi, "");
 
        this.radioIndex = numrouter-1;
     
      if (routerDetail.startsWith("folioPage")) {
        this.radioList = ["总行", "产品事业部", "中后台部门"];
        this.area = "大对公概览";
        if (routerDetail != "folioPage1") {
          this.area = "全行概览";
        }
      } else if (routerDetail.startsWith("retailPage")) {
        this.radioList = ["总行", "业务部门", "中后台部门"];
        this.title = "大零售";
        this.area = "零售概览";
      }
    },
    routerChange(){
      if(this.area.startsWith( "全行" )){
        this.$router.push({path:'/allBankPage1'})
      }else if(this.area.startsWith( "大对公" )){
        this.$router.push({path:'/allBankPage2'})
      }else if(this.area.startsWith( "零售" )){
        this.$router.push({path:'/allBankPage3'})
      }
    },
    radioClick(index) {
      //头部左边的radio
      //   this.title = this.radioList[index];

      let lastRoute = this.fromRoute.replace(/\d+/g, "");

      this.radioIndex = index;

      this.$router.push({ path: lastRoute + (index + 1), query: {} });
    },
    getDate(value) {
      //头部的日期控件
      //alert(value);
    }
  }
};
</script>

<style  lang='less' scoped>
/* 布局样式 start */
.body {
  width: 100%;
  height: 100%;
  background: url("../../assets/home_bg.jpg") no-repeat center center;
  overflow: hidden;
}
.header {
  position: relative;
  height: 9.63vh;
  width: 100vw;
  color: #fff;
  .header-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.8rem;
    line-height: 9.63vh;
  }
  .header-radio {
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    left: 0.73%;
    height: 39.5%;
    width: 20.5%;
  }
  .header-radio li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #999999;
    height: 100%;
    width: 32.1%;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    font-size: 1.4rem;
  }
  .checked {
    background-color: rgb(225, 102, 0) !important;
  }
  .header-time {
    position: absolute;
    bottom: 10%;
    right: 8%;
    width: auto;
  }
  .home {
    position: absolute;
    bottom: 10%;
    right: 1%;
    width: auto;
    color: rgb(225, 102, 0);
    line-height: 3.43vh;
    cursor: pointer;
    // vertical-align: text-bottom;
    img {
      vertical-align: -0.3vh;
    }
  }
}

#mainContent {
  width: 100vw;
  height: 90vh;
  padding: 0 .73vw 1.3vh .73vw;
//   padding-left: 0.73vw;
//   padding-right: 0.73vw;
//   padding-bottom: 1.3vh;
  color: #fff;
  //   font-family: "微软雅黑";
    
}
.top{
    // display: flex;
    width: 100%;
    height: 100%;
    background: rgba(37, 54, 63, 0.8);
    // height: 28%;
    // background-color: #f00;
    // background: rgba(47, 60, 71, 0.5);
    // background: rgba(255,255,255,.12);
}
// .bottom{
//     width: 100%;
//     height: 72%;
//     background-color: #0f0;

// }

/* 布局样式 end */

/* 底部左侧box start */

/* 底部左侧box end */

/* 底部右侧box1 start */

/* 底部左侧box1 end */

/* 底部右侧box2 start */

/* 底部左侧box2 end */
</style>


