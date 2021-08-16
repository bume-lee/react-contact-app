/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PhoneForm from './components/views/study/PhoneForm';
import PhoneInfoList from './components/views/study/PhoneInfoList';

import LoginForm from './components/views/common/LoginForm';
class App extends Component {
  id = 0;
  state = {
    information: [],
    keyword: '',
  };
  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      (info) => info.username.indexOf(keyword) !== -1,
    );

    return (
      <div>
        {/* <LoginForm /> */}
        <PhoneForm onCreate={this.handleCreate} />
        {/* <p>{JSON.stringify(information)}</p> */}
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleCreate = (data) => {
    console.log(data);

    const { information } = this.state;
    /*
    push, splice, unshift, pop 같은 내장함수는 배열 자체를 직접 수정하게 되므로 적합하지 않습니다. 
    그 대신에, 기존의 배열에 기반하여 새 배열을 만들어내는 함수인 concat, slice, map, filter 같은 함수를 사용
    */
    this.setState({
      // information: information.concat({
      //   ...data,
      //   id: this.id++,
      // }),
      information: information.concat(
        Object.assign({}, { id: this.id++ }, data),
      ),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        (info) =>
          id === info.id
            ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info, // 기존의 값을 그대로 렌더링
      ),
    });
  };
}

export default App;
