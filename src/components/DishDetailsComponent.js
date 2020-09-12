import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderDish({ dish }) {
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

function RenderComments({ commentsArray }) {
    if (commentsArray != null && commentsArray.length !== 0) {

        const comments = commentsArray.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    {/* <p>-- {comment.author}, {comment.date.slice(0,10)} {comment.date.slice(11, 16)}</p> */}
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
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

const DishDetails = (props) => {
    const dish = props.dish;
    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments commentsArray={dish.comments} />
                    </div>
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


export default DishDetails;
