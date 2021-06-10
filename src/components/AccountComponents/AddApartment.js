import React, { Component } from "react";
import styled from "styled-components";
import WizardFormFirstPage from "./fomWizards/WizardFormFirstPage ";

class AddApartment extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  render() {
    const { page } = this.state;
    const onSubmit = (val) => {
      console.log(val);
    };
    return (
      <StyledMotion style={{ minHeight: "100vh" }}>
        <Title>
          <h2>اضف شقة</h2>
        </Title>
        <WizardFormFirstPage onSubmit={this.nextPage} />
      </StyledMotion>
    );
  }
}

export default AddApartment;
const StyledMotion = styled.div`
  box-shadow: 0 0 7px rgb(0 0 0 / 20%);
  padding: 1rem;
`;
const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h4 {
    font-size: 1rem;
    padding-top: 1em;
  }
  h6 {
    font-size: 0.8rem;
    color: #545d68;
    padding-bottom: 1em;
  }
`;
