<template>
  <div>
      <div class="box" id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
mounted(){
  var myChart = echarts.init(document.getElementById('main'))
  var  option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
myChart.setOption(option);
}
}
</script>

<style scoped>
.box{
  width: 80%;
  height: 500px;
margin: 20px auto;
}
</style>
