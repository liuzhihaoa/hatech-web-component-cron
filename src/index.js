/*
 * @Author: jiangnan
 * @Email: hujiangnan@hatech.com.cn
 * @Date: 2020-10-12 13:31:58
 * @LastEditors: jiangnan
 * @LastEditTime: 2020-10-12 14:12:57
 * @Describle: 描述
 */
import hatechVueCron from '../packages/index.vue'

// Vue.js 的插件应当有一个公开方法 install 。第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象

// 方便直接注入Vue
const install = function(Vue) {
    Vue.component(hatechVueCron.name, hatechVueCron) //注册组件
}

const version = require('../package.json').version

export default {
    version,
    install,
    hatechVueCron
}

export { hatechVueCron }