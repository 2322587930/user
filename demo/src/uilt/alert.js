import vue from 'vue'
//成功
let vm = new vue
export const success = (msg) => {
    vm.$message({
        message: msg,
        type: 'success'
    });
}
//警告
export const warn = (msg) => {
    vm.$message({
        message: msg,
        type: 'warning'
    });
}
//失败
export const err = (msg) => {
    vm.$message({
        message: msg,
        type: 'error'
    });
}
