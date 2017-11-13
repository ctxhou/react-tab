import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  // position: absolute;
  // right: 0;
  float: right;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 3px;
  display: inline-block;
  color: #777;
  vertical-align: middle;
  transition: background-color .2s cubic-bezier(.645, .045, .355, 1);
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export default class ExtraButton extends React.Component {
  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        {this.props.children}       
      </Wrapper>
    );
  }
}