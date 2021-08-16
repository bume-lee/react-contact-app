/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    username: '',
    phone: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onReset = () => {
    this.setState({
      username: '',
      phone: '',
    });
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();

    // 상태값을 onCreate 를 통하여 부모에게 전달
    // this.props.onCreate(this.state);
    this.props.onCreate({
      username: this.state.username,
      phone: this.state.phone,
    });
    // 상태 초기화
    this.setState({
      username: '',
      phone: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit" onClick={this.handleSubmit}>
          등록
        </button>
        <button onClick={this.onReset}>초기화</button>
        <div>
          {/* <b>값 : </b> */}
          {/* <span>{username}</span> */}
          {/* {this.state.username}
          {this.state.phone} */}
        </div>
      </form>
    );
  }
}

export default PhoneForm;
