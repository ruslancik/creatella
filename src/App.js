import React from "react";
import "./App.css";
import Store  from "./components/Store/store.component";
import CustomButton from './components/CustomButton/custom-button.component'
//style
import {ButtonContainer} from './components/CustomButton/custom-button.style'

class App extends React.Component {

  state = {
    sort: "id",
    nextPage: 1,
    loading: false,
    nextResults: true,
    newSearch: false
  };

  handleSort = (param) => {
    this.setState({
      sort: param,
      nextPage: 1,
      newSearch: true,
      loading: true,
      nextResults: true
    });
    window.scrollTo(0, 0)
  }

  handleReset = () =>{
    this.setState({ newSearch: false });
  }

  handleScroll = () => {
    if (!this.state.loading) {
      let height = document.body.offsetHeight;
      let scrollY = window.pageYOffset;
      if (scrollY + window.innerHeight + 200 > height) {
        this.setState({
          nextPage: this.state.nextPage + 1,
          nextResults: true
        });
      }
    }
  }

  toggleLoading = (value) => {
    this.setState({ loading: value });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="App">
        <ButtonContainer>
          <CustomButton onClick={() => this.handleSort("id")}>ID</CustomButton>
          <CustomButton onClick={() => this.handleSort("price")}>Price</CustomButton>
          <CustomButton onClick={() => this.handleSort("size")}>Size</CustomButton>
        </ButtonContainer>
        <div className="content-container">
          <Store
            sort={this.state.sort}
            nextPage={this.state.nextPage}
            nextResults={this.state.nextResults}
            toggleLoading={this.toggleLoading}
            loading={this.state.loading}
            newSearch={this.state.newSearch}
            reset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;