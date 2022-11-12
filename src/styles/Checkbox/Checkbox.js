import React, { Component, PropTypes } from 'react';
import { Box } from "./Styles"; 

class Checkbox extends Component {
  render() {
    return (
      <Box
        onClick={() => this.props.onChange(!this.props.checked)}
      >
        <input
          type="checkbox"
          checked={this.props.checked}
        />
        <label>{this.props.label}</label>
      </Box>
    );
  }

  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
  }
}

export default Checkbox;