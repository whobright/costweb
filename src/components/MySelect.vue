<template>
  <div class="my-select-box" :class="theme">
    <label v-if="showLabel">{{label}}</label>
    <el-select
      v-bind="$attrs"
      v-model="currentValue"
      @change="handleChange"
      :size="size"
      placeholder=""
      :popper-class="theme+'-select'"
    >
      <el-option
        v-for="(item,index) in data"
        :key="index"
        :label="item[defaultProps.label]"
        :value="item[defaultProps.value]"
      ></el-option>
    </el-select>
  </div>
</template>


<script>
export default {
  name: "MySelect",
  inheritAttrs: false,
  props: {
    showLabel: {
      default: true
    },
    label: {
      default: ""
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          value: "value",
          label: "label"
        };
      }
    },
    value: {
      required: true
    },
    size: {
      type: String,
      default: "mini"
    },
    theme: {
      type: String,
      default: "dark" 
    }
  },
  watch: {
    value(val, oldValue) {
      this.currentValue = val;
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("update:value", value);
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="less" scoped>
.origin {
  /deep/ .el-input__suffix {
    background: rgba(255, 102, 0, 1);
  }
}
.dark {
  /deep/ .el-input__suffix {
    background: #374562;
  }
}
.my-select-box {
  label {
    padding: 0 5px;
    white-space: nowrap;
  }
  /deep/.el-input__suffix {
    right: 0;
    border-radius: 0 4px 4px 0;
    i {
      color: #fff;
      font-weight: 900;
    }
    /deep/.el-input__icon {
      line-height: 28px;
    }
  }
}
</style>
