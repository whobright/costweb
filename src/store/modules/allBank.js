
const state = {
  radioIndex: 0,//控制头部radio的选中样式
  seriesName: '',//右边折线图的标题
  gagueDataTop11:{//顶部仪表图数据，Top11表示top1组件的第一个仪表图
    required: true,
      max: {
        type: Number,
        default: 40
      },
      value: {
        type: Number,
        default: 0
      }
  },
  gagueDataTop12:{

  },
  gagueDataTop13:{

  },
  gagueDataTop14:{

  },
  gagueDataTop21:{

  },
  gagueDataTop22:{

  },
  gagueDataTop23:{

  },
  gagueDataTop31:{

  },
  gagueDataTop32:{

  },
  gagueDataTop33:{

  },
  gagueDataTop34:{

  },
  pieData: {//环形图数据
    series: [],
    legend: [],
  },


}

// getters
const getters = {

}

// actions
const actions = {
  getGagueData({commit},){
    //
    commit('gagueData', {data});

  },
  getPieData({commit}, ) {
    let series = [{ value: 335, name: "大对公" },
    { value: 310, name: "零售" },
    { value: 234, name: "总行及其它" }];
    let legend = series.map(items => {
      return items.name;
    });
    commit('setPieData', { series, legend });
    // let url = '/aumP3/getPage3Data1.action';
    // let params = {
    //   ymd: state.ymd, // '20180930',
    //   pqNo: state.pqNo, // 'HO',
    //   jgNo: state.jgNo // 'HO',
    // };
    // axios(url, params).then(res => {
    //   // console.log('饼状图2_数据查询');
    //   // console.log(res);
    //   if (res.status === 1) {
    //     state.table1Data = res.data;
    //   } else {
    //     state.table1Data = [];
    //   }
    // });

  }
}

// mutations
const mutations = {
  gagueData(state, {data,number}) {
    switch (number){
      case 11: state.gagueDataTop11 = data;break;
      case 12: state.gagueDataTop12 = data;break;
      case 13: state.gagueDataTop13 = data;break;
      case 14: state.gagueDataTop14 = data;break;
      case 21: state.gagueDataTop21 = data;break;
      case 22: state.gagueDataTop22 = data;break;
      case 23: state.gagueDataTop23 = data;break;
      case 31: state.gagueDataTop31 = data;break;
      case 32: state.gagueDataTop32 = data;break;
      case 33: state.gagueDataTop33 = data;break;
      case 34: state.gagueDataTop34 = data;break;
    }
    
  },
  setPieData(state, { series, legend }) {
    state.pieData.series = series;
    state.pieData.legend = legend;
  },
  setRadioIndex(state, index) {
    state.radioIndex = index;
  },
  setSeriesName(state, value) {
    state.seriesName = value;
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

