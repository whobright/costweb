<template>
  <div class="foliopage1">
    <div class="top_range">
      <!-- 左框 -->
      <div class="top_range1">
        <topbox
          :piechartsData="pieEchartData1"
          :gaugechartsData="gaugechartsData1"
          :constructObj="constructData"
        ></topbox>
      </div>
      <!-- 中框 -->
      <div class="top_range2">
        <otherbox :gaugecharts2Data="gaugechartsData2"></otherbox>
      </div>
      <!-- 右框 -->
      <div class="top_range3">
        <otherbox :gaugecharts2Data="gaugechartsData3"></otherbox>
      </div>
    </div>
    <div class="bottom_detail">
      <div class="title-item1">
        <img class="title-img" src="../../../assets/headoffice/icon_title.png">
        <span>总行预算执行</span>
      </div>
      <div class="title-item2">
        <div class="piechart">
          <div class="piechartwo" ref="piechartwo"></div>
          <img class="lineleft" src="../../../assets/headoffice/lineleft.png" alt>
          <img class="linecenter" src="../../../assets/headoffice/linecenter.png" alt>
          <img class="lineright" src="../../../assets/headoffice/lineright.png" alt>
        </div>
      </div>
      <div class="title-item3">
        <div class="table_left">
          <table class="subjectTable">
            <thead>
              <tr class="theadOne">
                <th class="thtitle">
                  <em></em>重点科目
                </th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
              </tr>
              <tr>
                <th></th>
                <th>实际</th>
                <th>占比</th>
                <th>执行预算</th>
                <th>增额</th>
                <th>增速</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableListData1" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.value1}}</td>
                <td>{{item.value2}}</td>
                <td>{{item.value3}}</td>
                <td>{{item.value4}}</td>
                <td>{{item.value5}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table_mid">
          <table class="subjectTable">
            <thead>
              <tr class="theadOne">
                <th class="thtitle">
                  <em></em>重点科目
                </th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
              </tr>
              <tr>
                <th></th>
                <th>实际</th>
                <th>占比</th>
                <th>执行预算</th>
                <th>增额</th>
                <th>增速</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableListData1" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.value1}}</td>
                <td>{{item.value2}}</td>
                <td>{{item.value3}}</td>
                <td>{{item.value4}}</td>
                <td>{{item.value5}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table_right">
          <table class="subjectTable">
            <thead>
              <tr class="theadOne">
                <th class="thtitle">
                  <em></em>重点科目
                </th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
                <th>20亿</th>
              </tr>
              <tr>
                <th></th>
                <th>实际</th>
                <th>占比</th>
                <th>执行预算</th>
                <th>增额</th>
                <th>增速</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableListData1" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.value1}}</td>
                <td>{{item.value2}}</td>
                <td>{{item.value3}}</td>
                <td>{{item.value4}}</td>
                <td>
                  <i></i>
                  {{item.value5}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topbox from "@/components/officehead/topbox.vue";
import otherbox from "@/components/officehead/otherbox.vue";
export default {
  components: {
    topbox,
    otherbox
  },
  data() {
    return {
      gaugechartsData1: {
        center: ["52%", "83%"],

        seriesData: {
          max: 40,
          data: [
            {
              value: 31,
              name: "(%)"
            }
          ]
        }
      },
      gaugechartsData2: {
        center: ["52%", "83%"],
        seriesData: {
          max: 40,
          data: [
            {
              value: 39,
              name: "(%)"
            }
          ]
        }
      },
      gaugechartsData3: {
        center: ["52%", "83%"],
        seriesData: {
          max: 40,
          data: [
            {
              value: 47,
              name: "(%)"
            }
          ]
        }
      },
      pieEchartData1: {
        center: ["54%", "50%"],
        radius: "55%",
        fontsize: 12,
        seriesData: [
          {
            value: "12",
            name: "中后台部门"
          },
          {
            value: "16",
            name: "其他"
          },
          {
            value: "31",
            name: "产品事业部"
          }
        ]
      },
      tableListData1: [
        {
          name: "咨询及外包服务费",
          value1: "20亿",
          value2: "20亿",
          value3: "20亿",
          value4: "20亿",
          value5: "20亿"
        },
        {
          name: "差旅费",
          value1: "20亿",
          value2: "20亿",
          value3: "20亿",
          value4: "20亿",
          value5: "20亿"
        },
        {
          name: "招待费",
          value1: "20亿",
          value2: "20亿",
          value3: "20亿",
          value4: "20亿",
          value5: "20亿"
        },
        {
          name: "业务宣传费",
          value1: "20亿",
          value2: "20亿",
          value3: "20亿",
          value4: "20亿",
          value5: "20亿"
        },
        {
          name: "会议费",
          value1: "20亿",
          value2: "20亿",
          value3: "20亿",
          value4: "20亿",
          value5: "20亿"
        }
      ],
      constructData: {}
    };
  },
  mounted() {
    // this.drawEchart();
    // this.pieEchart2();
    this.pieEchart3();
  },
  methods: {
    pieEchart3() {
      let echartsOption = this.$echarts.init(this.$refs.piechartwo);
      //   let echartDom = document.getElementById("pieEchart2");
      let colors = ["#ff6600", "#FFCC66", "#FFFFCC"];
      //   if (echartDom) {
      // 如果dom还未渲染echartDom == null，就调用dispose，init方法就会报错getAttribute == null;原因是dom是动态加载的dom和渲染echart渲染顺序不能同步。先要有dom
      // this.echartsOption = this.$echarts.init(echartDom);
      var data = [
        {
          name: "重点科目",
          value: 10
        },
        {
          name: "统筹费用",
          value: 10
        },
        {
          name: "其他",
          value: 10
        }
      ];

      let option = {
        title: {
          text: "总费用",
          subtext: "1891亿元",
          // padding: [0, 0, 0, 50],
          // left: '43.8%',
          // top: '32%',
          textStyle: {
            color: "#f2f2f2",
            fontSize: 14
            // align: 'center'
          },

          subtextStyle: {
            color: "#f2f2f2",
            fontSize: 14
          },
          x: "center",
          y: "37%"
        },
        legend: {
          orient: "vertical",
          right: "41%",
          top: "23%",
          textStyle: {
            fontSize: 12,
            color: "#fff"
          },
          //   borderRadius: 0,
          itemWidth: 12,
          itemHeight: 12,
          // data: this.echartsData.legendData\
          data: data
        },
        series: [
          {
            color: colors,
            type: "pie",
            hoverAnimation: false,
            radius: ["50%", "70%"],
            // silent: true,
            labelLine: {
              show: false
            },
            label: {
              normal: {
                show: false
              }
            },
            data: data
          }
        ]
      };
      echartsOption.clear();
      echartsOption.setOption(option);

      echartsOption && echartsOption.resize && echartsOption.resize();
      let vm = this;
      let resizeCharts = function() {
        vm.echartsOption.resize();
      };
      window.addEventListener("resize", resizeCharts);
      // 通过$once来监听定时器，在deactivated钩子可以被清除,resize事件。
      this.$once("hook:deactivated", () => {
        window.removeEventListener("resize", resizeCharts);
      });
    },
    
  }
  //   }
};
</script>


<style lang="less" scoped>
// @import url('../../../assets/css/folio/folioCommon.less');
.foliopage1 {
  width: 100%;
  height: 100%;
  .top_range {
    width: 100%;
    height: 28%;
    display: flex;
    padding: 10px 0;
    .top_range1 {
      width: 40%;
      padding-right: 10px;
    }
    .top_range2 {
      padding-right: 10px;
      width: 30%;
      .small_range2 {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 17px 30px 15px 30px;
        background: rgba(255, 255, 255, 0.12);
        &:hover {
          background: rgba(213, 94, 14, 1);
        }
        .range2_left {
          float: left;
          width: 55%;
          height: 100%;
        }
        .range2_right {
          float: left;
          width: 45%;
          height: 100%;
          padding-right: 2rem;
        }
      }
    }
    .top_range3 {
      width: 30%;
    }
  }
  .bottom_detail {
    width: 100%;
    height: 72%;
    position: relative;
    .title-item1 {
      position: absolute;
      left: 0;
      top: 0;
      align-items: center;
      width: auto;
      height: 1.8vw;
      line-height: 1.8vw;
      padding-left: 1vw;
      color: #fff;
      .title-img {
        height: 1.5vw;
        float: left;
        margin-top: 0.3rem;
        margin-right: 0.3rem;
      }
      span {
        font-size: 2rem;
        font-weight: bold;
      }
    }
    .title-item2 {
      height: 32%;
      .piechart {
        position: relative;
        width: 100%;
        height: 100%;
        // 三条杠图片
        .lineleft {
          width: 37.8rem;
          height: 4.6rem;
          position: absolute;
          left: 50%;
          margin-left: -43.8rem;
          bottom: 0;
        }
        .linecenter {
          // width: 37.8rem;
          // height: 4.6rem;
          position: absolute;
          left: 50%;
          // margin-left:-43.8rem;
          bottom: 0.5rem;
        }
        .lineright {
          width: 37.8rem;
          height: 4.6rem;
          position: absolute;
          right: 50%;
          margin-right: -43.8rem;
          bottom: 0;
        }
        .piechartwo {
          width: 100%;
          height: 100%;
        }
      }
    }
    .title-item3 {
      height: 68%;
      display: flex;
      padding-left: 9vw;
      .table_left,
      .table_mid {
        width: 39%;
        text-align: center;
      }
      .table_right {
        width: 31%;
      }
    }
  }
}
.subjectTable {
  border-collapse: collapse;
  border-spacing: 0;
  tr {
    th,
    td {
      padding: 0.5vh;
      position: relative;
      height: 40px;
      vertical-align: text-top;
      line-height: 2px;
    }
    th:nth-child(n + 2) {
      font-weight: normal;
    }
    th:nth-child(4),
    th:nth-child(6),
    td:nth-child(4),
    td:nth-child(6) {
      color: #ffd266;
    }
    td:first-child {
      text-align: left;
      border-left: 2px solid #ffd266;
      padding-left: 1vw;
      &:before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: #ffd266;
        position: absolute;
        left: -0.3vw;
        top: 0;
      }
    }
  }
  tr:last-child {
    td:first-child {
      border-left: none;
    }
  }
  .theadOne {
    .thtitle {
      color: #f60;
      text-align: left;
      em {
        display: inline-block;
        height: 1.4vh;
        width: 1.4vh;
        background-color: #f60;
        margin-right: 0.2vw;
      }
    }
  }
}
</style>
