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
              value: 40,
              name: "小企业贷款"
            }, {
              value: 20,
              name: "票据直贴"
            }, {
              value: 40,
              name: "公司贷款"
            }], //对象数组，如：

          };
        }
      },

    },
    computed: {

    },
    mounted() {

      this.drawEchart(this.echartId);
    },
    methods: {



      drawEchart(echartId) {
        let myChart = echarts.init(document.getElementById(echartId));
        myChart.clear();
        let option = {
          color: ["#FF6600", "#FFFF99", "#FF9900"],
          tooltip: {
            trigger: "item",
            confine: true,
            formatter: "{b}: {c} ({d}%)"
          },


          series: [{
            type: "pie",
            radius: ["0", "65%"],
            center: ["45%", "40%"],
            avoidLabelOverlap: false,
            hoverAnimation :false,
            animation: false, //关闭动画
            itemStyle: {
              normal: {
                borderWidth: '4',
                borderColor: 'rgba(47, 60, 71)',
              },

            },
            label: {
              normal: {
                show: true,
                color: "#FFF",
                formatter: function(params){
                  let label ='{a|'+ params.data.name+'}'+'{b| '+params.data.value+' }{a|亿元 \n同比}{c|} {a|8%}';
                  return label;
                },
               rich: {
                a: {
                  fontSize: 16,
                  color: '#FFFFFF'
                },
                b: {
                  fontSize: 24,
                  color: '#FF6606',
                 // fontWeight:'blod',
                 // fontFamily: 'Microsoft YaHei',
                },
                c:{
                  width:20,
                  height:20,
                  lineHeight: 20,
                  backgroundColor: {
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcElEQVQ4T6WSPUtCcRTGn0fFi2ZCBCEENQSR9QVCxKVodGkIxwiKDGopok0K2oOySWyqpraGcIgu9hVyC4UMpyDfRa8n7vUq10sE0pn+/M/5nZfnHMJii6lyWJyMQxARSEB3ESyBUKlJ8m3Ln+2H03gkxBWcrV6A2IVI789upEBwnSv4DpBgxwgKpitXgMT7sU4CD1EvCuUu9p+bthRM5jbH92i2p1orTSjEa8yHr2YX4fvaMEgKNYkweFO5hUjM6v0TNAbnHYPpygcg0yOBYJEL6bI+qDPg7WlSqgt+qzjlIVwO4LOmawRtAKobY/C4iO1MHflvGZpxadKB1JoXJLB8W4WQnUGrZyEF6/Nu1NqCY7WByxWvIc5OpmFAfoV4fG/jSNVVZnEgjoPAeVhBdM6NliZQnESrI2hpMKCnfBuHL01oYopjXYcVtoplg3rrsB+ADp+GFKzOuNAVIFvUcJI1KxnZzAP418n12xrlyH8AfSXUZ4FYrEQAAAAASUVORK5CYII="
                  },

                }

              }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  color: "#FFF",
                  fontFamily: "Microsoft YaHei"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: this.echartData.series
          }]
        };
        let that = this;
        myChart.setOption(option);
        myChart.on("click", function (params) {
          //that.test();
          if (that.radioIndex == 0) {
            if (params.data.name == "大对公") {
              that.$router.push({
                path: "allBankPage2",
                query: {}
              });
              that.setRadioIndex(1);
            } else if (params.data.name == "零售") {
              that.$router.push({
                path: "allBankPage3",
                query: {}
              });
              that.setRadioIndex(2);
            } else {
              alert("去总行页");
            }
          } else if (that.radioIndex == 1) {
            //去大对公费用，带参数
            // that.$router.push({ path: "allBankPage2" , query: {} });
            // that.setRadioIndex(1);
          } else if (that.radioIndex == 2) {
            if (params.name == "零售") {
              //不含运营
              //请求接口
            } else if (params.name == "运营") {
              //含运营
              //请求接口
            }
          }
        });
      }
    }
  };

</script>
<style>
</style>
