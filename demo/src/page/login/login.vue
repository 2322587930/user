<template>
  <div class="div1">
    <div class="div2">
      <h3>登录</h3>
      <el-input placeholder="请输入内容" v-model="json.username" clearable @blur="fn"></el-input>

     

      <el-input placeholder="请输入密码" v-model="json.password" show-password @blur="fn"></el-input>
      <div class="div3">
        <el-button type="primary" @click="deng">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { quanxian } from "../../uilt/index";
import { success, err } from "../../uilt/alert";
import { shou } from "../../uilt/zeceng";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      json: {
        username: "",
        password: "",
      },
      aa:false,
    };
  },
  methods: {
    ...mapActions({
      changuse: "changuse",
    }),
    deng() {
      quanxian(this.json).then((res) => {
        if (res.data.code == 200) {
          this.changuse(res.data.list);
          success(res.data.msg);
          this.$router.push("/home");
        } else {
          err(res.data.msg);
        }
      });
    },
    fn(a){
      if(!shou(a.target.value))
          err('请输入纯数字')
    }

  },
  // watch: {
  //   json: {
  //     deep: true,
  //     handler() {
  //       if (!shou(this.json.username) || !shou(this.json.password)) {
              
  //       }
  //     },
  //   },

    //     if(!shou(this.json.username)||!shou(this.json.password)){
    //   err('请输入数字')
    // }

    //
  // },
};
</script>

<style  scoped>
.div1 {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #563443, #303d5f);
}
.div2 {
  width: 300px;
  height: 240px;
  padding: 0px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 20px;
}
h3 {
  font-size: 35px;
  text-align: center;
  margin-top: 20px;
}
.el-input {
  margin-top: 15px;
}
.div3 {
  text-align: center;
  height: 30px;
  margin-top: 10px;
}
.p1{
  font-size: 12px;
  text-align: center;
  color:red;
}
</style>

