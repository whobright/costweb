<template>
  <div class="my-filter-box">
    <div class="date-box">
      <label>日期</label>
      <el-date-picker
        v-if="showItem.date"
        class="date-item"
        v-model="p_date"
        align="center"
        :type="dateType"
        placeholder="选择日期"
        size="mini"
        :value-format="valueFormat"
        :clearable="false"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>
    <!-- <my-select v-if="showItem.area" class="padding-left" label="片区" :value.sync="p_area" :data="areaList" :theme="theme" :default-props="defaultProps"></my-select>
    <my-select v-if="showItem.org" class="padding-left" label="机构" :value.sync="p_org" :data="orgList" :theme="theme" :default-props="defaultProps"></my-select> -->
    <div v-if="showItem.unit" class="unit-item padding-left">单位：{{unit}}</div>
  </div>
</template>

<script>
//import MySelect from '@/components/MySelect';

/**
 * showItem 参数是一个对象，每个字段对应到每个 select ，为true 则显示， 从前往后依次为 year、month、day、area、org、unit
 * （类型）为对应的每个值，自行对应prop查看即可， 日期部分数据的参数为可选，内部自动生成。片区、机构 则需传入数据源 [{label:'片区1'，value:1}]
 *  onPropsChange 为所有监听字段的change 事件
 *  （类型+Change） 为每个item的change事件  dateChange  返回两个参数: dateChange(value,data) value 为当前的值，data 为传入的所有props
 * /

/**
 * 【配置】
 * 当在组件内部修改了prop属性，对外emit发出的事件名称
 */
const emitPropsChangeName = 'onPropsChange';
/**
 * 【配置】
 * 可在组件属性中定义当前props是否参加本mixin实现双向绑定。
 */
const isEnableName = 'propSync';
/**
 * 【配置】
 * 根据prop的名称生成对应的data属性名，可自行修改生成后的名称。
 * 默认为在prop属性名前面增加"p_"，即若prop中有字段名为"active"，则自动生成名为"p_active"的data字段
 * @param {string} propName 组件prop字段名称
 * @returns {string} 返回生成的data字段名
 */
function getDataName (propName) {
  // 注意：映射后名称不能以 $ 或 _ 开头，会被vue认定为内部属性！！
  return 'p_' + propName;
}
export default {
  name: 'FilterItem',
  components: {
   // MySelect
  },
  props: {
    date: {
      default () {
        return new Date();
      }
    },
    // 必传参数，month 为年月  date 为 年月日
    dateType: {
      type: String,
      require: true,
      propSync: false,
      default: 'month' // year/month/date
    },
    unit: {
      type: [String, Number],
      propSync: false,
      default: '亿元'
    },
    // 片区数据
    area: {
      type: [String, Number],
      default: ''
    },
    areaList: {
      type: Array,
      default () {
        return [];
      }
    },
    // 机构数据
    org: {
      type: [String, Number],
      default: ''
    },
    orgList: {
      type: Array,
      default () {
        return [];
      }
    },
    // 传入对象，根据键值的true、false 显示item
    showItem: {
      require: true,
      propSync: false,
      type: Object,
      default () {
        return {
          date: true, // 显示日期
          area: true, // 片区
          org: true, // 机构
          unit: true // 单位
        };
      }
    },
    // 主题 dark、origin
    theme: {
      type: String,
      propSync: false,
      default: 'dark'
    },
    // 适用于片区。机构 下拉框自定义字段名
    defaultProps: {
      type: Object,
      propSync: false,
      default () {
        return {
          value: 'id',
          label: 'name',
          isMonthChange: true // 是否调用月份
        };
      }
    }
  },












  
  computed: {
    valueFormat () {
      return this.dateType === 'month' ? 'yyyyMM' : 'yyyyMMdd';
    },
    pickerOptions () {
      let dateType = this.dateType;
      return {
        disabledDate (time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: dateType === 'date' ? '今天' : '本月',
            onClick (picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: dateType === 'date' ? '昨天' : '上月',
            onClick (picker) {
              const date = new Date();
              dateType === 'date' ? date.setTime(date.getTime() - 3600 * 1000 * 24) : date.setMonth(date.getMonth() - 1);
              picker.$emit('pick', date);
            }
          }, {
            text: dateType === 'date' ? '一周前' : '一年前',
            onClick (picker) {
              const date = new Date();
              dateType === 'date' ? date.setTime(date.getTime() - 3600 * 1000 * 24 * 7) : date.setFullYear(date.getFullYear() - 1);
              picker.$emit('pick', date);
            }
          }
        ]
      };
    }
  },
  data () {
    let that = this;
    let data = {};
    let propsKeys = Object.keys((that.$options.props) || {});
    propsKeys.forEach(function (prop, i) {
      let dataName = getDataName(prop);
      let isEnable = that.$options.props[prop][isEnableName]; // 判断当前字段是否需要双向绑定
      isEnable = (typeof isEnable === 'boolean') ? isEnable : true;
      if (!isEnable) { return }
      data[dataName] = that[prop];
    });
    return data;
  },
  created () {
    let that = this;
    /** 所有 取消props的watch监听函数 的数组 */
    let unwatchPropsFnArr = [];
    /** 所有 取消data的watch监听函数 的数组 */
    let unwatchDataFnArr = [];
    /** 所有组件定义的props名称数组 */
    let propsKeys = Object.keys((that.$options.props) || {});
    propsKeys.forEach(function (prop, i) {
      let dataName = getDataName(prop);
      let isEnable = that.$options.props[prop][isEnableName]; // 判断当前字段是否需要双向绑定
      isEnable = (typeof isEnable === 'boolean') ? isEnable : true;
      if (!isEnable) { return }
      // 监听所有props属性
      let propsFn = that.$watch(prop, function (newVal, oldVal) {
        that[dataName] = newVal; // 将组件外变更的prop同步到组件内的 p_prop变量中
      }, {});
      unwatchPropsFnArr.push(propsFn);
      // [监听所有属性映射到组件内的变量]
      let dataFn = that.$watch(dataName, function (newVal, oldVal) {
        // console.log(that.$data);
        let dataKeys = Object.keys((that.$data) || {});
        let newData = {};
        // 取到 p_ 前缀的字段，change 触发时 返回到父组件
        dataKeys.forEach(function (dataKey) {
          let keySplit = dataKey.split('p_');
          if (!keySplit || keySplit.length < 2) return;
          let keyName = keySplit[1];
          newData[keyName] = that.$data[dataKey];
        });
        // 格式化时间
        if (prop === 'date') {
          // newVal = that.handleDateValueFormat(newVal);
        }
        that.$emit(`update:${prop}`, newVal); // 如果有 使用 .sync 修饰符， 同步修改外部组件的值
        that.$emit(`${prop}Change`, newVal, newData); // 每个字段都有自己的change 事件， yearChange
        that.$emit(emitPropsChangeName, prop, newVal, oldVal, newData); // 将组件内 p_prop通知给组件外(调用方)
      }, {});
      unwatchDataFnArr.push(dataFn);
    });
  }
};
</script>

<style lang="less" scoped>
.my-filter-box{
  display: flex;
  align-items: center;
  .padding-left{
    padding-left: 15px;
  }
  .date-box{
    display: flex;
    align-items: center;
    label{
      padding: 0 10px;
      color: #fff;
    }
  }
  .date-item{
    width: 150px;
    /deep/ .el-select{
      width: 80px;
    }
  }
  .unit-item{
    /*font-size: 18px;*/
    font-weight: 900;
    white-space: nowrap;
  }
}
</style>
