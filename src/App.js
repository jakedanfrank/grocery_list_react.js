import React, { Component } from "react";
import List from "./List";
import GroceryForm from "./GroceryForm";
import "./App.css";
import Footer from "./Footer";


class App extends Component {
  state = { groceries: [], filter: "All" }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery 
      })
    })
  }

  visibleItems =() => {
    const { groceries, filter } = this.state;
  switch(filter) {
    case "Active":
      return groceries.filter( t => !t.complete )
    case "Complete":
      return groceries.filter( t=> t.complete )
    default:
      return groceries;
    }
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqueId() , complete: false }
    this.setState({ groceries: [grocery, ...groceries] });
  }

  render() {
    const { groceries, filter } = this.state;
  
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={groceries} groceryClick={this.handleClick}></List>
        <Footer filter={filter} setFilter={this.setFilter} />
        </div>

      );
    };
};

export default App; 