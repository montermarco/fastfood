import React from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'malo', 'normal', 'bueno', 'excelente'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
    const rated = value;
    console.log(rated)
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}

export default Rater;
          