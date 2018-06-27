import React, { Component } from 'react';

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }
  render() {
    return (
      <div className="container">
        <h5 style={{ textAlign: 'center' }}>Add Question</h5>
        <br />
        <div
          className="input-field col s6"
          style={{ width: '50%', margin: '0 auto', fontSize: 10 }}
        >
          <input id="optionOne" type="text" className="validate" />
          <label htmlFor="optionOne">Option One</label>
        </div>
        <div
          className="input-field col s6"
          style={{ width: '50%', margin: '0 auto', marginTop: 3, fontSize: 10 }}
        >
          <input id="optionTwo" type="text" className="validate" onChange={event => this.setState({optionTwo: event.target.value})}/>
          <label htmlFor="optionTwo">Option Two</label>
        </div>
        <br/>
        <button className="btn waves-effect blue center-align" type="submit" name="action" style={{ width: '50%', marginLeft: '25%'}} >
          Submit
        </button>
      </div>
    );
  }
}

export default AddQuestion;
