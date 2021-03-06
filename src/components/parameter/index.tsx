import * as React from 'react'
import './index.css'

import Selector, { OptionItem } from '../selector'

interface Props {
  name: string
  inputType: string
  description?: string
  options: Options
}

export interface Options {
  default?: string
  required?: boolean
  disabled?: boolean
  outputType?: string
  min?: number
  max?: number
  optionList?: OptionItem[]
}

export default class Parameter extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  static defaultProps = {
    inputType: 'text',
  }

  getInput() {
    if (this.props.inputType === 'select') {
      return <Selector name={this.props.name} options={this.props.options} />
    } else {
      return (
        <input
          name={this.props.name}
          type={this.props.inputType}
          defaultValue={this.props.options.default}
          max={this.props.options.max}
          min={this.props.options.min}
          required={this.props.options.required}
          disabled={this.props.options.disabled}
        />
      )
    }
  }

  render() {
    return (
      <div className='parameter'>
        <span>{this.props.description}</span>
        <div className='parameter-input-value'>
          <code>{this.props.name}</code>
          {this.getInput()}
        </div>
      </div>
    )
  }
}
