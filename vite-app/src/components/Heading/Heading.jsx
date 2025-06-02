import React from "react";

function Heading(props) {
    return <h1 className="display-3 fw-bolder">{props.children}</h1>;
}

export default Heading;
