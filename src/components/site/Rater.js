import React from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'malo', 'normal', 'bueno', 'excelente'];

class Rater extends React.Component {
  state = {
    rank: 3,
  };

  handleChange = rank => {
    this.setState({ rank });
    const rated = rank;
    console.log(rated)
  };

  render() {
    const { rank } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} rank={rank} />
        {rank ? <span className="ant-rate-text">{desc[rank - 1]}</span> : ''}
      </span>
    );
  }
}

export default Rater;
          