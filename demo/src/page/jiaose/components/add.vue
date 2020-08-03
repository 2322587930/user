<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="isfalse.show3">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-tree
            :data="lists"
            show-checkbox
            node-key="id"
          
            :default-checked-keys="arr"
            :props="defaultProps"
            ref="tree"
          ></el-tree>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isfalse.show3= false">取 消</el-button>
        <el-button type="primary" @click="add()" v-if="isfalse.show4">添加</el-button>
        <el-button type="primary" v-else @click="xiu()">修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addjiao, yige, xiugai } from "../../../uilt/index";
import { mapGetters, mapActions } from "vuex";
import { success, err } from "../../../uilt/alert";
export default {
  props: ["isfalse"],
  data() {
    return {
      form: {
        rolename: "",
        status: 1,
        menus: "",
      },
       arr:[],
      formLabelWidth: "80px",

      data: [],
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  methods: {
    ...mapActions({
      chang: "chang",
      chang1: "chang1",
    }),
    add() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());

      addjiao(this.form).then((res) => {
        if (res.data.code == 200) {
          success(res.data.list);
          this.chang1();
        } else {
          err(res.data.list);
        }
      });
      this.isfalse.show3 = false;
    },
    fn8() {

      let id = this.$store.state.id1;
      yige({ id: id }).then((res) => {
        console.log(res.data.list)
        this.form = res.data.list;
       this.arr=JSON.parse(this.form.menus)
      });
    },
    xiu() {
      this.form.id = this.$store.state.id1;
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      xiugai(this.form).then((res) => {
        if (res.data.code == 200) {
          this.isfalse.show3 = false;
           success(res.data.msg);
          this.chang1();
        }else{
            err('失败')
        }
      });
    },
  },
  mounted() {
    this.chang();
  },
  computed: {
    ...mapGetters({
      lists: "shu",
    }),
  },
};
</script>

<style>
</style>