<template>
  <div class="contrast">
    <div class="top">
      <div class="center">大零售分行费用投产对比</div>
      <div class="top-right">
        <Filter-item
          class="header-time dateSelect dateinput"
          :date.sync="timeValue"
          date-type="month"
          :show-item="{date:true,unit:false}"
          @dateChange="getDate"
        ></Filter-item>
        <!-- <span class="date">日期:</span>
        <el-date-picker
          class="dateinput"
          editable
          size="mini"
          v-model="value1"
          type="month"
          placeholder="选择日期"
        ></el-date-picker>-->
        <a class="icon">
          <img src="../../assets/compar/CombinedShape.png" alt>
          <span>大对公概览</span>
        </a>
      </div>
    </div>
    <div class="main">
      <div class="main-left">
        <div class="main-left-tit">
          <!-- 左侧头部标题 -->
          <img src="../../assets/compar/arrowyou.png" alt>
          <span>分行各条线费用结构</span>
        </div>
        <!-- 左侧饼图 -->
        <div class="piechart" >
             <img src="../../assets/analyse/return.png"  alt=""  @click="tooperate">
          <div class="pie" ref="pie_1" :piedata="pigetdata"></div>
          <!-- 修改之前 -->
          <!-- <pieEchart class="pie" @changeName="changeName" :piedata="pigetdata" :echartId="'pie'"></pieEchart> -->
        </div>
        <div class="pietable">
          <el-row>
            <el-col :span="8" :offset="8">
              <div class="grid-content bg-purple">AUM</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">LUM</div>
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
                <img v-if="tbzs1>0" src="../../assets/compar/redz.png" alt>
                <img v-else-if="tbzs1<0" src="../../assets/compar/blued.png" alt>
                {{tbzs1}}%
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple">
                <img v-if="tbzs2>0" src="../../assets/compar/redz.png" alt>
                <img v-else-if="tbzs2<0" src="../../assets/compar/blued.png" alt>
                {{tbzs2}}%
              </div>
            </el-col>
            <!-- <el-col :span="4">
              <div class="grid-content bg-purple">
                <img src="../../assets/blue.png" alt>
                -3%
              </div>
            </el-col>-->
            <!-- <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../../assets/red.png" alt>
                9.3%
              </div>
            </el-col>-->
          </el-row>
        </div>
      </div>
      <div class="main-right">
        <!-- 右侧标题 -->
        <div class="title">
          <img src="../../assets/compar/arrowyou.png" alt>
          <span class="tit">{{title}}资源配置收益</span>
          <span class="smalltit" v-show="smalltitle">-不含运营</span>
          <!-- 下拉框 -->
          <span class="xiala">
            <el-select
              class="xiala_select"
              size="mini"
              @change="pzsyChange"
              v-model="selectValue"
              placeholder="请选择"
            >
              <el-option
                el-icon-caret-bottom
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </div>
        <div class="content">
          <!-- 散点图 -->
          <div class="content-left">
            <div ref="scatter" class="scatter"></div>
            <!-- 修改之前 -->
            <!-- <scatterEchart class="scatter" :echartId="'scatter'"></scatterEchart> -->
          </div>

          <div class="content-table">
            <div class="content-table-tit">重点关注机构</div>
            <!-- 表格 -->
              <div class="content-table-right">
                <table>
                  <thead>
                    <tr class="text">
                      <th>机构</th>
                      <th id="more1">成本&#10;收入表</th>
                      <th id="more2">累计费用</th>
                      <th id="more3">费用增速</th>
                      <th id="more4">累计收入</th>
                      <th id="more5">收入增速</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in  tableData3" :key="index">
                      <td>{{item.institution}}</td>
                      <td>{{item.costincome}}</td>
                      <td>{{item.total}}</td>
                      <td>{{item.costgrowth}}</td>
                      <td>{{item.amount}}</td>
                      <td>{{item.incomegrowth}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
           <!-- 修改之前 -->
            <!-- <div class="content-table-right ">

            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="foot-box">
        <div class="foot-tit">
          <img src="../../assets/compar/arrowyou.png" alt>
          <span class="tit">{{title}}排名</span>
          <span class="smalltit" v-show="smalltitle">-不含运营</span>
          <ul class="subject">
            <li class="box-tit-des-total">
              <span>科目:</span>
              <span class="xiala">
                <el-select class="xiala_select" size="mini" v-model="value1" placeholder="请选择">
                  <el-option
                    el-icon-caret-bottom
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </span>
            </li>
            <li class="box-tit-des-total">
              <span>二级科目:</span>
              <span class="xiala">
                <el-select class="xiala_select" size="mini" v-model="value2" placeholder="请选择">
                  <el-option
                    el-icon-caret-bottom
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </span>
            </li>
            <li class="box-tit-des-total">
              <span>三级科目:</span>
              <span class="xiala">
                <el-select class="xiala_select" size="mini" v-model="value3" placeholder="请选择">
                  <el-option
                    el-icon-caret-bottom
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </span>
            </li>
            <li class="box-tit-des-total">
              <span>指标:</span>
              <span class="xiala">
                <el-select class="xiala_select" size="mini" v-model="value4" placeholder="请选择">
                  <el-option
                    el-icon-caret-bottom
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </span>
            </li>
          </ul>
          <button class="btn">导出</button>
        </div>
        <div class="foot-cont">
          <!-- 左侧柱状图 -->
          <div class="left">
            <div ref="bar1" class="leftbar"></div>
            <!-- <leftbarechart class="leftbar" :echartId="'bar1'"></leftbarechart> -->
            <span>12</span>
          </div>
          <img src="../../assets/compar/Groupyou.png" alt>
          <!-- 右侧柱状图 -->
          <div class="right">
            <div ref="bar2" class="rightbar"></div>
            <!-- 修改之前 -->
            <!-- <rightbar class="barEchart" :rightbar="rightgetbar" :echartId="'bar'"></rightbar> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
// import rem from "@/utils/rem.js";

//日期组件
import FilterItem from "../../components/FilterItem";
//图表组件
// import pieEchart from "@/components/echarts/retailbranch/piechart";
// import scatterEchart from "@/components/echarts/retailbranch/scatter.vue";
// import rightbar from "@/components/echarts/retailbranch/rightbar.vue";
// import leftbarechart from "@/components/echarts/retailbranch/leftbar.vue";
export default {
  name: "retailbranch",
  data() {
    return {
      //日期
      timeValue: "", //选中的value
      //右侧散点图title   下面柱状图title
      title: "分行",
      smalltitle:true,
      //饼图下面同比增速
      tbzs1: 10,
      tbzs2: 13,
      //资源配置总费用下拉饿了么选择器 通过@change事件绑定事件名,获取选中的value值通过定义事件的形参获取
      selectValue: "1", //下拉选中框的value
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
      ],
      //排名科目下拉框  通过@change事件绑定事件名,获取选中的value值通过定义事件的形参获取
      options1: [
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
      ],
      value1: "1",
      //二级科目下拉框
      options2: [
        {
          //select选择框的options
          value: "1",
          label: "全部"
        },
        {
          value: "2",
          label: "IT费"
        },
        {
          value: "3",
          label: "职场费"
        },
        {
          value: "4",
          label: "业务费"
        },
        {
          value: "5",
          label: "运营费"
        },
        {
          value: "6",
          label: "日常费"
        }
      ],
      value2: "1",
      //三级科目下拉框
      options3: [
        {
          //select选择框的options
          value: "1",
          label: "全部"
        },
        {
          value: "2",
          label: "差旅费"
        },
        {
          value: "3",
          label: "公杂费"
        },
        {
          value: "4",
          label: "会议费"
        },
        {
          value: "5",
          label: "通讯费"
        },
        {
          value: "6",
          label: "业务招待费"
        },
        {
          value: "7",
          label: "咨询费"
        },
        {
          value: "8",
          label: "钞币运送费"
        },
        {
          value: "9",
          label: "存款保险费"
        },
        {
          value: "10",
          label: "......"
        }
      ],
      value3: "1",
      //指标科目下拉框
      options4: [
        {
          //select选择框的options
          value: "1",
          label: "成本收入比"
        },
        {
          value: "2",
          label: "年累计费用金额"
        },
        {
          value: "3",
          label: "预算执行率"
        },
        {
          value: "4",
          label: "累计费用同比增额"
        },
        {
          value: "5",
          label: "累计费用同比增速"
        },
        {
          value: "6",
          label: "人均费用额"
        },
        {
          value: "7",
          label: "......"
        }
      ],
      value4: "1",
      //表格数据  大对公 深圳分行 杭州分行 苏州分行 深圳分行 武汉分行 广州分行 佛山分行 重庆分行 成都分行
      tableData3: [
        {
          institution: "大对公",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: "深圳分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: "杭州分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: "苏州分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: " 深圳分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: "广州分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: "佛山分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: "重庆分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        },
        {
          institution: "成都分行",
          costincome: "8%",
          total: "30",
          costgrowth: "7%",
          amount: "6%",
          incomegrowth: "8%"
        }
      ],
      //含运营饼图数据
      pigetdata: {
        title: {
          //标题设置
          text: "分行 \n (含运营)",
          subtext: "189121"
        },
        series: {
          //数据
          color: ["#FF6600", "#FFCC33"], //饼图颜色
          data: [
            { value: 335, name: "分行(不含运营)" },
            { value: 310, name: "运营" }
          ]
        },
        legend: {
          //图例
          data: ["分行(不含运营)", "运营"]
        }
      },
      rightgetbar: {
        xAxis: [
          "上海",
          "东莞",
          "北京",
          "上海",
          "东莞",
          "北京",
          "安徽",
          "香港",
          "上海",
          "东莞",
          "北京",
          "安徽",
          "香港",
          "河南",
          "三亚"
        ],
        seriesData: [
          100,
          200,
          300,
          100,
          200,
          300,
          80,
          70,
          100,
          200,
          300,
          80,
          70,
          90,
          300
        ]
      }
    };
  },
  components: {
    // pieEchart,
    // scatterEchart,
    // rightbar,
    // leftbarechart,
    FilterItem
  },
  created() {
    // rem(window);//rem适配
  },
  activated() {},
  mounted() {
    this.drawpie(); //饼图数据渲染
    this.drawscatter(); //散点图数据渲染
    this.leftbar(); //底部左侧柱状图数据渲染
    this.rightbar(); //底部右侧柱状图数据渲染
  },
  methods: {
    //设置表头样式
    tableHeader({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "padding:0;border-right:none;background:rgba(255,102,0,0.9);color:#fff;text-align:center;font-size:1.4rem;";
      } else {
        return "";
      }
    },
    //设置行的样式
    tableRowStyle({ row, rowIndex }) {
      console.log(rowIndex);
      return "height:3rem;color:#fff; background:rgba(58, 71, 79, 1);border:none;padding:none";
    },
    //设置单元格样式
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return "height:3rem;padding:0;border:none;line-height:0;";
    },
    //头部的日期控件
    getDate(value) {
      this.timeValue = value;
      // alert(value);
    },
    //返回含运营页面
    tooperate(){
     this.$router.push({path:'/Operate',query: {}})
    },
    //图表标题替换
    // changeName(val) {
    //   // console.log(val);
    //   this.title = val;
    // },
    //配置收益下拉框 获取不同费用类型
    pzsyChange(value) {
      console.log(value);
      let pzsychange = value;
    },
    //饼图数据配置
    drawpie() {
      let option1 = {
        // color: ["#FF6600", "#FFFFCC", "#FFCC33"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
          // formatter: function (params, ticket, callback) {
          //   console.log(params);
          //     console.log(ticket);//
          //     console.log(callback);
          //     }饼图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
        },
        title: {
          // text: this.piedata.title.text,
          //标题设置
          text: "分行  ",
          top: "43%",
          x: "42%",
          textAlign: "center",
          // left:"center",
          subtext: "189121亿元",
          // subtext: this.piedata.title.subtext,
          textStyle: {
            fontWeight: "normal",
            fontSize: 14, //  字体设置无效this.titleFontSize
            color: "#fff" //图形中间文字颜色
          },
          subtextStyle: {
            fontSize: 14,
            color: ["#fff"]
          }
        },
        legend: {
          //图例配置
          orient: "vertical",
          align: "left", //图例文字位置
          top: "30%",
          left: "80%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#f2f2f2",
            fontFamily: "Microsoft YaHei",
            fontSize: 14
          },
          data: ["AUM", "LUM"]
          // data:this.piedata.legend.data,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["46%", "76%"],
            // center: ["54%", "45%"],
            center: ["44%", "55%"],
            color: [ "#FFCC33","#FF6600"], //饼图颜色
            // color:this.piedata.series.color,
            avoidLabelOverlap: false,
            animation: false, //关闭动画
            label: {
              normal: {
                show: true,
                color: "#FFF",
                fontSize: 12,
                formatter: "{c}亿,{d}%"
              }
              // emphasis: {
              //   show: false,
              //   textStyle: {
              //     fontSize: 12,
              //     color:'#FFF',
              //     fontFamily :'Microsoft YaHei',
              //   }
              // }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5
              }
            },
            // data:this.piedata.series.data,
            data: [
              { value: 335,  name: "AUM" },
              { value: 310, name: "LUM"}
            ]
          }
        ]
      };
      let pieChart = this.$echarts.init(this.$refs.pie_1);
      pieChart.clear();
      pieChart.setOption(option1);
      function resizeDesSevchart4() {
        pieChart.resize();
      }
      window.addEventListener("resize", resizeDesSevchart4);
      // 通过$once来监听定时器，在deactivated钩子可以被清除,resize事件。
      this.$once("hook:deactivated", () => {
        window.removeEventListener("resize", resizeDesSevchart4);
      });
      // 点击饼图
      let mythis = this;
      pieChart.off("click");
      pieChart.on("click", function(param) {
        var value = "";
        value = param.name;
        //  console.log(value);//小企业 公司 其他 风险
        mythis.title=value;
        mythis.smalltitle=false;
      });
    },
    //散点图数据配置
    drawscatter() {
    var limitM1 = {
    lineStyle: {type: 'solid'},
    data: [{xAxis: 8,label: {formatter: 'M1/M5'}},{yAxis:6000}]
    };
    var limitM3 = {
    lineStyle: {type: 'solid'},
    data: [{xAxis: 4, label: {formatter: 'M5'}},{yAxis:8000}]
    };
      let option2 = {
        xAxis: {
          offset: -114, //坐标轴的移动距离
          name: "费用增速(%)",
          min: -20,
          max: 40,
          splitLine: {
            show: false, //横着网格线
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            interval: 0,
            // rotate: 70
            textStyle: {
              color: "#979797", //x轴线字体颜色设置
              fontSize: 12
            },
            formatter: function(v) {
              //去掉x轴刻度的0
              //console.log(v);//x轴刻度值
              if (v == 0) {
                return "";
              } else {
                return v;
              }
            }
          },
          axisLine: {
            //主轴线样式
            lineStyle: {
              color: "#979797" //x轴刻度线文字颜色   如果要隐藏 可设置为 color
            }
          },
          axisTick: {
            show: false //配置的是是否显示轴线的刻度线
          }
        },
        yAxis: {
          offset: -160, //坐标轴的移动距离 偏移位置变化会有影响
          splitLine: {
            show: false, //横着网格线
            lineStyle: {
              color: "#fff"
            }
          },
          min: -30,
          max: 30,
          name: "收入增速(%)",
          axisLabel: {
            interval: 0,
            // rotate: 70
            textStyle: {
              color: "#979797", //y轴线字体颜色设置
              fontSize: 12
            },
            // formatter: function(v) {
            //   //去掉x轴刻度的0
            //   //console.log(v);//x轴刻度值
            //   if (v == 0) {
            //     return "";
            //   } else {
            //     return v;
            //   }
            // }
          },
          axisLine: {
            //主轴线样式
            lineStyle: {
              color: "#979797" //y轴刻度线文字颜色   如果要隐藏 可设置为 color
            }
          },
          axisTick: {
            show: false //配置的是是否显示轴线的刻度线
          }
        },
        series: [
          {
            symbolSize: 14,
            //  name: '1990',//删除.可以只显示一个图例
            color: "#FFFF99",
            // data: this.originalData,
            data: [
              [-10.0, 8.04,'red'],
              [-8.0, 6.95,'red'],
              [13.0, 7.58,'red'],
              [9.0, -8.81,'red'],
              [11.0, 8.33,'red'],
              [14.0, -9.96,'red'],
              [6.0, 7.24,'red'],
              [4.0, 4.26,'red'],
              [12.0, 10.84,'red'],
              [7.0, 4.82,'red'],
              [5.0, 5.68,'red']
            ],
            type: "scatter",
               markLine : {
                 symbol:'none', //线头去掉起点和终点的样式
                 itemStyle:{//设置线条样式
                     normal: {
                        borderWidth:1,
                        lineStyle: {
                            type: 'dashed',
                            color:'rgba(151,151,151,1)',
                            width:1
                        },
                    }
                 },
                 label:{
                   normal:{
                     show:true,//是否显示虚线的均值
                   }
                 },

                data : [
                  //  {name:"1990",yAxis:10},//指定配置纵坐标的值
                  // {name:"1990",xAxis:8},//指定配置横坐标的值
                  {type : 'average', name: '平均值'},//默认为y轴平均值
                  {type : 'average', name: '平均值', valueIndex:0} ,//配置x轴平均值
                ]
            }
          },
          {
            name: "重点关注", //删除.可以只显示一个图例
            symbolSize: 14,
            color: "#FF0000",
            // data: this.originalData1,
            data: [
              [17.0, -24.04,'red'],
              [10.0, -13.95,'red'],
              [6.5, -17.58,'red'],
              [19.0, -11.81,'red'],
              [14.0, -12.33,'red'],
              [13.0, -9.96,'red'],
              [8.0, -18.2,'red'],
              [8.7, -14.26,'red'],
              [12.0, -10.4,'red'],
              [9.0, -24.82,'red'],
              [9.7,-15.68,'red']
            ],
            type: "scatter",
            formatter:function (param) {
              console.log(param);

             }
            // markLine: limitM1,
            // markLine: limitM3,

          },
        ],
        tooltip: {
          //提示信息
          // alwaysShowContent:true,  //提示信息一直不消失
          trigger: "item",
          axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
              type: "dashed",
              width: 1
            }
          },
          /*返回需要的信息*/
          formatter: function(param) {
            //设置辅助线, 提示信息
            console.log(param);
            var value = param.value;

            return (
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px;"> ' +
              value[2] +
              "(" +
              value[1] +
              ")" +
              "</div>"
            );
          }
        },
        legend: {
          //图例
          right: "10%",
          top: "5%",
          data: ["1990", "重点关注"],
          textStyle: {
            color: "rgba(255,255,255,1)",
            fontSize: 14
          }
        },
        grid: {
          //图表位置区域
          //图表位置直角坐标系内绘图网格 控制图表摆放位置上
          containLabel: true,
          // bottom: "5%",
          // top: "15%",
          // left:"5%",
          // right:"20%",
          x: "2%", //距离左边位置
          y: "14%", //距离上边位置
          x2: "18%", //距离右边位置
          y2: "0%" //距离下边位置
        }
      };
      let scatterChart = this.$echarts.init(this.$refs.scatter);
      scatterChart.clear();
      scatterChart.setOption(option2);
    },
    //左侧柱状图数据配置
    leftbar() {
      let option3 = {
        title: {
          text: "片区合计:\t\t\t\t\t\t\t\t亿", //主标题
          subtext: "", //副标题
          textStyle: {
            color: "#fff",
            fontSize: 16
            // align: 'center'
          },
          subtextStyle: {
            fontSize: 24,
            color: ["#ff9d19"]
            // verticalAlign:"top",
            // align:"right",
          },
          x: "25px", //调整位置
          y: "20px" //调整位置
        },
        // dataset:this.bardata.dataset.source,//传参不过来
        dataset: {
          source: [
            ["score", "amount", "product"],
            [89.3, 42652, "南部片区"],
            [57.1, 30212, "中部片区"],
            [74.4, 65020, "北部片区"]
          ]
        },
        grid: {
          //图表位置直角坐标系内绘图网格 控制图表摆放位置上
          containLabel: true,
          // bottom: "20%",
          // top: "48",

          x: "8%", //距离左边位置
          y: "26%", //距离上边位置
          x2: "22%", //距离右边位置
          y2: "18%" //距离下边位置
        },

        xAxis: {
          triggerEvent: true, //交互默认是false
          show: false, //隐藏x轴
          name: "amount",
          splitLine: {
            show: false //纵着网格线
          }
        },
        yAxis: {
          type: "category",
          splitLine: {
            show: false, //横着网格线
            lineStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            //主轴线样式
            lineStyle: {
              color: "#979797" //y轴刻度线参考线 如果要隐藏 可设置为 color
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,1)", //y轴字体颜色设置
              fontSize: 14
            }
          },
          axisTick: {
            //y轴刻度线
            show: false
          }
        },

        series: [
          {
            type: "bar",
            barWidth: "38%", //设置柱状图宽度
            itemStyle: {
              normal: {
                show: true,
                color: "#999"
                // color:function (param) {
                //      console.log(param);

                //   }
              },
              emphasis: {
                // color:myColor[0],// 鼠标移动进来改变的颜色 、 也是点击后改变的颜色
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#FF6600" },
                  { offset: 0.5, color: "#FF6600" },
                  { offset: 1, color: "#FFCC99" }
                ]) //柱状图
              }
            },
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product"
            }
          }
        ]
      };
      let barChart1 = this.$echarts.init(this.$refs.bar1);
      barChart1.clear();
      barChart1.setOption(option3);
      function resizeCharts4() {
        barChart1.resize();
      }
      /*   resizeCharts4 (); */
      window.addEventListener("resize", resizeCharts4);
      // 通过$once来监听定时器，在deactivated钩子可以被清除,resize事件。
      this.$once("hook:deactivated", () => {
        window.removeEventListener("resize", resizeCharts4);
      });
      barChart1.dispatchAction({
        //首次加载全部高亮橘色
        type: "highlight",
        seriesIndex: 0 //数据索引点击一直是0
        // dataIndex:4
      });
      //点击左边柱状图
      let mythis = this;
      barChart1.off("click");
      barChart1.on("click", function(param) {
        // console.log(param);
        var value = "";
        value = param.name; //姚贵平战区...
        let index = param.dataIndex; //每条柱子的索引
        barChart1.dispatchAction({
          //取消所有柱子高亮
          type: "downplay",
          seriesIndex: 0
        });
        barChart1.dispatchAction({
          //选中的柱子高亮
          type: "highlight",
          dataIndex: index
        });
      });
    },
    //右侧柱状图数据配置
    rightbar() {
      let option4 = {
        grid: {
          //图表位置直角坐标系内绘图网格 控制图表摆放位置上
          containLabel: true,
          // bottom: "20%",
          // top: "40",
          // left:"0%",
          right: "10%", //控制图表右边的位置
          x: "0%", //距离左边位置
          y: "16%", //距离上边位置
          // x2:"6%",//距离右边位置
          y2: "24%" //距离下边位置
        },
        xAxis: {
          type: "category",
          // color:'#fff',
          // data: this.rightbar.xAxis,
          data: [
            "上海",
            "东莞",
            "北京",
            "上海",
            "东莞",
            "北京",
            "安徽",
            "香港",
            "上海",
            "东莞",
            "北京",
            "安徽",
            "香港",
            "河南",
            "三亚"
          ],
          axisTick: {
            alignWithLabel: true, //文字与刻度线的对齐方式
            show: false //配置的是是否显示轴线的刻度线
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 12 //x轴下面文字的颜色
            },
            interval: 0, //中间间隔几个显示下面文字对应的
            rotate: 40, //文字旋转角度
            show: true,
            splitNumber: 1
          },
          // nameTextStyle:{
          //   color:"#fff",

          // },
          axisLine: {
            show: true, //X坐标轴线显示,
            lineStyle: {
              type: "solid",
              color: "#797979",
              width: "1  " //坐标线的宽度
            }
          }
        },
        yAxis: {
          type: "value",
          name: "(%)",
          splitNumber: 3, //表示的是分成几段
          splitLine: {
            show: false // 配置的是,图标是否显示分割线
          },
          axisTick: {
            show: false //配置的是是否显示轴线的刻度线
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          },
          axisLine: {
            show: true, //X坐标轴线显示,
            lineStyle: {
              type: "solid",
              color: "#797979",
              width: "1  " //坐标线的宽度
            }
          }
        },
        // radiusAxis: {
        //   show: true, //用来是否显示坐标的刻度
        // },
        series: [
          {
            // data: this.rightbar.seriesData,
            data: [
              100,
              200,
              300,
              100,
              200,
              300,
              80,
              70,
              100,
              200,
              300,
              80,
              70,
              90,
              300
            ],
            type: "bar",
            // barWidth: "20%",//设置柱子的宽度与barCategoryGap不能同时设置
            markLine: {
              data: [
                { type: "average", name: "平均值", symbol: "none" }
                // data: [{ name: "标线1起点", value:400,yAxis:80 },
              ],
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: "dashed",
                    color: "#FFCC33"
                  }
                }
              },
              label: {
                normal: {
                  show: true,
                  position: "end",
                  formatter: "均值:150" //标线文字配置
                }
              }
              //  boundaryGap: 0,//起始处空白设置
            },
            color: "#FF6600",
            // barCategoryGap:"70%",//控制柱条宽度
            barMaxWidth: "30"
          }
        ],
        dataZoom: [
          //控制下面的滚动条属性
          {
            type: "slider", //类型
            show: true, ////是否显示进度条
            height: 11, //设置行高
            filterMode: "empty", //控制起始位置,不超出区域
            fillerColor: "rgba(215,215,215,1)", //外层填充颜色
            orient: "horizontal",
            // bottom:'6%',
            textStyle: {
              // lineHeight: 16,
            },
            start: 0, //起始值
            end: 40,
            backgroundColor: "#3A5362", //里层填充色条
            // handleSize: '22%',//滑动条的上面点击的大小
            zoomLock: true,
            showDetail: false,
            handleSize: "0%" // 手柄的大小
            // height: '8%', // y轴datazoom高度
            // bottom: 4,
            // end: 6 * 100 / this.rigmidBarX.length - 1,
            // xAxisIndex: 0,
          }
        ]
      };
      let barChart2 = this.$echarts.init(this.$refs.bar2);
      barChart2.clear();
      barChart2.setOption(option4);
      function resizeCharts4() {
        barChart2.resize();
      }
      window.addEventListener("resize", resizeCharts4);
      // 通过$once来监听定时器，在deactivated钩子可以被清除,resize事件。
      this.$once("hook:deactivated", () => {
        window.removeEventListener("resize", resizeCharts4);
      });
    }
  }
};
</script>
<style lang="less" scoped >
@import "../../assets/css/compar/noOperate.less";

</style>
