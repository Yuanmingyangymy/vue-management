<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <CommonAside/>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader/>
        </el-header>
        <CommonTag/>
        <el-main>
          <!-- <h1>main</h1> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTag from '@/components/CommonTag.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  }
}
</script>

<style>
.el-header {
  padding: 0;
}
</style>