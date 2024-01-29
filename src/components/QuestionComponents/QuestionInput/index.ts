import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionInputDefaultProps } from './interface'
export * from './interface'

// 组件的配置
export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
}
