import React from 'react'
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import { auth } from "../firebaseHelp";
import { db } from "../firebaseHelp";
import { Form, FormGroup, Label, Input, Button, Jumbotron } from 'reactstrap'
class AddDish extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      description: null,
      featured: false,
      id: null,
      image: null,
      label: null,
      name: null,
      price: null
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });

    try {
      await db.ref("/").push({
        category: this.state.category,
        description: this.state.description,
        featured: this.state.featured,
        id: this.state.id,
        image: this.state.image,
        label: this.state.label,
        name: this.state.name,
        price: this.state.price,
      });

    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  handleChange(event, strin) {
    console.log(strin);
    if (strin == 'featured') {
      this.setState({
        featured: event.target.value == 'on'
      })
    }
    else if (strin === 'id') {
      this.setState({
        id: parseInt(event.target.value)
      })
    }
    else {
      this.setState({
        [`${strin}`]: event.target.value
      });
    }
  }
  render() {


    return (


      <div>
        <Form onSubmit={(e) => { this.handleSubmit(e) }} className="mx-3">
          <FormGroup>
            <Label for="dishName">Name</Label>
            <Input name="Dish name" id="dishName" placeholder="pizze" value={this.state.name} onChange={(e) => { this.handleChange(e, 'name') }} />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input name="category" id="category" placeholder="South Indian" value={this.state.category} onChange={(e) => { this.handleChange(e, 'category') }} />
          </FormGroup>
          <FormGroup>
            <Label for="Description">Description</Label>
            <Input type="textarea" name="description" id="Description" placeholder="lorem ipsum" value={this.state.description} onChange={(e) => { this.handleChange(e, 'description') }} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={(e) => { this.handleChange(e, 'featured') }} />
              Featured
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="Id">Id</Label>
            <Input type="number" name="id" id="Id" placeholder="420" value={this.state.id} onChange={(e) => { this.handleChange(e, 'id') }} />
          </FormGroup>
          <FormGroup>
            <Label for="Image">Image Link</Label>
            <Input name="image" id="Image" placeholder="https://xyz" value={this.state.image} onChange={(e) => { this.handleChange(e, 'image') }} />
          </FormGroup>
          <FormGroup>
            <Label for="Label">Label</Label>
            <Input name="label" id="Label" placeholder="cold" value={this.state.label} onChange={(e) => { this.handleChange(e, 'label') }} />
          </FormGroup>
          <FormGroup>
            <Label for="Price">Price</Label>
            <Input type="number" name="Price" id="Price" placeholder="420" value={this.state.price} onChange={(e) => { this.handleChange(e, 'price') }} />
          </FormGroup>


          <Button type="submit">Add Dish</Button>
        </Form>
      </div>

    );


  }
}
class AdminLogin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      authenticated: false,

    }
  }
  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,

        });
      } else {
        this.setState({
          authenticated: false,

        });
      }
    });
  }
  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }


  render() {

    if (this.state.authenticated)
      return (
        <div>

          <AddDish />
        </div>
      )
    else return (
      <div className="m-5">
        <Jumbotron>
          <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
            Sign in with Google
          </button>
        </Jumbotron>
      </div>
    );
  }
}

export default AdminLogin;