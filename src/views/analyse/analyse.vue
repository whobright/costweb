<template>
  <div class="bg">
    <div class="header">
      <span class="header-title">机构费用投产分析</span>
      <Filter-item
        class="header-time dateSelect"
        :class="{'spe2':radioIndex == '2'}"
        :date.sync="timeValue"
        date-type="month"
        :show-item="{date:true,unit:false}"
        @dateChange="getDate"
      ></Filter-item>
      <div class="select-area" v-if="radioIndex == '2'">
        <my-select
          class="select_item"
          :value.sync="selectData.item1.value"
          label="战区："
          :data="selectData.item1.list"
          theme="dark"
          :default-props="selectDefaultProps"
          @change="selectChange1"
        ></my-select>
        <my-select
          class="select_item"
          :value.sync="selectData.item2.value"
          label="机构："
          :data="selectData.item2.list"
          theme="dark"
          :default-props="selectDefaultProps"
          @change="selectChange2"
        ></my-select>
      </div>
      <div  @click="toAllbank" class="home" :class="{'spe1':radioIndex == '2'}">
        <i class="icon"></i>大对公概览
      </div>
      <div class="menuBar">
        <ul class="header-radio">
          <li
            v-for="(list,index) in radioList"
            v-bind:key="index"
            :index="index"
            :class="{checked:index == radioIndex}"
            @click="radioClick(index)"
          >{{list}}</li>
        </ul>
        <div class="second-title">
          <span
            v-for="(item,index) in secondTitle"
            :key="index"
            :class="{actived:index == titleIndex}"
            @click="changeSubtitle(index)"
          >{{item}}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="leftCon">
        <div class="top-item-box">
          <div class="box-title">
            <img class="title-img" src="../../assets/dbx.png">
            <span>同业概况</span>
          </div>
          <div class="detailBox">
            <p v-if="radioIndex == '0'"><em>成立时间：</em><span>2013年10月1日</span></p>
				    	<p v-if="radioIndex == '0'"><em>分部数量：</em>
				    		<span @mouseenter="PopFlag1 = true" @mouseleave="PopFlag1 = false">
				    			10家
				    			<ul class="branchPop" v-show="PopFlag1">
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    			</ul>
				    		</span>
            </p>
			<p v-if="radioIndex == '1'"><em>成立时间：</em><span>2013年10月1日</span></p>
				    	<p v-if="radioIndex == '1'"><em>分部数量：</em>
				    		<span @mouseenter="PopFlag1 = true" @mouseleave="PopFlag1 = false">
				    			10家
				    			<ul class="branchPop" v-show="PopFlag1">
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    				<li>xx分部201709</li>
				    			</ul>
				    		</span>
            </p>
            <p v-if="radioIndex == '2'" class="detail-tit">
              <el-row class="tit-score">
                <el-col :span="24">
                  <div >
					  KPI得分<span class="num">80</span>分
					<img src="../../assets/analyse/link.png" @click="linkkpi" alt="">
				  </div>
                </el-col>
              </el-row>

			  <el-row class="tit-des">
				  <el-col :span="12">
					  <div  @click="income">营业收入 <span class="num">8</span>亿 </div>
				  </el-col>
				   <el-col :span="12">
					 <div @click="nointerest">非息收入 <span class="num">8</span>亿 </div>
				  </el-col>
			  </el-row>
			   
			    <el-row class="tit-des">
				  <el-col :span="12">
					  <div @click="deposit">存款日均 <span class="num">8</span>亿 </div>
				  </el-col>
				   <el-col :span="12">
					 <div @click="loan">贷款日均 <span class="num">8</span>亿 </div>
				  </el-col>
			  </el-row>
            </p>
          
            <p v-if="radioIndex == '2'">
              <em>一级分行数量：</em>
              <span @mouseenter="PopFlag3 = true" @mouseleave="PopFlag3 = false">
                10家
                <ul class="branchPop" v-show="PopFlag3">
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                </ul>
              </span>
            </p>
            <p v-if="radioIndex == '2'">
              <em>二级分行数量：</em>
              <span @mouseenter="PopFlag4 = true" @mouseleave="PopFlag4 = false">
                10家
                <ul class="branchPop" v-show="PopFlag4">
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                  <li>xx分部201709</li>
                </ul>
              </span>
            </p>
          </div>
          <div class="table-contract">
            <div class="headerTable">
              <table>
                <thead>
                  <th width="100"></th>
                  <th width="80">
                    年初
                    <br>(人)
                  </th>
                  <th>
                    期末
                    <br>(人)
                  </th>
                  <th>
                    平均
                    <br>(人)
                  </th>
                  <th>
                    占比
                    <br>(%)
                  </th>
                </thead>
              </table>
            </div>
            <div :class="{'bodyTable':radioIndex == '2'}">
              <table>
                <tbody>
                  <tr>
                    <td>正编合计</td>
                    <td>11000</td>
                    <td>7000</td>
                    <td>3000</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">其中,外勤</td>
                    <td>11000</td>
                    <td>7000</td>
                    <td>3000</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">外勤</td>
                    <td>11000</td>
                    <td>7000</td>
                    <td>3000</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>外包合计</td>
                    <td>11000</td>
                    <td>7000</td>
                    <td>3000</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">其中,外勤</td>
                    <td>11000</td>
                    <td>7000</td>
                    <td>3000</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">外勤</td>
                    <td>11000</td>
                    <td>7000</td>
                    <td>3000</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="linebg" v-if="radioIndex == '2'"></div>
        <!--环形图-->
        <!-- 同业 -->
        <div class="bottom-item-box" v-if="radioIndex == '0'">
          <div class="pieEchartBox">
            <h3>各条线费用分部：</h3>
            <div class="echartDom">
              <div class="center-txt">
                <span v-html="title"></span>
                <span>{{pieValue}}亿元</span>
              </div>
              <!-- <div class="reback"><img src="../../assets/resale/return.png"></div> -->
              <pieEchart class="pie" :echartId="'pie'" :seriesData="pieData"></pieEchart>
            </div>
          </div>
          <!-- <div class="pie-detail-table">
            <el-row>
              <el-col :span="8" :offset="8">
                <div class="grid-content bg-purple">分行(不含运营)</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">运营</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">同比增额</div>
              </el-col>
              <el-col :span="8" :offset="2">
                <div class="grid-content bg-purple">5亿</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">30亿</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">同比增速</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img v-if="tbzs1>0" src="../../assets/analyse/redz.png" alt>
                  <img v-else-if="tbzs1<0" src="../../assets/analyse/blued.png" alt>
                  {{tbzs1}}%
                </div>
              </el-col>
              <el-col :span="10">
                <div class="grid-content bg-purple">
                  <img v-if="tbzs2>0" src="../../assets/analyse/redz.png" alt>
                  <img v-else-if="tbzs2<0" src="../../assets/analyse/blued.png" alt>
                  {{tbzs2}}%
                </div>
              </el-col>
            </el-row>
          </div> -->

          <!-- 表格 -->
          <div class="pie-detail-table">
						<table>
							<thead>
								<th width="140"></th><th>零售(不含运营)</th><th width="120">运营</th>
							</thead>
							<tbody>
								<tr>
									<td width="120">同比增额</td><td>5亿</td><td width="120">25亿</td>
								</tr>
								<tr>
									<td width="120">同比增额</td><td><em></em>10%</td><td width="120"><em></em>10%</td>
								</tr>
							</tbody>
						</table>
          </div>
        </div>
        <!-- 特管 -->
        <div class="bottom-item-box" v-if="radioIndex == '1'">
          <div class="pieEchartBox">
            <h3>各条线费用分部：</h3>
            <div class="echartDom">
              <div class="center-txt">
                <span v-html="title"></span>
                <span>{{pieValue}}亿元</span>
              </div>
              <!-- <div class="reback"><img src="../../assets/resale/return.png"></div> -->
              <pieEchart class="pie" :echartId="'pie'" :seriesData="pieData"></pieEchart>
            </div>
          </div>
          <div class="pie-detail-table">
            <table>
              <thead>
                <th width="140"></th>
                <th>零售(不含运营)</th>
                <th width="120">运营</th>
              </thead>
              <tbody>
                <tr>
                  <td width="120">同比增额</td>
                  <td>5亿</td>
                  <td width="120">25亿</td>
                </tr>
                <tr>
                  <td width="120">同比增额</td>
                  <td>
                    <em></em>10%
                  </td>
                  <td width="120">
                    <em></em>10%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 分行 -->
        <div class="bottom-item-box" v-if="radioIndex == '2'">
          <div class="pieEchartBox">
            <h3>各条线费用分部：</h3>
            <div class="echartDom">
              <div class="center-txt">
                <span v-html="title"></span>
                <span>{{pieValue}}亿元</span>
              </div>
              <!-- <div class="reback"><img src="../../assets/resale/return.png"></div> -->
              <pieEchart class="pie" :echartId="'pie'" :seriesData="pieData"></pieEchart>
            </div>
          </div>
          <div class="pie-detail-table">
            <table>
              <thead>
                <th width="140"></th>
                <th>零售(不含运营)</th>
                <th width="120">运营</th>
              </thead>
              <tbody>
                <tr>
                  <td width="120">同比增额</td>
                  <td>5亿</td>
                  <td width="120">25亿</td>
                </tr>
                <tr>
                  <td width="120">同比增额</td>
                  <td>
                    <em></em>10%
                  </td>
                  <td width="120">
                    <em></em>10%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="rightCon">
        <div class="top-item-box">
          <div class="box-title">
            <img class="title-img" src="../../assets/dbx.png">
            <span>营业费用结构</span>
            <my-select
              class="select_item"
              :value.sync="selectData.item3.value"
              :data="selectData.item3.list"
              theme="dark"
              :default-props="selectDefaultProps"
              @change="selectChange3"
            ></my-select>
          </div>
          <div class="radio-item">
            <el-radio-group v-model="radio1" class="origin-radio right-radio" @change="getRadio1">
              <el-radio :label="0">费用/占比</el-radio>
              <el-radio :label="1">增额/增速</el-radio>
              <el-radio :label="2">预算/执行进度</el-radio>
            </el-radio-group>
          </div>
          <div class="describ-box">
            <span>
              营业收入
              <em>
                1980
                <i>亿元</i>
              </em>
            </span>
            <span>
              成本收入比
              <em>
                20
                <i>%</i>
              </em>
            </span>
          </div>
          <div class="tree-dom">
            <tree :echartId="'tree'" @geParams="geParams"></tree>
          </div>
        </div>
        <div class="bottom-item-box">
          <div class="title">
            <span>总营业费用</span>
            <el-radio-group v-model="radio2" class="origin-radio right-radio" @change="getRadio2">
              <el-radio :label="0">年累计</el-radio>
              <el-radio :label="1">当月</el-radio>
            </el-radio-group>
          </div>
          <div class="echartDom">
            <lineBarEchart class="lineBar" :echartId="'lineBar'"></lineBarEchart>
          </div>
        </div>
      </div>
    </div>
    <!--弹出层-->
  </div>
</template>
<script type="text/javascript">
import FilterItem from "@/components/FilterItem";
import pieEchart from "../../components/analyse/pieEchart";
import lineBarEchart from "../../components/analyse/lineBarEchart";
import MySelect from "@/components/MySelect";
import MyProgress from "@/components/analyse/MyProgress";
import tree from "../../components/analyse/tree";
export default {
  components: {
    FilterItem,
    pieEchart,
    MySelect,
    lineBarEchart,
    MyProgress,
    tree
  },
  data() {
    return {
      //饼图下面同比增速
      tbzs1: 10,
	    tbzs2: 13,
	  //头部导航数据
	  radioList: ["同业", "特管", "分行"],
	  //头部导航索引
	  radioIndex: 0,
	  //头部二级费用标题索引
	  titleIndex: 0,
	  //日期
	  timeValue: "",
	  //二级费用标题
	  secondTitle: ["总费用", "人工费", "业管费", "固定费"],
	  // 同业 特管 鼠标移入是否显示分布数量
	  PopFlag1: false,
	  //没有看到应用
	  PopFlag2: false,
	  //分行 一级分行数量是否显示数量
	  PopFlag3: false,
	   //分行 二级分行数量是否显示数量
	  PopFlag4: false,
	  //分行链接
	  //没有看到应用
	  PopFlag5: false,
	  //路由来源
	  fromRoute: "",
	  //饼图数据
      pieData: [
        { value: 337, name: "分行（不含运营）" },
        { value: 310, name: "运营" }
      ],
      selectData: {//遍历的option数据
        // 战区
        item1: {
          value: "战区",
          list: []
        },
        // 机构
        item2: {
          value: "机构",
          list: []
        },
        item3: {
          value: "类别",
          list: []
        },
        item4: {
          value: "部门",
          list: []
        },
        item5: {
          value: "全部",
          list: []
        },
        item6: {
          value: "全部",
          list: []
        }
	  },
	  //费用占比 等单选
	  radio1: 0,
	  //总营业费用 等单选
      radio2: 0,
      title: "分行<br>(含运营)",
      pieValue: 189, //环形图中间的值,
      // 弹出层
	  // dialogTableVisible:false,
	  //多选框
      selectDefaultProps: {
        label: "name",
        value: "id"
      },
     
    };
  },
  watch: {
    $route(to, from) {
      this.getStatus(to.path);
    }
  },
  mounted() {
   
  },
  methods: {
	  //树形图形
    geParams(value) {
      console.log(value);//展现层级索引
      this.titleIndex = value;
    },
    //地址栏url改变时，调用头部方法
    getStatus(fullRoute) {
      let routerArr = fullRoute.split("/");
      let toRoute = routerArr[1];
      if (this.fromRoute && toRoute !== this.fromRoute) {
        this.getRoute();
       
      }
    },
    //根据路由判断当前的头部
    getRoute() {
      let fullRoute = this.$route.path;
      let routerArr = fullRoute.split("/");
      let lastRoute = routerArr[1];
      this.fromRoute = lastRoute; //赋值路由来源
      this.radioIndex = lastRoute.substring(lastRoute.length - 1) - 1;
     
	},
	//日期改变事件
	getDate(value) {},
	//头部一级标题改变事件 传递索引
    radioClick(index) {
      this.radioIndex = index;
    //   if (index == 3) {
    //     this.$router.push({ path: "resalePage" + (index + 1), query: {} });
    //   }
	},
	//下拉框战区改变事件 
	selectChange1() {},
	//下拉框机构改变事件
	selectChange2() {},
	//下拉框费用费分析科目
    selectChange3() {},
	//二级费用科目头部标题改变事件
    changeSubtitle(index) {
		//头部索引
      this.titleIndex = index;
	},
	//费用占比 等单选改变事件
	getRadio1(index) {},
	//总营业费用 等单选改变事件
	getRadio2(index) {},
	//跳转至大对公概览
	toAllbank(){
      this.$router.push({ path: "allBankPage2", query: {} });
	},
	//分行kpi得分跳转 新页面打开【业绩看板-KPI（机构）】页面
	linkkpi(){
     this.$router.push({path:'/two',query: {}})
	},
	//分行 营业收入 跳转新页面打开到【业绩看板-非零（收入）】页面
	income(){
     this.$router.push({path:'/three',query: {}})
	},
	//分行 非息收入 新页面打开到【业绩看板-非零（收入）】页面
    nointerest(){
      this.$router.push({path:'/three',query: {}})
	},
	//分行 存款日均（新页面打开到【业绩看板-非零（规模1）】页面
    deposit(){
      this.$router.push({path:'/three',query: {}})
	},
	//分行 贷款日均（新页面打开到【业绩看板-非零（规模3）】页面
	loan(){
      this.$router.push({path:'/three',query: {}})
	}
  }
};
</script>
<style lang="less" scoped>

/deep/.el-table td,
/deep/.el-table th {
  border: none;
  text-align: center;
  font-size:1.2rem;
}
/*/deep/.el-table th:nth-of-type(1) .cell{
    	padding-left: 22px;
    	text-align: left;
    }
   /deep/.el-table tr td:nth-of-type(1) .cell span{
	   	display: block;
	    width: 94px;
	    text-align: left;
	    margin-left: 10px;
   }*/
/deep/.el-table th,
/deep/.el-table tr {
  background: #303e49;
}
/deep/.el-table--border,
/deep/.el-table--group {
  border: none;
}
/deep/.el-table--border td,
/deep/.el-table--border th,
/deep/.el-table__body-wrapper
  /deep/.el-table--border.is-scrolling-left
  ~ .el-table__fixed {
  border-right: none;
}
/deep/.el-table--border::after,
/deep/.el-table--group::after,
/deep/.el-table::before {
  background: none;
}
/deep/.el-table thead {
  color: #fff;
}
/deep/.el-table {
  color: #fff;
  background: #303e49;
}
/deep/.el-table__expand-icon {
  color: #fff;
}
/deep/.el-table tbody tr:hover > td {
  background: none;
}
/deep/.el-table th.is-leaf {
  border-bottom: 1px solid #fff;
}
/deep/.el-table tr td:nth-of-type(1) {
  border-right: 1px solid #fff;
}
/deep/.my-select-box label {
  color: #fff;
}
/deep/.el-table__body-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
}
/*/deep/.el-table [class*=el-table__row--level] .el-table__expand-icon{
		float: right;
	}*/
/deep/.el-button {
  padding: 7px 20px;
  margin-left: 40px;
  background-color: rgba(255, 135, 55, 1);
  border: 1px solid rgba(255, 135, 55, 1);
}

.bg {
  width: 100%;
  height: 100%;
  background: url(/static/img/home_bg.3c6d032.jpg) no-repeat center center;
  overflow: hidden; //超出隐藏
  /deep/.el-select {
    width: 123px;
  }
  .spe2 {
    bottom: 50% !important;
    right: 9% !important;
  }
  .spe1 {
    bottom: 51% !important;
  }
  .header {
    position: relative;
    height: 9.63vh;
    width: 100vw;
    font-weight: normal;
    color: #fff;
    .select-area {
      display: flex;
      position: absolute;
      right: 1%;
      bottom: 10px;
      z-index: 999;
      .my-select-box {
        width: 180px;
      }
    }
    .header-title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2.8rem;
      line-height: 9.63vh;
    }
    .header-time {
      position: absolute;
      float: right;
      bottom: 10%;
      right: 6%;
      width: auto;
      z-index: 999;
    }
    .home {
      // width: 6vw;//修改
      position: absolute;
      right: 1%;
      bottom: 10%;
      z-index: 999;
    cursor: pointer;
    //修改
	  color:rgba(255, 142, 68, 1);
	  font-size: 1.4rem;
      .icon {
        display: inline-block;
        width: 2.2rem;
        height: 2.2rem;
        background: url(../../assets/resale/home_bg.png) no-repeat;
        background-size: 100% 100%;
        vertical-align: -0.7vh;
      }
    }
    .menuBar {
      position: relative;
      top: 59%;
      left: 0.73%;
      height: 39.5%;
      .header-radio {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 22.5%;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background-color: #999999;
          height: 100%;
          width: 33%;
          border-top-right-radius: 1rem;
          border-top-left-radius: 1rem;
          font-size: 1.4rem;
        }
        .checked {
          background-color: rgb(225, 102, 0) !important;
        }
      }
      .second-title {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 19.8%;//修改
        width: 22%;
        span {
          display: block;
          width: 17%;
          height: 28%;
          background: linear-gradient(
            360deg,
            rgba(204, 204, 204, 0.6) 0%,
            rgba(0, 39, 79, 0.6) 52%,
            rgba(204, 204, 204, 0.6) 100%
          );
          text-align: center;
          cursor: pointer;
          margin-right: 1%;
        }
        .actived {
          background: rgba(255, 102, 0, 1);
        }
      }
    }
  }
  .content {
    // height: calc(100% - 11vh);//修改
   	height:88%; 
    margin: 0 0.73vw 1.3vh;
    display: flex;
    .leftCon {
      width: 24%;
      height: 100%;
      margin-right: 0.5vw;
      background: rgba(37, 54, 63, 0.8);
      .detailBox {
		margin: 3.5vh 2vw 5vh;
		//得分区域样式
        .detail-tit {
		  font-size: 1.6rem;
		  .tit-score{
		   .el-col-24{
			   display: flex;
               justify-content: center;
               align-items: center;
		   }
		  }
		  .tit-des{

		  }
		  .num{
		  font-size: 2rem;
		  color:rgba(255,102,0,1);
		  margin-left: .4rem;
		  }
        }
        p {
          font-size: 1.4rem;
          color: #fff;
          margin-bottom: 1vh;
          em {
            display: inline-block;
			      width: 120px;
			     // width: 108px;//修改
            font-style: normal;
          }
          span {
            position: relative;
            display: inline-block;
            cursor: pointer;
            //修改一级分行数量与10家间距
            // margin-left: 16px;
            // min-width: 100px;
            .branchPop {
             	width:102px;	//修改
              background: #000000;
              border-radius: 5px;
              padding: 5px 5px;
              position: absolute;
              top: 0;
              left: 62px;
              max-height: 285px;
              overflow: auto;
              z-index:999;
              li {
                font-size: 1.2rem;
                margin: 5px 0;
              }
            }
            .branchPop::-webkit-scrollbar {
              /*滚动条整体样式*/
              width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
              height: 18px;
            }
            .branchPop::-webkit-scrollbar-thumb {
              /*滚动条里面小方块*/
              -webkit-box-shadow: inset 0 0 0px rgb(79, 102, 117);
              background: rgb(79, 102, 117);
            }
            .branchPop::-webkit-scrollbar-track {
              /*滚动条里面轨道*/
              -webkit-box-shadow: inset 0 0 0px rgb(59, 76, 88);
              border-radius: 0;
              background: rgb(59, 76, 88);
            }
          }
    }
    //修改分行得分距离
		p:nth-child(1){
			margin-bottom: 3vh !important;
		}
		p:nth-child(n+1){
			margin-bottom: .2vh;
		}
      }
      .table-contract {
        table {
          width: 100%;
          height: 100%;
          color: #fff;
          border-collapse: collapse;
          border-spacing: 0;
          text-align: center;
          th {
            border-bottom: 1px solid #fff;
            font-size: 1.4rem;
            font-weight: normal;
          }
          tr {
            td {
              font-size: 1.4rem;
            }
            td:nth-of-type(1) {
              border-right: 1px solid #fff;
            }
          }
        }
        .bodyTable {
          height: 9vh;
          overflow: auto;
        }
      }
      .linebg {
        width: 260px;
        height: 1px;
        background: linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 102, 0, 1) 51%,
          rgba(255, 255, 255, 0) 100%
        );
        margin: 3vh auto 0;//修改过
      }
      /**左下部分**/
      .bottom-item-box {
        width: 100%;
        height: 30%;
        .pieEchartBox {
          width: 100%;
          height: 100%;
          h3 {
            color: #fff;
            margin: 2.5vh 1vw 0;//修改
          }
          .echartDom {
            width: 100%;
            height: 85%;
            position: relative;
            .center-txt {
              color: #fff;
              position: absolute;
              font-size: 1.2rem;
              display: inline;
              text-align: center;
              width: 100px;
              top: 38%;
              left: 29%;
              z-index: 100;
              span {
                display: block;
              }
            }
          }
        }
        .pie-detail-table {
          margin: 0 1vw;
          table {
            width: 100%;
            height: 100%;
            color: #fff;
            border-collapse: collapse;
            border-spacing: 0;
            thead {
              height: 26px;
              line-height: 26px;
              background: rgba(58, 83, 98, 0.6);
            }
            tbody {
              tr {
                td {
                  text-align: center;
                  height: 26px;
                  line-height: 26px;
                }
                td:nth-of-type(1) {
                  padding: 0 0.5vw;
                }
                td:nth-of-type(2) {
                  text-align: right;
                  padding: 0 5vw;
                }
                td:nth-of-type(3) {
                  padding: 0 0.5vw;
                }
              }
              tr:nth-of-type(2) {
                background: rgba(58, 83, 98, 0.6);
              }
            }
          }
        }
      }
    }
    .rightCon {
      position: relative;
      width: 76%;
      height: 100%;
      background: rgba(37, 54, 63, 0.8);
      .radio-item {
        position: absolute;
        right: 2vw;
        top: 3vh;
      }
      .describ-box {
        display: flex;
        margin: 2.8vh 0 0 2vw;
        span {
          color: #fff;
          font-size: 1.6rem;
          margin-right: 40px;
          em {
            font-style: normal;
            font-size: 3.6rem;
            color: rgba(255, 102, 0, 1);
            i {
              font-style: normal;
              font-size: 1.6rem;
            }
          }
        }
      }
      .top-item-box {
        width: 100%;
        height: 60%;
        .tree-dom {
          width: 100%;
          height: 72%;
          .tree {
            width: 100%;
            height: 100%;
          }
        }
      }
      .bottom-item-box {
        width: 100%;
        height: 38%;
        .title {
          position: absolute;
          width: auto;
          left: 3%;
          font-size: 1.6rem;
          color: #fff;
          z-index: 999;
        }
        .echartDom {
          width: 100%;
          height: 100%;
          .lineBar {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
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
      }
      span {
        font-size: 2rem;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
  .subTitle {
    height: 2.8rem;
    line-height: 1.8rem;
    padding-top: 10px;
  }
  .subTitle img {
    width: 3.2rem;
    height: 1.8rem;
  }
  .subTitle span {
    float: left;
    display: inline-block;
    color: #fff;
    font-size: 1.5rem;
    margin-left: 10px;
  }
  /**弹出层**/
  /deep/.el-dialog {
    background: rgb(48, 62, 73);
    width: 55%;
  }
  /deep/.el-dialog__body {
    padding: 0 20px 30px;
  }
  /deep/my-select-box label {
    color: #fff;
  }
  .my-select-box {
    float: left;
    margin-left: 15px;
  }
  .reback {
    position: absolute;
    right: 15%;
    top: 5%;
    cursor: pointer;
  }
  .pie-detail-table table td,.pie-detail-table table th{
		font-size:1.2rem;
	}
}
//下面的
@media screen and (min-width: 1360px) and (max-width: 1366px) {
  	.bg .content .leftCon .detailBox{
		    margin: 2vh 2vw 3vh;
	}
	.bg .content .leftCon .bottom-item-box{
		height:27%;
	}
	.bg .content .leftCon .bottom-item-box .pieEchartBox .echartDom .center-txt{
	    font-size: 1rem;
	    left: 24%;
	}
	.bg .header{
		height:11vh;
	}
	.bg .header .select-area{
		bottom:0;
	}
	.bg /deep/.el-dialog{
		width:61%;
	}
  
}
</style>