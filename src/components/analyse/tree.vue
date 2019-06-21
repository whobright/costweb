<template>
  <div class="tree" v-bind:id="echartId"></div>
</template>
<script>
/*  环形图
    echartId由父组件传入
    echartId是必传字段
    div 容器大小 由父组件定义
    
*/

import echarts from "echarts";

export default {
  name: "tree2",
  data() {
    return {
      treeData: {
        name: "总营业费用",
        value: [7659],
        children: [
          {
            name: "业管费",
            value: [4496, 50],
            children: [
              {
                name: "日常费",
                value: [2780, 30],
                children: [
                  {
                    name: "差旅费",
                    value: [2780, 30]
                  },
                  {
                    name: "公杂费",
                    value: [2780, 30]
                  }
                ]
              },
              {
                name: "运营费",
                value: [2780, 30]
              },
              {
                name: "业务费",
                value: [2780, 30]
              },
              {
                name: "职场费",
                value: [2780, 30]
              },
              {
                name: "IT费",
                value: [2780, 30]
              }
            ]
          },
          {
            name: "人工费",
            value: [2780, 30],
            children: [
              {
                name: "固定费",
                value: [2780, 30]
              },
              {
                name: "固定费",
                value: [2780, 30]
              },
              {
                name: "固定费",
                value: [2780, 30]
              }
            ]
          },
          {
            name: "固定费",
            value: [2780, 30]
          }
        ]
      }
    };
  },
  props: {
    echartId: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.drawEchart(this.echartId);
  },
  methods: {
    drawEchart(echartId) {
      let myChart = echarts.init(document.getElementById(echartId));
      
      myChart.clear();
      let option = {
        series: [
          {
            type: "tree",
            data: [this.treeData],
            top: "5%",
            left: "10%",
            bottom: "5%",
            right: "15%",
            symbol: "circle",
            symbolSize: 7,
            initialTreeDepth: 2, //初始展示的层级
            itemStyle: {
              //节点样式
              color: "#25363F",
              borderColor: "#797979"
            },
            lineStyle: {
              //线的样式
              color: "#797979",
              width: 1
            },
            label: {
              //节点文本样式
              normal: {
                show: true,
                //position :'inside',
                textStyle: {
                  color: "#FFF",
                  fontSize: 14
                },

                rich: {
                  white: {
                    align:'left',
                    color: "#FFF"
                  },
                  oriange: {
                    align:'left',
                    color: "#FF6600"
                  }
                },
                formatter: function(params){
                  //console.log(params);
                 
                  if (params.value.length == 2) {
                    //console.log(params.value);
                    return (
                      "{white|" +
                      params.name +
                      "}" +
                      "{oriange|" +
                      params.value[0] +
                      "亿" +
                      params.value[1] +
                      "%}"
                    );
                  } else if (params.value.length == 1) {
                    return (
                      "{white|" +
                      params.name +
                      "}{oriange|" +
                      params.value +
                      "亿}"
                    );
                  } else {
                    return params.name;
                  }
                },
                fontFamily: "Microsoft YaHei",
                 position: ['500%', '-50%'],
                distance: 10,
                verticalAlign: "middle",
                align: "right",
                fontSize: 14,
                color: "#FFF"
              }
            },
            leaves: {
              label: {
                normal: {
                  position: "right",
                  verticalAlign: "middle",
                  align: "left"
                }
              }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };
      let that = this;
      myChart.setOption(option);
      myChart.on("click", function(params) {
        console.log(params)
        var paramsIndex = '';
        if(params.data.name == '总营业费用'){
          paramsIndex = 0
        }else if(params.data.name == '人工费'){
          paramsIndex = 1
        }else if(params.data.name == '业管费'){
          paramsIndex = 2
        }else if(params.data.name == '固定费'){
          paramsIndex = 3
        }
        that.$emit('geParams',paramsIndex)
      });
    }
  }
};
</script>
<style>
</style>

