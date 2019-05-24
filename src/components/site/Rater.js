import React from 'react';
import { Rate, Row } from 'antd';

const desc = ['terrible', 'malo', 'normal', 'bueno', 'excelente'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
    const rank = value;
    this.props.ranking(rank)  
  };

  render() {
    const { value } = this.state;
    return (
        <Row type="flex" justify="space-around">
          <span>
            <Rate onChange={this.handleChange} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
          </span>
        </Row>
    );
  }
}

export default Rater;
          