<!--
 * @Author: jiangnan
 * @Email: hujiangnan@hatech.com.cn
 * @Date: 2020-11-02 10:10:55
 * @LastEditors: jiangnan
 * @LastEditTime: 2020-11-02 18:17:55
 * @Describle: 描述
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0f152f;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0f152f;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
