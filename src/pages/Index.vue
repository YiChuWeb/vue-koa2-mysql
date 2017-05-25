<template>
  <div class="background">
    <header>
      <div class="title">应用</div>
    </header>
    <el-menu default-active="2" class="aside-menu el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer>
    </footer>
  </div>
</template>
<style lang="less" scoped>
  @top : 100px;
  @bottom : 100px;
  @left : 240px;
  .background{
    height:100%;
    position: relative;
    background-color: #F9FAFC;
    header{
      height: @top;
      background-color: #20A0FF;
      position: relative;
      .title{
        position: absolute;
        left:100px;
        line-height:100px;
        color: #fff;
        font-size:20px;
      }
    }
    .aside-menu{
      width:@left;
      position: absolute;
      top:@top;
      bottom:0;
      left:0;
    }
    .container{
      position: absolute;
      top:@top;
      right:0;
      left:@left;
      bottom:@bottom;
    }
    footer{
      position: absolute;
      bottom: 0;
      left:@left;
      height:@bottom;
      right:0;
      background-color: #E5E9F2;
    }
  }


</style>
<script>
  export default {
    data () {
        return {
        }
    },
    methods:{

    },
    components:{
    },
    mounted(){
    }
  }
</script>
