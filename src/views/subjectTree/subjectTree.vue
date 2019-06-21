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
      <el-select v-model="selectValue1" class="allBankSelect select1">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </ul>
    <div class="toAllbank" @click="toAllbank">
      <img src="../../assets/home.png">
      <span>全行概览</span>
    </div>
  </div>
  <div class="content">
    <div class="left-box">
      <div class="box-title">
        <img class="title-img" src="../../assets/dbx.png">
        <span>费用结构</span>
        <el-select v-model="selectValue2" placeholder="请选择" class="allBankSelect">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <el-radio-group v-model="radio1" class="origin-radio radio1">
        <el-radio :label="0">累计费用金额/占比</el-radio>
        <el-radio :label="1">同比增额/增速</el-radio>
        <el-radio :label="2">预算执行率</el-radio>
      </el-radio-group>
      <div class="tree">
        <!-- <tree></tree> -->
        <tree2 :echartId="'tree2'"></tree2>
        <!-- <test></test> -->
      </div>
    </div>
    <div class="right-box">
      <div class="box-title">
        <img class="title-img" src="../../assets/dbx.png">
        <span>管控费用进度</span>
      </div>
      <table cellspacing="0" class="right-table">
        <thead>
          <tr>
            <th></th>
            <th>累计金额</th>
            <th>执行率</th>
            <th>同比增额</th>
            <th>同比增速</th>
          </tr>
          <tr>
            <th></th>
            <th>（亿元）</th>
            <th>（%）</th>
            <th>（亿元）</th>
            <th>（%）</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list,index) in tableData" :key="index">
            <td>{{list.td1}}</td>
            <td>{{list.td2}}</td>
            <td style='color:#299FF2;' :class="{overHundred:list.td3>100}">{{list.td3}}%</td>
            <td>{{list.td4}}</td>
            <td> <img v-if='list.td5>0' src="../../assets/icon_up.png">
          <img v-if='list.td5<0' src="../../assets/icon_down.png">
          {{list.td5}}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>
</template>
<script>
import tree from "./tree";
import tree2 from "./tree2";
import test from "./test";

export default {
  components: {
    tree,
    tree2,
    test,
  },
  data() {
    return {
      data: [99, 71, 78, 25, 36, 92],
      line: "",
      radioList: ["全行", "大对公", "零售"],
      radioIndex: 0, //头部的左下选中的radio索引，
      selectValue1: "1", //下拉选中框的value
      radio1: 0,
      selectValue2: "1",
      options1: [
        {
          //select选择框的options
          value: "1",
          label: "大对公"
        },
        {
          value: "2",
          label: "同行"
        },
        {
          value: "3",
          label: "特管"
        },
        {
          value: "4",
          label: "分行及事业部"
        }
      ],
      tableData: [
        { td1: "业务招待费", td2: 1079, td3: 103, td4: 10, td5: 10 },
        { td1: "业务宣传费", td2: 1079, td3: 90, td4: 10, td5: 10 },
        { td1: "广告费", td2: 1079, td3: 105, td4: 10, td5: 10 },
        { td1: "设备运转", td2: 1079, td3: 90, td4: 10, td5: -10 }
      ],
      options2: [
        {
          //select选择框的options
          value: "1",
          label: "按类别"
        },
        {
          value: "2",
          label: "按科目"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    radioClick(index) {
      this.title = this.radioList[index];
      this.radioIndex = index;
    },
    toAllbank(){
       this.$router.push({ path: "allBankPage1", query: {} });

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
  .select1 {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
  }
  .toAllbank {
    position: absolute;
    display: flex;
    align-items: center;
    right: 1.7%;
    bottom: 20%;
    img {
      width: 2.2rem;
      height: 2.2rem;
      // margin-bottom:0;
    }
    span {
      margin-left: 0.3rem;
      // margin-bottom:0;
      color: #ff6600;
      font-size: 1.4rem;
    }
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
  .box-title {
    display: flex;
    align-items: center;
    width: auto;
    height: 2.6rem;
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    .title-img {
      width: 3rem;
      height: 1.8rem;
    }
  }
  .left-box {
    position: relative;
    float: left;
    width: 70.28vw;
    height: 100%;
    background-color: rgba(47, 60, 71, 0.5);
    .radio1 {
      position: absolute;
      float: right;
      top: 5%;
      right: 5%;
    }
    .tree {
      margin-top: 4%;
      width: 100%;
      height: 87%;
    }
  }
  .right-box {
    float: right;
    width: 27.52vw;
    height: 100%;
    margin-left: 0.73vw;
    background-color: rgba(47, 60, 71, 0.5);
    vertical-align: middle;
    .overHundred{
      color:#FD560C !important;
    }
    .right-table {
      font-size: 1.4rem;
      width: 100%;
      th {
        width: 17.5%;
      }
      th:first-child {
        width: 30%;
        border-right: 1px solid #979797;
      }
      tr {
        height: 10vh;
      }
      td {
        text-align: center;
      }
      td:first-child {
        text-align: right;
        border-right: 1px solid #979797;
      }
      thead {
        tr {
          height: auto;
        }
        tr:last-child {
          th {
            border-bottom: 1px solid #979797;
          }
        }
      }
    }
  }
}

/* 布局样式 end */
</style>


