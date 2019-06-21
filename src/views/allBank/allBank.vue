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
    <span class="header-title">{{title}}费用执行情况</span>
    <Filter-item
      class="header-time dateSelect"
      :date.sync="timeValue"
      date-type="month"
      :show-item="{date:true,unit:false}"
      @dateChange="getDate"
    ></Filter-item>
  </div>
  <div class="content">
    <router-view class="top"></router-view>
    <div class="botttom-left">
      <div class="box-title">
        <img class="title-img" src="../../assets/dbx.png">
        <span>营业费用结构</span>
      </div>
      <div class="box1">
        <span class="box-item">{{title}}费用-按线条</span>
        <div class="center-txt">
          <span>{{title}}</span>
          <span>{{pieValue}}亿元</span>
        </div>

        <pieEchart class="pie"  :echartId="'pie'" :echartData="pieData" :currentRadio="radioIndex"></pieEchart>
      </div>
      <div class="box2">
        <span class="box-item">{{title}}费用-按类别</span>
        <el-radio-group v-model="radio1" class="origin-radio left-radio" @change="getRadio1">
          <el-radio :label="0">金额/占比</el-radio>
          <el-radio :label="1">增额/增速</el-radio>
        </el-radio-group>

        <relationEchart
          class="graph"
          :echartId="'graph'"
          :echartData="{data1:123,data2:456,data3:789,data4:888}"
        ></relationEchart>
      </div>
    </div>
    <div class="botttom-right1">
      <div class="box-title">
        <img class="title-img" src="../../assets/dbx.png">
        <span>资源配置收益</span>
        <el-select v-model="selectValue" class="allBankSelect">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="left-box">
        <scatterEchart
          class="scatter"
          :echartId="'scatter'"
          :xName="'累计费用增速(%)'"
          :yName="'累计收入增速(%)'"
        ></scatterEchart>
      </div>
      <div class="right-box">
        <div class="title">
          <span>{{seriesName}}</span>
          <el-radio-group v-model="radio2" class="origin-radio right-radio" @change="getRadio2">
            <el-radio :label="0">年累计</el-radio>
            <el-radio :label="1">当月</el-radio>
          </el-radio-group>
        </div>
        <lineBarEchart class="lineBar" :echartId="'lineBar'"></lineBarEchart>
      </div>
    </div>
    <div class="botttom-right2">
      <div class="box-title">
        <img class="title-img" src="../../assets/dbx.png">
        <span>资源配置进度</span>
        <el-select v-model="selectValue" class="allBankSelect">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="left-box">
        <scatterEchart
          class="scatter"
          :echartId="'scatter2'"
          :xName="'累计费用预算进度(%)'"
          :yName="'累计收入预算进度(%)'"
        ></scatterEchart>
      </div>
      <div class="right-box">
        <div class="title">
          <span>{{seriesName}}</span>
        </div>
        <lineEchart class="line" :echartId="'line'"></lineEchart>
      </div>
    </div>
  </div>
</body>
</template>
<script>
import pieEchart from "./components/pieEchart";
import relationEchart from "./components/relationEchart";
import scatterEchart from "./components/scatterEchart";
import lineBarEchart from "./components/lineBarEchart";
import lineEchart from "./components/lineEchart";
import FilterItem from "../../components/FilterItem";
import {toFixed2} from '../../utils/formatNumber';
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    pieEchart,
    relationEchart,
    scatterEchart,
    lineBarEchart,
    lineEchart,
    FilterItem
  },
  data() {
    return {
      radioList: ["全行", "大对公", "零售"],
      title: "全行", //页面的大标题
      radio1: 0, //左边的radio
      radio2: 0, //右边的radio
      selectValue: "1", //下拉选中框的value
      timeValue: "", //选中的value
      pieValue: 189, //环形图中间的值
      options: [
        {
          //select选择框的options
          value: "1",
          label: "总费用"
        },
        {
          value: "2",
          label: "人工费"
        },
        {
          value: "3",
          label: "业管费"
        },
        {
          value: "4",
          label: "固定费"
        }
      ]
    };
  },
  computed: {
    ...mapState("allBank", ["radioIndex",'seriesName','pieData'])
  },
  created(){
    this.getPieData();
  },
  mounted() {
  },
  methods: {
    ...mapActions('allBank',["getPieData",]),
    ...mapMutations("allBank", ["setRadioIndex",]),
    radioClick(index) {
      //头部左边的radio
      this.title = this.radioList[index];
      this.setRadioIndex(index);
      this.$router.push({ path: "allBankPage" + (index + 1), query: {} });
    },

    getDate(value) {
      //头部的日期控件
      //alert(value);
    },
 
    getRadio1(value) {
      //左边的radio
      //alert(value);
    },
    getRadio2(value) {
      //右边的radio
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
  font-family: "微软雅黑";
  font-weight: normal;
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
    float: right;
    bottom: 10%;
    right: 1%;
    width: auto;
  }
}

.content {
  width: 100vw;
  height: 90vh;
  padding-left: 0.73vw;
  padding-right: 0.73vw;
  padding-bottom: 1.3vh;
  color: #fff;
  font-family: "微软雅黑";
}
.top {
  display: flex;
  width: 98.53vw;
  height: 21.61vh;
  background-color: rgba(47,60,71,0.5);
}
.botttom-left {
  margin-top: 1.3vh;
  margin-right: 0.73vw;
  float: left;
  width: 21.23vw;
  height: 66.14vh;
  background-color:rgba(47,60,71,0.5);
 
}

.botttom-right1 {
  margin-top: 1.3vh;
  float: right;
  width: 76.57vw;
  height: 34.8vh;
  background-color: rgba(47,60,71,0.5);//#25363f;
 
}
.botttom-right2 {
  margin-top: 1.3vh;
  float: right;
  width: 76.57vw;
  height: 29.95vh;
  background-color: rgba(47,60,71,0.5);
  //opacity: 0.8;
}
/* 布局样式 end */

/* 底部左侧box start */
.box-title {
  display: flex;
  align-items: center;
  width: auto;
  height: 2.6rem;
  margin-top: 1rem;
  margin-left: 1rem;
  color: #fff;
  .title-img {
    width: 3rem;
    height: 1.8rem;
    margin-right:10px;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
  }
}
.botttom-left {
  .box-item {
    font-size: 1.6rem;
    display: block;
    margin-left: 2.5rem;
    margin-top: 1rem;
  }
  .box1 {
    position: relative;
    width: 100%;
    height: 45%;
    .center-txt {
      position: absolute;
      font-size: 1.4rem;
      display: inline;
      text-align: center;
      widows: auto;
      top: 35%;
      left: 36%;
      z-index: 100;
      span {
        display: block;
      }
    }
    .pie {
      width: 100%;
      height: 85%;
    }
  }
  .box2 {
    width: 100%;
    height: 40%;
    position: relative;
    .left-radio {
      position: absolute;
      right: 5%;
    }
    .graph {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 25%;
      width: 80%;
      height: 85%;
    }
  }
}
/* 底部左侧box end */

/* 底部右侧box1 start */
.botttom-right1 {
  .left-box {
    float: left;
    height: 80%;
    width: 45%;
    .scatter {
      width: 100%;
      height: 100%;
    }
  }
  .right-box {
    position: relative;
    float: right;
    height: 80%;
    width: 55%;
    .title {
      position: absolute;
      width: auto;
      height:10%;
      line-height: 10%;
      left: 6%;
      font-size: 1.6rem;
      .right-radio {
        display: inline-block;
       
      }
    }
    .lineBar {
      position: absolute;
      top: 10%;
      width: 100%;
      height: 90%;
    }
  }
}

/* 底部左侧box1 end */

/* 底部右侧box2 start */
.botttom-right2 {
  .left-box {
    float: left;
    height: 80%;
    width: 45%;
    .scatter {
      width: 100%;
      height: 100%;
    }
  }
  .right-box {
    position: relative;
    float: right;
    height: 80%;
    width: 55%;
    .title {
      display: flex;
      align-items: center;
      width: 100%;
      position: absolute;
      left: 6%;
      font-size: 1.6rem;
    }
    .line {
      position: absolute;
      top: 10%;
      width: 100%;
      height: 90%;
    }
  }
}
/* 底部左侧box2 end */
</style>


