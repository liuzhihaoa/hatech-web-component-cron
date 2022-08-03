<!--
 * @Author: jiangnan
 * @Email: hujiangnan@hatech.com.cn
 * @Date: 2020-11-02 10:10:55
 * @LastEditors: jiangnan
 * @LastEditTime: 2020-11-02 18:17:40
 * @Describle: 描述
-->
<template>
  <div class="home">
    <Cron />
  </div>
</template>

<script>
// @ is an alias to /src
import Cron from "@/example/index.vue";

export default {
  name: "Home",
  components: {
    Cron,
  },
};
</script>
<style scoped>
.home {
  margin: 0 auto;
}
</style>
