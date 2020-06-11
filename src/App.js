import React from 'react';
import './App.css';
import GridContainer from './components/GridContainer/grid-container.component'

class App extends React.Component{

  state = {
    products: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => this.setState({products : [...data]}));
  }
  
  render(){
    return (
      <div className="App">
        <GridContainer items={this.state.products} />
        {this.state.products.map(product => (
          <p>{product.face}</p>
        ))}
      </div>
    );
  }
    
}

export default App;
