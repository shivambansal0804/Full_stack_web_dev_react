import React,{Component} from 'react';
import {Card, CardImg,CardImgOverlay,CardText,CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

constructor(props){
    super(props);

}

    renderDish(dish){

        return(
        <div>
        <Card>
            <CardImg width="100%" object src = {dish.image}  alt = {dish.name}/>
            <CardBody>
                
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText> {dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
        );
    }

    renderComments(comments){

        const commentList = comments.map((singleComment)=>{

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
        if(this.props.selectedDish==null){
        return (
            <div>  </div>
        )
        }
        else{
            const dish = this.props.selectedDish;
        return (
        
        <div className ="row">
            <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>
                    Comments
                </h4>
                {this.renderComments(dish.comments)}
            </div>
        </div>
        )
        }
    }

}

export default DishDetail;

