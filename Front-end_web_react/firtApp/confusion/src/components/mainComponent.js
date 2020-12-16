
import React,{ Component } from 'react';

import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import Contact from './contactComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import AdminLogin from './adminLoginComponent';
import {Switch,Redirect,Route} from 'react-router-dom';
import Home from './homeComponent';

class Main extends Component {
  constructor(props){

    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
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
        <Route path="/home" component={()=> <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]} promotion ={this.state.promotions.filter((promotion)=>promotion.featured)[0]} leader={this.state.leaders.filter((leader)=>leader.featured)[0]} />}/>
        <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
        <Route path = "/menu/:dishId" component={({match})=> <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} /> }/>
        <Route exact path="/contactus" component={()=> <Contact/>}></Route>
        <Route exact path="/adminlogin" component={()=> <AdminLogin/>}></Route>
        <Redirect to="/home" />

      </Switch>
      <Footer/>
    </div>
  );
  }
}

export default Main;
