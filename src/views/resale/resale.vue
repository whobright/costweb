<template>
	<div class="bg">
		<div class="header">
			<span class="header-title">机构费用投产分析</span>
			<Filter-item
		      class="header-time dateSelect "
		      :class="{'spe2':radioIndex == '2'}"
		      :date.sync="timeValue"
		      date-type="month"
		      :show-item="{date:true,unit:false}"
		      @dateChange="getDate"
		    ></Filter-item>
		    <div class="select-area" v-if="radioIndex == '2'">
		        <my-select class="select_item"
		          :value.sync="selectData.item1.value"
		          label="战区："
		          :data="selectData.item1.list"
		          theme="dark"
		          :default-props="selectDefaultProps"
		          @change="selectChange1"></my-select>
		        <my-select class="select_item"
		          :value.sync="selectData.item2.value"
		          label="机构："
		          :data="selectData.item2.list"
		          theme="dark"
		          :default-props="selectDefaultProps"
		          @change="selectChange2"></my-select>
		    </div>
		    <div class="home" :class="{'spe1':radioIndex == '2'}"><i class="icon"></i>零售概览</div>
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
			    	<span v-for="(item,index) in secondTitle" :key="index" :class="{actived:index == titleIndex}" @click="changeSubtitle(index)">{{item}}</span>
			    </div>
			</div>
		</div>
		<div class="content">
			<div class="leftCon">
				<div class="top-item-box">
					<div class="box-title">
				       <img class="title-img" src="../../assets/dbx.png">
				       <span>营业费用结构</span>
				    </div>
				    <div class="detailBox">
				    	<p><em>成立时间：</em><span>2013年10月1日</span></p>
				    	<p><em>分部数量：</em>
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
				    	<p v-if="radioIndex == '2'"><em>二级分行：</em>
				    		<span @mouseenter="PopFlag2 = true" @mouseleave="PopFlag2 = false">
				    			10家
				    			<ul class="branchPop" v-show="PopFlag2">
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
				    	<p v-if="radioIndex == '2'"><em>社区支行：</em>
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
				    	<p v-if="radioIndex == '2'"><em>非社区支行：</em>
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
					    		<thead><th width="100"></th><th width="80">年初 <br>(人)</th><th>期末 <br>(人)</th><th>平均<br> (人)</th><th>占比<br> (%)</th></thead>
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
				<div class="bottom-item-box" v-if="radioIndex == '2'">
					<div class="pieEchartBox">
						<h3>各条线费用分部：</h3>
						<div class="echartDom">
							<div class="center-txt">
					          <span v-html="title"></span>
					          <span>{{pieValue}}亿元</span>
					        </div>
					        <div class="reback"><img src="../../assets/resale/return.png"></div>
							<pieEchart class="pie" :echartId="'pie'" :seriesData="pieData"></pieEchart>
						</div>
					</div>
					<div class="pie-detail-table">
						<table>
							<thead>
								<th width="120"></th><th td width="150">零售(不含运营)</th><th width="120">运营</th>
							</thead>
							<tbody>
								<tr>
									<td width="120">同比增额</td><td td width="150">5亿</td><td width="120">25亿</td>
								</tr>
								<tr>
									<td width="120">同比增额</td><td td width="150"><div class="tempBox"><img src="../../assets/resale/arrow_down.png">10%</div></td><td width="120"><div class="tempBox"><img src="../../assets/resale/arrow_down.png">10%</div></td>
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
				       <my-select class="select_item"
				          :value.sync="selectData.item3.value"
				          :data="selectData.item3.list"
				          theme="dark"
				          :default-props="selectDefaultProps"
				          @change="selectChange3"></my-select>
				    </div>
				    <div class="radio-item">
					    <el-radio-group v-model="radio2" class="origin-radio right-radio" @change="getRadio1">
				            <el-radio :label="0">费用/占比</el-radio>
				            <el-radio :label="1">增额/增速</el-radio>
				            <el-radio :label="2">预算/执行进度</el-radio>
				        </el-radio-group>
				    </div>
				    <div class="describ-box">
				    	<span>营业收入 <em>1980<i>亿元</i></em></span>
				    	<span>成本收入比 <em>20<i>%</i></em></span>
				    </div>
				    <div class="tree-dom">
				    	<tree :echartId="'tree'" @geParams="geParams"></tree>
				    </div>
				</div>
				<div class="bottom-item-box">
					<div class="title">
			          <span>总营业费用</span>
			          <el-radio-group v-model="radio3" class="origin-radio right-radio" @change="getRadio2">
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
		<el-dialog :visible.sync="dialogTableVisible1" class="dialog1">
			<div class="popWrap">
		  		<div class="subTitle">
		  			<span><img src="../../assets/icon_sbuTitle.png"> </span>
	          		<span class="subTxt">业务宣传费预算执行</span>
	          		<my-select class="select_item"
	          		  label="类型："
			          :value.sync="selectData.item5.value"
			          :data="selectData.item5.list"
			          theme="dark"
			          :default-props="selectDefaultProps"
			          @change="selectChange5"></my-select>
	          		<my-select class="select_item"
	          		  label="部门："
			          :value.sync="selectData.item4.value"
			          :data="selectData.item4.list"
			          theme="dark"
			          :default-props="selectDefaultProps"
			          @change="selectChange4"></my-select>
			        <my-select class="select_item"
	          		  label="供应商："
			          :value.sync="selectData.item6.value"
			          :data="selectData.item6.list"
			          theme="dark"
			          :default-props="selectDefaultProps"
			          @change="selectChange6"></my-select>
			          <el-button type="warning">导出</el-button>
		  			
		  		</div>
		  		
		  		<div class="elTableDom elTableDom1">
		  			<template>
					    <el-table
					            :data="tableData"
					            style="width: 100%;margin-bottom: 20px;"
					            height=300
					            row-key="id">
					        <el-table-column
					                prop="count"
					                label="项目"
					                width="90">
					                <template slot-scope="scope">
					                	<span>{{scope.row.count}}</span>
					                </template>
					        </el-table-column>
					        <el-table-column
					                prop="name"
					                label="类型"
					                width="90">
					        </el-table-column>
					        <el-table-column
					                prop="name"
					                label="部门"
					                width="90">
					        </el-table-column>
					        <el-table-column
					                prop="name"
					                label="供应商"
					                width="90">
					        </el-table-column>
					        <el-table-column
					                prop="ysCount"
					                width="70"
					                label="预算">
					        </el-table-column>
					        <el-table-column
					                prop="sjCount"
					                width="70"
					                label="实际">
					        </el-table-column>
					        <el-table-column
					                prop="zb"
					                width="70"
					                label="占比">
					        </el-table-column>
					        <el-table-column
					                prop="zxl"
					                label="执行率">
					                <template slot-scope="scope">
					                	<!-- <span>{{scope.row.zxl}}</span> -->
					                	<div><my-progress :nowData="scope.row.nowData" :max="scope.row.max" v-if="tableData"></my-progress></div>
					                </template>
					        </el-table-column>
					    </el-table>
					</template>
		  		</div>
			</div>
		</el-dialog>
		<el-dialog :visible.sync="dialogTableVisible2" class="dialog2">
			<div class="popWrap">
		  		<div class="subTitle">
		  			<span><img src="../../assets/icon_sbuTitle.png"> </span>
	          		<span class="subTxt">业务宣传费预算执行</span>
	          		<my-select class="select_item"
	          		  label="部门："
			          :value.sync="selectData.item4.value"
			          :data="selectData.item4.list"
			          theme="dark"
			          :default-props="selectDefaultProps"
			          @change="selectChange4"></my-select>
			          <div class="reback"><img src="../../assets/resale/return.png"></div>
		  		</div>
		  		<div class="showTableBox">
			  		<div class="elTableDom elTableDom2">
			  			<template>
						    <el-table
						            :data="tableData"
						            style="width: 100%;margin-bottom: 20px;"
						            height=300
						            row-key="id">
						        <el-table-column
						                prop="count"
						                label="项目"
						                width="90">
						                <template slot-scope="scope">
						                	<span>{{scope.row.count}}</span>
						                </template>
						        </el-table-column>
						        <el-table-column
						                prop="name"
						                label="部门"
						                width="90">
						        </el-table-column>
						        </el-table-column>
						        <el-table-column
						                prop="ysCount"
						                width="70"
						                label="预算">
						        </el-table-column>
						        <el-table-column
						                prop="sjCount"
						                width="70"
						                label="实际">
						        </el-table-column>
						        <el-table-column
						                prop="zb"
						                width="70"
						                label="占比">
						        </el-table-column>
						        <el-table-column
						                prop="zxl"
						                label="执行率">
						                <template slot-scope="scope">
						                	<!-- <span>{{scope.row.zxl}}</span> -->
						                	<div><my-progress :nowData="scope.row.nowData" :max="scope.row.max" v-if="tableData"></my-progress></div>
						                </template>
						        </el-table-column>
						    </el-table>
						</template>
			  		</div>
			  		<div class="elTableDom3">
			  			<template>
						    <el-table
						            :data="tableData"
						            style="width: 100%;margin-bottom: 20px;"
						            height=300
						            row-key="id">
						        <el-table-column
						                prop="ysCount"
						                label="机构"
						                width="80">
						        </el-table-column>
						        <el-table-column
						                prop="name"
						                label="金额"
						                width="80">
						        </el-table-column>
						        </el-table-column>
						        <el-table-column
						                prop="ysCount"
						                label="占比">
						         </el-table-column>
						    </el-table>
						</template>
			  		</div>
			  	</div>
			</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
import FilterItem from "@/components/FilterItem";
import pieEchart from "@/components/resale/pieEchart";
import lineBarEchart from "@/components/resale/lineBarEchart";
import MySelect from "@/components/MySelect";
import MyProgress from "@/components/resale/MyProgress";
import tree from "@/components/resale/tree";
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
    	radioList: ['信用卡', '汽融', '分行','总行'],
    	radioIndex:0,
    	titleIndex:0,
    	timeValue: '',
    	secondTitle:['总费用','人工费','业管费','固定费'],
    	PopFlag1:false,
    	PopFlag2:false,
    	PopFlag3:false,
    	PopFlag4:false,
    	fromRoute:'',
    	pieData:[
	        { value: 337, name: "分行（不含运营）" },
	        { value: 310, name: "运营" }
	    ],
	    selectData: {
	        // 战区
	        item1: {
	          value: '战区',
	          list: []
	        },
	        // 机构
	        item2: {
	          value: '机构',
	          list: []
	        },
	        item3: {
	          value: '类别',
	          list: []
	        },
	        item4: {
	          value: '部门',
	          list: []
	        },
	        item5: {
	          value: '全部',
	          list: []
	        },
	        item6: {
	          value: '全部',
	          list: []
	        }
	    },
	    radio2:0,
	    radio3:0,
	    title: "分行<br>(含运营)",
	    pieValue: 189,//环形图中间的值,
	    dialogTableVisible1:false,
	    dialogTableVisible2:false,
	    selectDefaultProps: {
	        label: 'name',
	        value: 'id'
	    },
	    tableData:[]
	   
	}
  },
  watch: {
    '$route' (to, from) {
      this.getStatus(to.path);
    }
  },
  mounted(){
  	setTimeout(()=>{
  		 this.tableData = [{
                    id: 1,
                    count: '合计',
                    name: '-',
                    ysCount: '30亿',
                    sjCount:'26亿',
                    zb:'30%',
                    zxl:'20%',
                    nowData:120,
                    max:120
                }, {
                    id: 2,
                    count: '项目1',
                    name: '公司银行部',
                    ysCount: '30亿',
                    sjCount:'26亿',
                    zb:'30%',
                    zxl:'20%',
                    nowData:100,
                    max:120
                }, {
                    id: 3,
                    count: '项目2',
                    name: '总拓部',
                    ysCount: '30亿',
                    sjCount:'26亿',
                    zb:'30%',
                    zxl:'20%',
                    nowData:80,
                    max:120,
                    children: [{
                        id: 21,
	                    count: '项目2-1',
	                    name: '总拓部',
	                    ysCount: '30亿',
	                    sjCount:'26亿',
	                    zb:'30%',
	                    zxl:'20%',
	                    nowData:80,
	                    max:120
                    }, {
                        id: 22,
	                    count: '项目2-2',
	                    name: '总拓部',
	                    ysCount: '30亿',
	                    sjCount:'26亿',
	                    zb:'30%',
	                    zxl:'20%',
	                    nowData:80,
	                    max:120
                    }]
                }, {
                    id: 4,
                    count: '项目3',
                    name: '总拓部',
                    ysCount: '30亿',
                    sjCount:'26亿',
                    zb:'30%',
                    zxl:'20%',
                    nowData:80,
                    max:120
                },{
                    id: 5,
                    count: '项目4',
                    name: '总拓部',
                    ysCount: '30亿',
                    sjCount:'26亿',
                    zb:'30%',
                    zxl:'20%',
                    nowData:80,
                    max:120
                },,{
                    id: 6,
                    count: '项目5',
                    name: '总拓部',
                    ysCount: '30亿',
                    sjCount:'26亿',
                    zb:'30%',
                    zxl:'20%',
                    nowData:80,
                    max:120
                }]
  	})
  	//this.getRoute();
  },
  methods: {
  	geParams(value){
  		console.log(value);
  		this.titleIndex = value;	
  	},
  	//地址栏url改变时，调用头部方法
    getStatus (fullRoute) {
      let routerArr = fullRoute.split('/');
      let toRoute = routerArr[1];
      if (this.fromRoute && toRoute !== this.fromRoute) {
        this.getRoute();
      }
    },
    //根据路由判断当前的头部
    getRoute () {
      let fullRoute = this.$route.path;
      let routerArr = fullRoute.split('/');
      let lastRoute = routerArr[1];
      this.fromRoute = lastRoute; //赋值路由来源
      this.radioIndex = lastRoute.substring(lastRoute.length - 1) - 1;
    },
  	getDate(value) {

    },
    radioClick(index) {
      this.radioIndex = index;
      if(index == 3){
      	this.$router.push({ path: "resalePage" + (index + 1), query: {} });
      }
      
    },
    selectChange1(){

    },
    selectChange2(){

    },
    selectChange3(){

    },
    selectChange4(){

    },
    selectChange5(){

    },
    selectChange6(){

    },
    changeSubtitle(index){
    	this.titleIndex = index;
    },
    getRadio1(index){

    },
    getRadio2(index){

    }
  }
}
</script>
<style lang="less" scoped>
	.elTableDom1{
		width:100%;
	}
	.elTableDom2{
		width:68%;
		float:left;
	}
	.elTableDom3{
		width:30%;
		float:left;
		margin-left:10px;
	}
	/deep/.el-table td,/deep/.el-table th{
    	border:none;
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
    /deep/.el-table th,/deep/.el-table tr{
    	background:#303e49;
    }
    /deep/.el-table--border,/deep/.el-table--group{
    	border:none;
    }
    /deep/.el-table--border td, /deep/.el-table--border th, /deep/.el-table__body-wrapper /deep/.el-table--border.is-scrolling-left~.el-table__fixed{
    	border-right: none;
    }
    /deep/.el-table--border::after,/deep/.el-table--group::after,/deep/.el-table::before{
    	background:none;
    }
    /deep/.el-table thead{
    	color:#fff;
    }
    /deep/.el-table{
    	color:#fff;
    	background:#303e49;
    }
    /deep/.el-table__expand-icon{
    	color:#fff;
    }
    /deep/.el-table tbody tr:hover>td{
		background: none;
	}
	/deep/.el-table th.is-leaf{
		border-bottom:1px  solid #fff;
	}
	/deep/.el-table tr td:nth-of-type(1){
		border-right:1px solid #fff;
	}
	/deep/.my-select-box label{
		color: #fff;
	}
	/deep/.el-table__body-wrapper{
		overflow-y: auto;
		overflow-x:hidden;
	}
	/*/deep/.el-table [class*=el-table__row--level] .el-table__expand-icon{
		float: right;
	}*/
	/deep/.el-button{
		padding:7px 20px;
		margin-left:40px;
		background-color: rgba(255, 135, 55, 1);
		border:1px solid rgba(255, 135, 55, 1);
	}
	
.bg{
	width: 100%;
    height: 100%;
    background: url(/static/img/home_bg.3c6d032.jpg) no-repeat center center;
    overflow: hidden;
    .popWrap .reback{
		right: 6%;
    	top: 10%;
	}
	.popWrap .subTitle img{
		width: 2rem;
    	height: 1.5rem;
	}
    /deep/.el-select{
    	width:123px;
    }
    .spe2{
    	bottom:50%!important;
    	right:9%!important;
    }
    .spe1{
    	bottom:51%!important;
    }
    .header{
      position: relative;
	  height: 9.63vh;
	  width: 100vw;
	  font-weight: normal;
	  color: #fff;
	  .select-area{
	  	display: flex;
	  	position: absolute;
	  	right:1%;
	  	bottom:10px;
	  	z-index:999;
	  	.my-select-box{
	  		width:180px;
	  		margin-left:0;
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
	    z-index:999;
	  }
	  .home{
	  	width:6vw;
	  	position: absolute;
	  	right:0%;
	  	bottom:10%;
	  	z-index:999;
	  	cursor: pointer;
	  	.icon{
	  		display: inline-block;
	  		width:2.2rem;
	  		height:2.2rem;
		  	background:url(../../assets/resale/home_bg.png) no-repeat;
		  	background-size:100% 100%;
		  	vertical-align:-.7vh;
		 }
	  }
	  .menuBar{
	  		position: relative;
	  		top: 59%;
		    left: 0.73%;
		    height: 39.5%;
		  .header-radio {
		    display: flex;
		    justify-content: space-between;
		    height: 100%;
		    width: 22.5%;
		    li{
			    display: flex;
			    justify-content: center;
			    align-items: center;
			    cursor: pointer;
			    background-color: #999999;
			    height: 100%;
			    width: 24%;
			    border-top-right-radius: 1rem;
			    border-top-left-radius: 1rem;
			    font-size: 1.4rem;
			}
			.checked {
			  background-color: rgb(225, 102, 0) !important;
			}
		  }
		  .second-title{
		  	display: flex;
		  	justify-content: center;
			align-items: center;
			position: absolute;
			bottom:0;
			left:21.8%;
			width:22%;
			span{
				display: block;
				width:17%;
				height: 28%;
				background:linear-gradient(360deg,rgba(204,204,204,0.6) 0%,rgba(0,39,79,0.6) 52%,rgba(204,204,204,0.6) 100%);
				text-align: center;
				cursor: pointer;
				margin-right:1%;
				font-size:1.2rem;
			}
			.actived{
				background: rgba(255, 102, 0, 1);
			}
		  }
		}
    }
    .content{
    	/*height:calc(100% - 11vh);*/
    	height:88%;
    	margin:0 0.73vw 1.3vh;
    	display: flex;
    	.leftCon{
    		width:24%;
    		height:100%;
    		margin-right:.5vw;
    		background:rgba(37, 54, 63, 0.8);
    		.detailBox{
    			margin:3.5vh 2vw 5vh;
    			p{
    				font-size:1.4rem;
    				color:#fff;
    				margin-bottom: 1vh;
    				em{
    					display: inline-block;
    					width:120px;
    					font-style: normal;
    				}
    				span{
    					position: relative;
    					display: inline-block;
    					margin-left:16px;
    					cursor: pointer;
    					min-width: 100px;
					    .branchPop{
					    	width:102px;
							background: #000000;
							border-radius: 5px;
							padding:5px 5px;
							position: absolute;
							top:0;
							left:62px;
							max-height: 285px;
							overflow: auto;
							z-index:999;
							li{
								font-size:1.2rem;
								margin:5px 0;
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
    		}
    		.table-contract{
    			table{
    				width:100%;
    				height:100%;
    				color:#fff;
    				border-collapse: collapse;
    				border-spacing: 0;
    				text-align: center;
    				th{
    					border-bottom: 1px solid #fff;
    					font-size:1.4rem;
    					font-weight: normal;
    				}
    				tr{
    					td{
    						font-size:1.4rem;
    					}
    					td:nth-of-type(1){
    						border-right: 1px solid #fff;
    					};
    				}
    			}
    			.bodyTable{
    				height:9vh;
    				overflow: auto;
    			}
    		}
    		.linebg{
    			width:260px;
				height:1px;
				background:linear-gradient(270deg,rgba(255,255,255,0) 0%,rgba(255,102,0,1) 51%,rgba(255,255,255,0) 100%);
				margin:3vh auto 0;
			}
    		/**左下部分**/
    		.bottom-item-box{
    			width:100%;
    			height:30%;
    			.pieEchartBox{
    				width:100%;
    				height:100%;
    				h3{
    					color:#fff;
    					margin: 2.5vh 1vw 0;
    				}
    				.echartDom{
    					width:100%;
    					height:85%;
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
    			.pie-detail-table{
    				margin: 0 1vw;
    				table{
    					width:100%;
    					height:100%;
    					color:#FFF;
    					border-collapse: collapse;
    					border-spacing: 0;
    					thead{
    						height:26px;
    						line-height: 26px;
    						background:rgba(58, 83, 98, 0.6);
    					}
    					tbody{
    						tr{
	    						td{
	    							text-align: center;
	    							height:26px;
	    							line-height: 26px;
	    							.tempBox{
		    							position: relative;
										img{
											vertical-align:-2px;
											margin: 0 5px;
										}
    								}
	    						}
	    						td:nth-of-type(1){
	    							padding:0 .5vw;

	    						}
	    						td:nth-of-type(2){
	    							text-align: right;
	    							/*padding:0 5vw;*/
									padding-right:2vw;
	    						}
	    						td:nth-of-type(3){
									text-align: right;
    								padding-right: 3vw;
	    						}
	    					}
	    					tr:nth-of-type(2){
	    						background:rgba(58, 83, 98, 0.6);
	    					}
    					}
    				}
    			}
    		}
    	}
    	.rightCon{
    		position: relative;
    		width:76%;
    		height:100%;
    		background:rgba(37, 54, 63, 0.8);
    		.radio-item{
    			position: absolute;
    			right: 2vw;
    			top:3vh;
    		}
    		.describ-box{
    			display: flex;
    			margin:2.8vh 0 0 2vw;
    			span{
    				color:#fff;
    				font-size:1.6rem;
    				margin-right:40px;
    				em{
    					font-style: normal;
    					font-size:3.6rem;
    					color: rgba(255, 102, 0, 1);
    					i{
    						font-style: normal;
    						font-size:1.6rem;
    					}
    				}
    			}
    			
    		}
    		.top-item-box{
    			width:100%;
    			height:60%;
    			.tree-dom{
    				width:100%;
    				height:72%;
    				.tree{
    					width:100%;
    					height:100%;
    				}
    			}
    		}
    		.bottom-item-box{
    			width:100%;
    			height: 38%;
    			.title{
    				position: absolute;
				    width: auto;
				    left: 3%;
				    font-size: 1.6rem;
				    color: #fff;
				    z-index: 999;
    			}
    			.echartDom{
    				width:100%;
    				height:100%;
    				.lineBar{
    					width:100%;
    					height:100%;
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
		    margin-left:10px;
		  }
		}

    }
    .subTitle{
		height:2.8rem;
		line-height: 1.8rem;
		padding-top:10px;
	}
	.subTitle img{
		width:3.2rem;
		height:1.8rem;
	}
	.subTitle span{
		float:left;
		display: inline-block;
		color: #fff;
		font-size:1.5rem;
		margin-left:10px;
	}
	/**弹出层**/
	/deep/.el-dialog{
		background:rgb(48,62,73);
		width:55%;
	}
	/deep/ .dialog2 .el-dialog{
		width:70%;
	}
	/deep/.el-dialog__body{
		padding:0 20px 30px;
	}	
	/deep/my-select-box label{
		color:#fff;
	}
	.my-select-box{
		float: left;
		margin-left:15px;
	}
	.reback{
		position: absolute;
		right:15%;
		top:5%;
		cursor: pointer;
	}
	.pie-detail-table table td,.pie-detail-table table th{
		font-size:1.2rem;
	}
	/*.dialog2{
		width:55%;
	}*/
	.showTableBox{
		width:100%;
		height:100%;
		overflow: hidden;
	}
}
@media screen and (max-width: 1400px) {
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
	.bg .spe2{
		right: 12.7%!important;
	}
}
</style>