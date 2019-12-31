<template>
  <div class="pie" v-bind:id="echartId"></div>
</template>
<script>
  /*  环形图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义   
*/
  import echarts from "echarts";
  import {
    mapMutations,
    mapActions,
    mapState
  } from "vuex";
  export default {
    name: "pieEchart",
    data(){
      return {
         cellphoneBrand : [{
        name: '零售贷款',
        value: 100,
        children: [{
          name: '信用卡',
          value: 30
        }, {
          name: '汽融',
          value: 30
        }, {
          name: '消金',
          value: 40
        }]
      }, {
        name: '票据直贴',
        value: 200
      }, {
        name: '小企业贷款',
        value: 200
      }, {
        name: '公司贷款',
        value: 300
      }],
      data1 : [],
      }

    },
    props: {
      echartId: {
        type: String,
        required: true
      },
      echartData: {
        type: Object,
        default: function () {
          return {
            series: [{
              value: 335,
              name: "零售贷款"
            }, {
              value: 335,
              name: "票据直贴"
            }, {
              value: 335,
              name: "小企业贷款"
            }, {
              value: 335,
              name: "公司贷款"
            }], //对象数组，如：[{ value: 335, name: "大对公" }],
            legend: ["零售贷款", "票据直贴", "小企业贷款", "公司贷款"] //字符串数组，如：['大对公'，零售]
          };
        }
      },
      // currentRadio: {
      //   type: Number,
      //   default: 0
      // }
    },

    mounted() {
      // this.getPieData();

      
     
      for (var i = 0; i < this.cellphoneBrand.length; i++) {
       

        this.data1.push({
          name: this.cellphoneBrand[i].name,
          value: this.cellphoneBrand[i].value,
          label: {
            show: false,
          },
          children: [],
        });
      }
      this.drawEchart(this.echartId, this.data1);

    },
    methods: {
      // ...mapActions('allBank',[
      //   "getPieData",]),

      drawEchart(echartId, data1) {
        let myChart = echarts.init(document.getElementById(echartId));

        myChart.clear();
        let option = {
          color: ["#FF6600", "#F19F63", "#F9D462", "#FF9900"],
          title: {
            text: '{a|782 }{b|亿 }',
            subtext: '贷款余额',
            textStyle: {
              color: '#FF6606',
              fontSize: 40,
              align: 'center',
              rich: {
                a: {
                  fontSize: 40,
                  color: '#FF6606'
                },
                b: {
                  fontSize: 18,
                  color: '#FFFFFF'
                },

              }
            },
            subtextStyle: {
              fontSize: 18,
              color: ['#FFFFFF']
            },
            x: '45%',
            y: 'center',

          },
          tooltip: {
            show: true
          },
          legend: {
            bottom: 20,
            x: 'center',
            data: ['零售贷款', '票据直贴', '小企业贷款', '公司贷款', ]
          },

          series: [{
            type: 'sunburst',
            nodeClick: 'false',
            levels: [{}, {
              r0: '45%',
              r: '60%',
              label: {},

            }, {
              r0: '60%',
              r: '70%',
            }],
            data: data1,

          }]
        };
        // let option = {
        //   color: ["#FF6600", "#F19F63", "#F9D462", "#FF9900"],
        //   title: {
        //     text: '{a|782 }{b|亿 }',
        //     subtext: '贷款余额',
        //     textStyle: {
        //       color: '#FF6606',
        //       fontSize: 40,
        //       align: 'center',
        //       rich: {
        //         a: {
        //           fontSize: 40,
        //           color: '#FF6606'
        //         },
        //         b: {
        //           fontSize: 18,
        //           color: '#FFFFFF'
        //         },

        //       }
        //     },
        //     subtextStyle: {
        //       fontSize: 18,
        //       color: ['#FFFFFF']
        //     },
        //     x: '25%',
        //     y: 'center',

        //   },
        //   tooltip: {
        //     trigger: "item",
        //     confine: true,
        //     formatter: "{b}: {c} ({d}%)"
        //   },
        //   legend: {
        //     orient: "vertical",
        //     top: "35%",
        //     right:"20%",
        //     itemGap:25,
        //     itemWidth: 15,
        //     itemHeight: 15,
        //     textStyle: {
        //       color: "#FFF",
        //       fontFamily: "Microsoft YaHei",
        //       fontSize: 14
        //     },
        //     data: this.echartData.legend
        //   },

        //   series: [{
        //     name: "费用结构",
        //     type: "pie",
        //     radius: ["45%", "65%"],
        //     center: ["30%", "50%"],
        //     avoidLabelOverlap: false,
        //     animation: false, //关闭动画
        //     label: {
        //       normal: {
        //         show: true,
        //         color: "#FFF",
        //         formatter: "{c}亿\n{d}%",
        //          fontSize: 14
        //       },

        //       emphasis: {
        //         show: true,
        //         textStyle: {
        //           fontSize: 14,
        //           color: "#FFF",
        //           fontFamily: "Microsoft YaHei"
        //         }
        //       }
        //     },
        //     labelLine: {
        //       normal: {
        //         show: true
        //       }
        //     },
        //     data: this.echartData.series
        //   }]
        // };
        let that = this;
        myChart.setOption(option);
        myChart.on("click", function (params) {
          let children1 = [];
          let index = 0;
          for (let i = 0; i < that.cellphoneBrand.length; i++) {
            that.data1[i].children =[];
            if (that.cellphoneBrand[i].name == params.name) {
              index = i;
            }
          }
          if (that.cellphoneBrand[index].children) {
                for (var j = 0; j < that.cellphoneBrand[index].children.length; j++) {
                  children1[j] = {
                    name: that.cellphoneBrand[index].children[j].name,
                    value: that.cellphoneBrand[index].children[j].value,
                    label: {
                      show: false,
                    },
                  }
                }
              }
            that.data1[index].children = children1;
            that.drawEchart(that.echartId, that.data1);
        });
      }
    }
  };

</script>
<style>
</style>
