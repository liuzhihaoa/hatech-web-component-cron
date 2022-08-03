<!--
 * @Author: jiangnan
 * @Email: hujiangnan@hatech.com.cn
 * @Date: 2020-11-02 10:10:55
 * @LastEditors: jiangnan
 * @LastEditTime: 2022-03-12 14:08:48
 * @Describle: 描述
-->
<template>
  <div class="hello">
    <hatechVueCron></hatechVueCron>
  </div>
</template>

<script>
import hatechVueCron from "../../../src";
export default {
  name: "HelloWorld",
  components: {
    hatechVueCron
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
