<template>
  <div class="box">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        
          background-color="#20222a"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/caidan">菜单管理</el-menu-item>
              <el-menu-item index="/jiaose">角色管理</el-menu-item>
              <el-menu-item index="/guanli">管理员管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商城管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/fenlei">商品分类</el-menu-item>
              <el-menu-item index="/kuige">商品规格</el-menu-item>
              <el-menu-item index="/shangping">商品管理</el-menu-item>
              <el-menu-item index="/huiyuan">会员管理</el-menu-item>
              <el-menu-item index="/lunbo">轮播图管理</el-menu-item>
              <el-menu-item index="/miaosha">秒杀活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <!-- <span>{{$store.state.users.username}}</span>
            <el-button type="primary" @click='fn'>退出</el-button> -->
          </div>
        </el-header>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
   ...mapActions({
     changuse:'changuse'
   }),
    fn(){
      this.$router.push('/login')
      this.$store.state.users=null
    }
  },
  computed:{
    ...mapGetters({
      users:'users'
    })
  },
  mounted(){
    console.log(this.users)
  }
};
</script>

<style  scoped>
.box {
  width: 100vw;
  height: 100vh;
}
.el-aside {
  background-color: #20222a;
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
}

</style>>

