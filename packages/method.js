/*
 * @Author: jiangnan
 * @Email: hujiangnan@hatech.com.cn
 * @Date: 2021-09-01 17:35:46
 * @LastEditors: jiangnan
 * @LastEditTime: 2021-09-01 17:35:46
 * @Describle: 描述
 */

function handleTimeType(self, type, component) {
  let result = []
  if (type === '1') {
    // 每秒
    result.push('*')
  } else if (type === '2') {
    // 年期
    result.push(`${self.cycle.start}-${self.cycle.end}`)
  } else if (type === '3') {
    // 循环
    result.push(`${self.loop.start}/${self.loop.end}`)
  } else if (type === '4') {
    // 指定
    result.push(self.appoint.join(','))
  } else if (type === '6') {
    // 最后
    result.push(`${self.last === 0 ? '' : self.last}L`)
  } else if (type === '7' && component === 'day' && component === 'week') {
    // 指定周
    result.push(`${self.week.start}#${self.week.end}`)
  } else if (type === '8' && component === 'day') {
    // 工作日
    result.push(`${this.work}W`)
  } else {
    // 不指定
    result.push('?')
  }
  self.$emit('input', result.join(''))
  return result.join('')
}

export { handleTimeType }
