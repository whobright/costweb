<template>
  <div class="table_object">
    <el-table :data="tableData" row-key="id" style="width: 100%" height="100%" stripe>
      <el-table-column prop="section" label="事业部" style="width: 20%"></el-table-column>
      <el-table-column label="业务费用合计">
        <el-table-column prop="budget1" label="预算"></el-table-column>
        <el-table-column prop="reality1" label="实际"></el-table-column>
        <el-table-column prop="schedule1" label="执行进度"></el-table-column>
      </el-table-column>
      <el-table-column label="其中：">
        <el-table-column label="差旅费">
          <el-table-column prop="budget2" label="预算"></el-table-column>
          <el-table-column prop="reality2" label="实际"></el-table-column>
          <el-table-column prop="schedule2" label="执行进度"></el-table-column>
        </el-table-column>
        <el-table-column label="会议费">
          <el-table-column prop="budget3" label="预算"></el-table-column>
          <el-table-column prop="reality3" label="实际"></el-table-column>
          <el-table-column prop="schedule3" label="执行进度"></el-table-column>
        </el-table-column>
        <el-table-column label="业务招待费">
          <el-table-column prop="budget4" label="预算"></el-table-column>
          <el-table-column prop="reality4" label="实际"></el-table-column>
          <el-table-column prop="schedule4" label="执行进度"></el-table-column>
        </el-table-column>
        <el-table-column label="业务宣传费">
          <el-table-column prop="budget5" label="预算"></el-table-column>
          <el-table-column prop="reality5" label="实际"></el-table-column>
          <el-table-column prop="schedule5" label="执行进度"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      tableData: [
        {
          id: 1,
          section: "总计",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%"
        },
        {
          id: 2,
          section: "总计1",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%",
          children: [
            {
              id: 21,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            },
            {
              id: 22,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            }
          ]
        },
        {
          id: 3,
          section: "总计2",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%",
          children: [
            {
              id: 31,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            },
            {
              id: 32,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            }
          ]
        },
        {
          id: 4,
          section: "总计3",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%",
          children: [
            {
              id: 41,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            },
            {
              id: 42,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            }
          ]
        },
        {
          id: 5,
          section: "总计4",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%",
          children: [
            {
              id: 51,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            }
          ]
        },
        {
          id: 6,
          section: "总计5",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%",
          children: [
            {
              id: 61,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            }
          ]
        },
        {
          id: 7,
          section: "总计6",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%",
          children: [
            {
              id: 71,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            },
            {
              id: 72,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            }
          ]
        },
        {
          id: 8,
          section: "总计7",
          budget1: "10亿",
          reality1: "10亿",
          schedule1: "23%",
          budget2: "10亿",
          reality2: "10亿",
          schedule2: "23%",
          budget3: "10亿",
          reality3: "10亿",
          schedule3: "23%",
          budget4: "10亿",
          reality4: "10亿",
          schedule4: "23%",
          budget5: "10亿",
          reality5: "10亿",
          schedule5: "23%",
          children: [
            {
              id: 81,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            },
            {
              id: 82,
              section: "总计",
              budget1: "10亿",
              reality1: "10亿",
              schedule1: "23%",
              budget2: "10亿",
              reality2: "10亿",
              schedule2: "23%",
              budget3: "10亿",
              reality3: "10亿",
              schedule3: "23%",
              budget4: "10亿",
              reality4: "10亿",
              schedule4: "23%",
              budget5: "10亿",
              reality5: "10亿",
              schedule5: "23%"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.table_object {
  width: 100%;
  height: 100%;
  //   background-color: #f00;
  /deep/.el-table {
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    background: rgba(37, 54, 63, 0.8);

    &::before {
      height: 0;
    }
    .el-table__body-wrapper {
      overflow: auto;
    }
    //   th:nth-child(3n-2),
    th:nth-child(3n-1),
    td:nth-child(3n),
    td:nth-child(3n-1) {
      border-right: none;
    }
    thead {
      color: #fff;
      tr:nth-child(2) {
        th:first-child {
          border-right: none;
        }
      }
      tr:nth-child(1) {
        th:nth-child(2) {
          border-right: 1px solid #797979;
        }
      }
      tr:nth-child(3) {
        th:nth-child(3n-2) {
          border-right: none;
        }
      }

      th,
      tr {
        background-color: #f60;
        text-align: center;
      }
    }
    td,
    th.is-leaf {
      border-bottom: none;
      text-align: center;
    }
    td {
      padding: 8px 0;
    }
    th {
      padding: 3px 0;
    }
  }
  /deep/.el-table th,
  /deep/.el-table tr {
    background-color: #46525a;
  }
  /deep/.el-table--border td,
  /deep/.el-table--border th {
    border-right: 1px solid #797979;
  }
  /deep/.el-table--border th,
  /deep/.el-table__fixed-right-patch {
    border-bottom: 1px solid #797979;
  }
  /deep/.el-table--border,
  /deep/.el-table--group {
    border: none;
  }
  /deep/.el-table__body {
    tr {
      td:first-child {
        text-align: left;
      }
    }
  }
  /deep/.el-table .el-table__expand-icon {
    float: right;
  }
  /deep/.el-table__expand-icon {
    color: #fff;
  }
  .el-table--border::after,
  .el-table--group::after {
    width: 0;
  }
  /deep/.el-table {
    th:nth-last-child(2),
    td:last-child {
      border-right: none;
    }
  }
  /deep/.el-table tbody tr:hover > td {
    background: none;
  }
  /deep/.el-table__row--striped {
    td,
    th {
      background-color: #35424a !important;
    }
  }
}
</style>

