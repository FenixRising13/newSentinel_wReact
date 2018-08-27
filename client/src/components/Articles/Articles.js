import React from "react";

const Articles = props => (
    <div className="container">
        <div className="wrapper">{props.children}</div>;
    </div>
);
export default Articles;