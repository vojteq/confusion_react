import React, { Component } from 'react';
import { Media, Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';


class DishDetails extends Component {
    constructor(props) {
        super(props);

        // this.state = { dish: this.props.dish };
    }

    renderDish(dish) {
        return (
            <div key={dish.id}>
                <Card>
                    <CardImg object width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }

    renderComments(commentsArray) {
        if (commentsArray != null && commentsArray.length !== 0) {

            const comments = commentsArray.map((comment) => {
                return (
                    // <div key={comment.id}>
                    //     <Media tag="li">
                    //         <Media body>
                    //             <Media>
                    //                 <div className="row">
                    //                     <p>{comment.comment}</p>
                    //                     <p>-- {comment.author}, {comment.date}</p>
                    //                 </div>
                    //             </Media>
                    //         </Media>
                    //     </Media>
                    // </div>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date.slice(0,10)} {comment.date.slice(11, 16)}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {/* <Media list>
                        {comments}
                    </Media> */}
                    <div className="list-unstyled">
                        {comments}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetails;
