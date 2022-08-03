# 同创前端纯组件-cron 表达式

## 功能说明

当一个任务为‘定时执行’，此时选择的执行设置，则需要用到 cron 表达式，进行快速选择所需设置的时间。比如应用在自动化运维项目中的作业执行的场景。

## 注意事项

- 依赖：Vue 2.0.0+ 、element-ui 2.0.0+
- 该组件可以对秒、分、时、日、月、周、年设置。

## 安装方式

```bash
  npm install hatech-web-component-cron
```

## 引入方式

```js
//前置配置
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//全局引入
import hatechVueCron from 'hatech-web-component-cron'
Vue.use(hatechVueCron) //使用方式：<hatechVueCron></hatechVueCron>

//局部引入
import { hatechVueCron } from 'hatech-web-component-cron'

export default {
  template: '<hatechVueCron/>',
  components: { hatechVueCron },
}
```

## 使用示例

详情可以看示例`./example`

```js
<template>
  <div class="cron">
    <hatechVueCron v-model="cronExpression"></hatechVueCron>
    <span style="color: #E6A23C; font-size: 12px;">
      corn从左到右（用空格隔开）：秒 分 小时 月份中的日期 月份 星期中的日期 年份
    </span>
    <div style="padding-top:15px;">
      <span style="opacity:0.5;">cron表达式为：</span>
      <span style="font-size:18px;padding-left:5px;">{{ cronExpression }}</span>
    </div>
  </div>
</template>
<script>
import { hatechVueCron } from 'hatech-web-component-cron'
export default {
  components: { hatechVueCron },
    data(){
        return {
            cronExpression:'',
        }
    }
}
</script>
```
