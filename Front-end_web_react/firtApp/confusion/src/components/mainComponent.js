
import React,{ Component } from 'react';

import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import {DISHES} from '../shared/dishes';
import {Switch,Redirect,Route} from 'react-router-dom';
import Home from './homeComponent';

class Main extends Component {
  constructor(props){

    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){

    console.log(dishId);
    this.setState({selectedDish:dishId});
}
  render(){ 
    return (
    <div >
      <Header/>
      {/* <div className="container">
        <Menu dishes={this.state.dishes} onClick= {(dishId)=> this.onDishSelect(dishId)}/>
        <DishDetail selectedDish = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
      </div> */}
      <Switch>
        <Route path="/home" component={()=> <Home/>}/>
        <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
        <Redirect to="/home" />

      </Switch>
      <Footer/>
    </div>
  );
  }
}

export default Main;
