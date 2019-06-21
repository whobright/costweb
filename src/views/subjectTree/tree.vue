<template>
  <svg></svg>
</template>
<script>
import * as d3 from "d3";
export default {
  name: "tree",
  data() {
    return {
      treeData: {
        name: "中国",
        child: "",
        children: [
          {
            name: "浙江",
            child: "",
            children: [
              { name: "杭州", child: null, children: null, value: 100 },
              { name: "宁波", child: null, children: [{name:'123',child: null, children: null,}], value: 100 },
              { name: "温州", child: null, children: null, value: 100 },
              { name: "绍兴", child: null, children: null, value: 100 }
            ]
          },
          {
            name: "广西"
            // children: [
            //   {
            //     name: "桂林",
            //     children: [
            //       { name: "秀峰区", value: 100 },
            //       { name: "叠彩区", value: 100 },
            //       { name: "象山区", value: 100 },
            //       { name: "七星区", value: 100 }
            //     ]
            //   },
            //   { name: "南宁", value: 100 },
            //   { name: "柳州", value: 100 },
            //   { name: "防城港", value: 100 }
            // ]
          },
          {
            name: "黑龙江"
            // children: [
            //   { name: "哈尔滨", value: 100 },
            //   { name: "齐齐哈尔", value: 100 },
            //   { name: "牡丹江", value: 100 },
            //   { name: "大庆", value: 100 }
            // ]
          },
          {
            name: "新疆",
            child: "",
            children: [
              { name: "乌鲁木齐",child: null, children: null, },
              { name: "克拉玛依",child: null, children: null, },
              { name: "吐鲁番",child: null, children: null, },
              { name: "哈密" ,child: null, children: null,}
            ]
          }
        ]
      }
    };
  },
  props: {},
  mounted() {
    this.drawTree();
  },
  methods: {
    drawTree() {
      let darwTree = new TreeGraph(this.treeData); //初始化实例
      darwTree.render();
    }
  }
};

class TreeGraph {
  //定义树图的类
  constructor(data) {//定义构造方法
   let len = data.children.length;
   for(let i=0;i<len;i++){//初始化数据，默认只显示第二层
        [data.children[i].children, data.children[i].child] = [data.children[i].child, data.children[i].children];
      }
    this.treeData =data; 
        //初始化布局
    let width = 500,
      height = 500; //定义宽、高
    this.tree = d3.layout //定义布局
      .tree()
      .size([width, 800])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2));
    this.svg = d3
      .select("svg")
      .attr("width", 900)
      .attr("height", height)
      .append("g")
      .attr("width", 800)
      .attr("transform", "translate(40,0)");
  }
 inintData(data,k){//第三层只能显示一个
  let len1 = data.children.length;
 // let len2 = data.children.children.length;
  for(let i=0;i<len1;i++){
      if(i!=k){
        [data.children[i].children, data.children[i].child] = [data.children[i].child, data.children[i].children];
    }

  }

 }
  //更新显示
  update(source) {
     getJsonData(this.treeData);
    function getJsonData(data) {
      if (data.children) {
        let len = data.children.length;
        for (let i = 0; i < len; i++) {
          let child = data.children[i];
          if (child.name == source.name) {
              if(source.depth>0&&source.depth<=3){
                 [data.children[i].children, data.children[i].child] = [data.children[i].child, data.children[i].children];
              }
          }
          getJsonData(child);
        }
      }
    }

    d3.selectAll(".node").remove();
    d3.selectAll("path").remove();
    this.render();
  }
  renderNodes(source) {
    //渲染节点
    this.node = this.svg
      .selectAll(".node")
      .data(this.nodes)
      .enter()
      .append("g")
      
      .attr("class", "node")
      .attr("transform", d => "translate(" + d.y + "," + d.x + ")");
    this.node
      .append("circle")
      .attr("r", d => (d.parent ? 3 : 0))
      .attr("fill", "rgba(47,60,71,0.5)")
      .attr("stroke", "#797979");
    this.node
      .append("text")
      .attr("y", 3)
      .attr("x", d => (d.children ? 35 : 6))
      .attr("text-anchor", d => (d.children ? "end" : "start"))
      .attr("fill", "white")
      .text(d => d.name)
      .on("click",d=>this.update(d));
    let nodeValue = this.svg
      .selectAll(".node")
      .select("text")
      .append("tspan")
      .attr("y", 3)
      .attr("text-anchor", "start")
      .attr("fill", "#FF6600")
      .text(d => (d.value ? +"" + d.value + " 亿" : ""));
  }

  renderLinks(source) {
    //渲染连线
    this.nodes = this.tree.nodes(source);
    let links = this.tree.links(this.nodes);
    let link = this.svg.selectAll("path.link").data(links);
    link
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#797979")
      .attr("stroke-width", 1)
      .attr("d", d => {
        //拼接svg路径命令,画线
        let sourceX = d.source.y + 60,
          sourceY = d.source.x,
          targetX = d.target.y,
          targetY = d.target.x;
        return (
          "M" +
          sourceX +
          "," +
          sourceY +
          "H" +
          ((targetX - sourceX) / 2 + sourceX) +
          "V" +
          targetY +
          "H" +
          targetX
        );
      });
  }
  render() {
    //渲染节点与连线
    this.renderLinks(this.treeData);
    this.renderNodes(this.treeData);
    return this;
  }
}
</script>

<style scoped>

svg {
  width: 100%;
  height: 100%;
}
</style>



