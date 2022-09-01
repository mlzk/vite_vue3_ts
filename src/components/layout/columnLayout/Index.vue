<template>
  <div class="column-layout-container">
    <div class="column-layout-header-container">这是header</div>
    <div class="column-layout-slider-menus-container">这是菜单</div>
    <div class="column-content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>
<script setup type="ts"></script>
<style lang="scss">
html,
body {
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  font-size: 14px;
  font-family: 'PingFang SC', Arial, 'Microsoft YaHei', sans-serif;
  background: #f6f8f9;
  -webkit-font-smoothing: antialiased;
}
.column-layout-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 110px;
  background-color: #fefefe;
  .column-layout-slider-menus-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 220px;
    height: 100%;
    padding-top: 110px;
    background-color: #fb5050;
  }
  .column-layout-header-container {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1998;
    width: 100%;
    min-height: 110px;
    background-color: #25baff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
  .column-content {
    width: auto;
    margin-left: 220px;
    padding: 20px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s, color 0.1s, font-size 0s;
  }
}
</style>
