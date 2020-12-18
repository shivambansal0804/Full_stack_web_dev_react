import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';


function RenderMenuItem({ dish }) {

    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle><h3 style={{ color: 'black' }}>{dish.name}</h3></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
class Menu extends Component {






    render() {

        const menu = this.props.dishes.map((dish) => {

            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            )
        });
        return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3 className="ml-1">Menu</h3>
                        <div className="row mt-3"></div>
                        {/* <hr /> */}
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>



        );
    }
}

export default Menu;