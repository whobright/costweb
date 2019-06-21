<template>
  <div class="foliopage3">
    <div class="top_range">
      <!-- 左框 -->
      <div class="top_range1">
        <otherbox></otherbox>
      </div>
      <!-- 中框 -->
      <div class="top_range2">
       <otherbox></otherbox>
      </div>
      <!-- 右框 -->
      <div class="top_range3">
        <otherbox></otherbox>
      </div>
    </div>
    <div class="bottom_detail">
      <div class="title-item1">
        <img class="title-img" src="../../../assets/headoffice/icon_title.png">
        <span>各中后台部门预算执行-合计</span>
        <el-radio-group v-model="radio" class="origin-radio right-radio" @change="getRadio">
          <el-radio :label="0">费用/预算达成率</el-radio>
          <el-radio :label="1">增额/增速</el-radio>
        </el-radio-group>
      </div>
      <div class="title-item2">
        <div class="table_object">
          <el-table :data="tableData" row-key="id" style="width: 100%">
            <el-table-column prop="section" label="事业部" style="width: 10%"></el-table-column>
            <el-table-column label="业务费用合计">

                <el-table-column prop="budget1" label="预算" style="width: 6%"></el-table-column>
                <el-table-column prop="reality1" label="实际" style="width: 6%"></el-table-column>
                <el-table-column prop="schedule1" label="执行进度" style="width: 6%"></el-table-column>

            </el-table-column>
            <el-table-column label="其中：">
              <el-table-column label="差旅费">
                <el-table-column prop="budget2" label="预算" style="width: 6%"></el-table-column>
                <el-table-column prop="reality2" label="实际" style="width: 6%"></el-table-column>
                <el-table-column prop="schedule2" label="执行进度" style="width: 6%"></el-table-column>
              </el-table-column>
              <el-table-column label="会议费" width="150">
                <el-table-column prop="budget3" label="预算" style="width: 6%"></el-table-column>
                <el-table-column prop="reality3" label="实际" style="width: 6%"></el-table-column>
                <el-table-column prop="schedule3" label="执行进度" style="width: 6%"></el-table-column>
              </el-table-column>
              <el-table-column label="业务招待费" width="150">
                <el-table-column prop="budget4" label="预算" style="width: 6%"></el-table-column>
                <el-table-column prop="reality4" label="实际" style="width: 6%"></el-table-column>
                <el-table-column prop="schedule4" label="执行进度" style="width: 6%"></el-table-column>
              </el-table-column>
              <el-table-column label="业务宣传费" width="150">
                <el-table-column prop="budget5" label="预算" style="width: 6%"></el-table-column>
                <el-table-column prop="reality5" label="实际" style="width: 6%"></el-table-column>
                <el-table-column prop="schedule5" label="执行进度" style="width: 6%"></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import otherbox from "@/components/otherbox.vue"
export default {
  components: {
    otherbox
  },
  data() {
     return {
        radio:0,
        tableData: [{
          id: 1,
          section: '总计',
          budget1:'10亿',
          reality1:'10亿',
          schedule1:'23%',
          budget2:'10亿',
          reality2:'10亿',
          schedule2:'23%',
          budget3:'10亿',
          reality3:'10亿',
          schedule3:'23%',
          budget4:'10亿',
          reality4:'10亿',
          schedule4:'23%',
          budget5:'10亿',
          reality5:'10亿',
          schedule5:'23%'
        }, {
          id: 2,
          section: '总计',
          budget1:'10亿',
          reality1:'10亿',
          schedule1:'23%',
          budget2:'10亿',
          reality2:'10亿',
          schedule2:'23%',
          budget3:'10亿',
          reality3:'10亿',
          schedule3:'23%',
          budget4:'10亿',
          reality4:'10亿',
          schedule4:'23%',
           budget5:'10亿',
          reality5:'10亿',
          schedule5:'23%'
        }, {
          id: 3,
          section: '总计',
          budget1:'10亿',
          reality1:'10亿',
          schedule1:'23%',
          budget2:'10亿',
          reality2:'10亿',
          schedule2:'23%',
          budget3:'10亿',
          reality3:'10亿',
          schedule3:'23%',
          budget4:'10亿',
          reality4:'10亿',
          schedule4:'23%',
           budget5:'10亿',
          reality5:'10亿',
          schedule5:'23%',
          children: [{
              id: 31,
          section: '总计',
          budget1:'10亿',
          reality1:'10亿',
          schedule1:'23%',
          budget2:'10亿',
          reality2:'10亿',
          schedule2:'23%',
          budget3:'10亿',
          reality3:'10亿',
          schedule3:'23%',
          budget4:'10亿',
          reality4:'10亿',
          schedule4:'23%',
           budget5:'10亿',
          reality5:'10亿',
          schedule5:'23%'
            }]
        }, {
           id: 4,
          section: '总计',
          budget1:'10亿',
          reality1:'10亿',
          schedule1:'23%',
          budget2:'10亿',
          reality2:'10亿',
          schedule2:'23%',
          budget3:'10亿',
          reality3:'10亿',
          schedule3:'23%',
          budget4:'10亿',
          reality4:'10亿',
          schedule4:'23%',
           budget5:'10亿',
          reality5:'10亿',
          schedule5:'23%'
        }]
    };
  },
  mounted() {
    // this.drawEchart();
    // this.pieEchart2();
    // this.pieEchart3();
  },
  methods: {
  getRadio(index){

    },
   
  }
  //   }
};
</script>


<style lang="less" scoped>
// @import url('../../../assets/css/folio/folioCommon.less');
.foliopage3 {
  width: 100%;
  height: 100%;
  .top_range {
    width: 100%;
    height: 28%;
    display: flex;
    padding: 10px 0;
    .top_range1 {
      width: 33.5%;
      padding-right: 10px;
      
    }
    .top_range2 {
      padding-right: 10px;
      width: 33.5%;
      
    }
    .top_range3 {
      width: 33%;
     
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
      .right-radio{
        //   line-height: 1.8vw;
          padding-left: 1.5vw;
          font-size: 1rem;
          padding-bottom: .8vh;
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
    }
  }
}
</style>
