<template>
  <div class="app common-layout">
    <el-container>
      <h1 class="main-title">Movie finder</h1>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router="true"
        >
          <el-menu-item exact index="/">Home</el-menu-item>
          <el-menu-item exact index="/add-movie" >Adding</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <transition name='fade'>
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref('/');
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  font-size: 35px;
}
.main-title {
  text-align: center;
  margin: 15px;
}
.el-menu--horizontal {
  justify-content: center;
}

.center {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-5%);
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}
</style>
