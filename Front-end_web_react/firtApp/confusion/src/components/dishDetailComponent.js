import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    renderDish(dish) {

        return (
            <div>
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>

                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {


        comments = comments.length ? comments : [{ author: '', comment: ' no comment availible' }]
        const commentList = comments.map((singleComment) => {

            return (
                <div key={singleComment.id} className="m-1">
                    <div className="row m-1">
                        {singleComment.comment}
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            -- {singleComment.author},{singleComment.date}
                        </div>

                    </div>
                </div>
            )
        })


        return commentList;
    }
    render() {

        console.log('dish detail is called');
        if (this.props.dish == null) {
            return (
                <div>  </div>
            )
        }
        else {
            const dish = this.props.dish;
            return (
                <div className="container">

                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <h3>{this.props.dish.name}</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>
                                Comments
                    </h4>

                            {this.renderComments(this.props.comments)}
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default DishDetail;

