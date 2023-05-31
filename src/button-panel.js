import React, { Fragment } from "react";
import { Button, Input } from "./styled";

function ButtonPanel(props) {

    return (
        <Fragment>
            <Button onClick={props.onSumar}> + </Button> 

            <Input
                onChange={props.onProps}
                value={props.value}
            />

            <Button onClick={props.onRestar}> - </Button>

        </Fragment>

    );
};

export default ButtonPanel;