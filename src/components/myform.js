import React, { Component } from 'react'

export default class myform extends Component {
  render() {

    changeSkillValue =(event) =>{
        this.setState({
        skillValue: event.target.value
        })
    }
        submitted = (event) =>{
        alert("Form is submitted "+ '${this.state.textValue} and ${this.state.skillValue}')
        event.preventDefault();
        }   
    
    return (
      <div>
        <form onSubmit={this.submitted}>
        <label>CollegeName</label>
        <input type='text' value={this.state.textValue} onChange={this.changeTextValue}>
        </input>
        <br></br>
        <label>Skill</label>
        <select onChange={this.changeSkillValue}>
        <option>React</option>
        <option>Angular</option>
        <option>Springboot</option>
        </select>
        <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}
