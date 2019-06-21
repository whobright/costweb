export const toFixed2=value=>{//四舍五入保留两位小数
    if (typeof value!=='Number'){
        value = parseFloat(value);
    }
    return value.toFixed(2);
}