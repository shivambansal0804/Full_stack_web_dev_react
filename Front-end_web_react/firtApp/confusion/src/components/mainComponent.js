
import React, { Component } from 'react';

import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import Contact from './contactComponent';

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import AdminLogin from './adminLoginComponent';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './homeComponent';
import { db } from '../firebaseHelp';
import About from './aboutUscomponent';
class Main extends Component {
  constructor(props) {

    super(props);

    this.state = {
      dishes: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });

    try {
      db.ref("/").on("value", snapshot => {
        let dishes = [];
        snapshot.forEach((snap) => {
          dishes.push(snap.val());
        });

        this.setState({ dishes });

      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  render() {
    return (
      <div >
        <Header />
        {/* <div className="container">
        <Menu dishes={this.state.dishes} onClick= {(dishId)=> this.onDishSelect(dishId)}/>
        <DishDetail selectedDish = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
      </div> */}
        <Switch>
          <Route path="/home" component={() => {
            if (this.state.dishes)
              return (


                <Home
                  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                  leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
              );
            else
              return <div></div>

          }} />

          <Route exact path="/menu" component={() => {
            if (this.state.dishes)
              return (
                <Menu dishes={this.state.dishes} />
              );
            else
              return <div></div>
          }} />

          <Route path="/menu/:dishId" component={({ match }) => {

            if (this.state.dishes)
              return (
                <DishDetail dish={this.state.dishes.filter((dish) => parseInt(dish.id) === parseInt(match.params.dishId, 10))[0]} comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />);
            else
              return null;
          }
          } />
          <Route exact path="/contactus" component={() => <Contact />}></Route>
          <Route exact path="/adminlogin" component={() => <AdminLogin />}></Route>
          <Route exact path="/aboutus" component={() => <About />}></Route>
          <Redirect to="/home" />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
