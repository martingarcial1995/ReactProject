import React from "react";
import Crud from "./Crud";

class CrudContainer extends React.Component {
  state = {
    form: {
      nameFruit: "",
      quantFruit: "",
      bgColor: "",
      fontColor: ""
    },
    cards: []
  };
  // handleSubmit = e => {
  //   console.log("Enviado");
  // };
  // handleChange = e => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value
  //     }
  //   });
  // };
  render() {
    return (
      <Crud
      // form={this.state.form}
      // onChange={this.handleChange}
      // onSubmit={this.handleSubmit}
      />
    );
  }
}

export default CrudContainer;
