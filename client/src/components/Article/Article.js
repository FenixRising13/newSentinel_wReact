import React from "react";

const Article = props => (
    <div className="card">
        <div className="container">
            <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />
        </div>
    </div>
);

export default Article;
