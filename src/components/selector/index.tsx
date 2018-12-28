import * as React from 'react'

interface Props {
  name: string
  options: Option[]
}

export interface Option {
  value: string
  name: string
  default?: boolean
}

export default class Selector extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  getDefaultOption() {
    return this.props.options.filter(option => {
      return option.default && option.default === true
    })[0]
  }

  getOptionList() {
    return this.props.options.map((option, i) => {
      return (
        <option key={i} value={option.value}>({option.value}) {option.name}</option>
      )
    })
  }

  render() {
    return (
      <select name={this.props.name} defaultValue={this.getDefaultOption().value}>
        {this.getOptionList()}
      </select>
    )
  }
}
