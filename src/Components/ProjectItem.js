import React, { Component } from 'react';

class PorjectItem extends Component {
    deleteProject(id){
      this.props.onDelete(id);
  }
  render() {
    console.log(this.props)
    return (
      <li className="Project">
        <strong>{this.props.project.title} - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a> </strong>
      </li>
    );
  }
}

export default PorjectItem;
