import * as React from "react";
import "./index.css";

import Selector, { Option } from "../selector";

interface Props {
  name: string;
  inputType: string;
  description?: string;
  options: {
    default?: string;
    min?: number;
    max?: number;
    optionList?: Option[];
  };
}

export default class Parameter extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    inputType: "text"
  };

  getInput() {
    if (this.props.inputType === "select") {
      return <Selector name={this.props.name} options={this.props.options.optionList!} />;
    } else {
      return (
        <input
          name={this.props.name}
          type={this.props.inputType}
          defaultValue={this.props.options.default}
          max={this.props.options.max}
          min={this.props.options.min}
        />
      );
    }
  }

  render() {
    return (
      <div className="parameter">
        <span>{this.props.description}</span>
        <div className="parameter-input-value">
          <code>{this.props.name}</code>
          {this.getInput()}
        </div>
      </div>
    );
  }
}
