import * as React from 'react'
import { Options } from '../parameter'

interface Props {
  name: string
  options: Options
}

export interface OptionItem {
  value: string
  name: string
  default?: boolean
}

export default class Selector extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  getDefaultOption() {
    return this.props.options.optionList!.filter(option => {
      return option.default && option.default === true
    })[0]
  }

  getOptionList() {
    return this.props.options.optionList!.map((option, i) => {
      return (
        <option key={i} value={option.value}>({option.value}) {option.name}</option>
      )
    })
  }

  render() {
    return (
      <select name={this.props.name} defaultValue={this.getDefaultOption().value} data-type={this.props.options.outputType}>
        {this.getOptionList()}
      </select>
    )
  }
}
