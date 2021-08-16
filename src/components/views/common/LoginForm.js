import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    formData: {
      id: '',
      passwd: '',
    },
  };

  render() {
    // const {
    //   formData: { id, passwd },
    // } = this.state;
    
    const formData = this.state;
    // const { id, passwd } = this.state.formData;


    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <img src="https://picsum.photos/200/400" alt="" />
        </fieldset>

        <div>
          <div>
            <span>ID : </span>
            <input
              value={formData.id}
              onChange={this.handleInputUpdate}
              placeholder="id 입력"
              name="id"
            />
            <span>{formData.id}</span>
          </div>
        </div>
        <div>
          <span>비밀번호 : </span><input
            value={formData.passwd}
            onChange={this.handleInputUpdate}
            placeholder="*****"
            name="passwd"
            type="password"
          />
          <span>{formData.passwd}</span>
        </div>
        <button type="submit" disabled={!this.isFormValid}>
          Sign in
        </button>
      </form>
    );
  }

  handleInputUpdate = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });

    const { name, value } = e.target;
    const { formData } = this.state;

    console.log(name + ' , ' + value);

    this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });

    console.log(this.state.formData);
  };
}

export default LoginForm;
