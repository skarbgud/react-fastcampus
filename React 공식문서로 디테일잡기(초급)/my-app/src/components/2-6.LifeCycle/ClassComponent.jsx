import React, { Component } from 'react';

export default class ClassComponent extends Component {
  // construct -> state 초기화 및 메서드 바인딩
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  // DOM 노드 초기화 및 데이터 fetch
  componentDidMount() {
    console.log('componentDidMount');
    this.timeID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 타이머 제거 및 요청 취소 및 구독 해제
  componentWillUnmount() {
    console.log('componentWillUnmoun');
    clearInterval(this.timeID);
  }

  tick() {
    // console.log('tick');
    this.setState({ date: new Date() });
  }

  //   handleClick() {
  //     alert(this.state.date);
  //   }

  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    // console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleDateString()}</h2>
      </div>
    );
  }
}
