import React from "react";
import Control from "./Control";
import Paragraph from "./Paragraph";

function Form() {
    return (
        <div>
            <form>
                <Control type="text" label="Email" />
                <br />
                <Control type="password" label="Passwor" />
                <Control type="checkbox" label="Hobby" />
                <Paragraph>
                    Proident tempor magna non dolore pariatur sint adipisicing ex eu. Ullamco cillum sunt et elit irure
                    exercitation officia id incididunt pariatur. Fugiat ea et ad nisi eiusmod pariatur proident ea ut.
                    Laboris dolore consectetur excepteur adipisicing exercitation non do adipisicing quis eiusmod ex
                    Lorem. Nulla quis eu cupidatat nostrud quis duis eiusmod aliquip adipisicing in. Aliqua id laboris
                    ex aute do officia sit eiusmod laboris sunt ipsum anim ipsum.
                </Paragraph>
                <Button type="button">Register</Button>
                <Button href="http://google.com.vn">Go to google</Button>
            </form>
        </div>
    );
}

function Button(props) {
    const handleClick = () => console.log("click on button");
    if (props.type == "button") {
        return (
            <>
                <button className="btn btn-dark" type="button" onClick={handleClick}>
                    {props.children}
                </button>
            </>
        );
    }
    if (props.href) {
        return (
            <>
                <a className="btn btn-link" href={props.href}>
                    {props.children}
                </a>
            </>
        );
    }
}
export default Form;
