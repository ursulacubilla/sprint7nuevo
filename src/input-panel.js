import React, { Fragment, useEffect, useState } from "react";
import ButtonPanel from "./button-panel";
import { Label } from './styled';


function InputPanel(props) {
    const [textOne, setTextOne] = useState(0);
    const [textTwo, setTextTwo] = useState(0);

    useEffect(() => {
        const localTextOne = Number(localStorage.getItem('textOne')) || 0;
        const localTextTwo = Number(localStorage.getItem('textTwo')) || 0;
        props.onComenzar(localTextOne, localTextTwo);
        setTextOne(localTextOne);
        setTextTwo(localTextTwo);
    }, []);

    function handleChangeTextOne(e) {
        setTextOne(Number(e.target.value));
        localStorage.setItem('textOne', Number(e.target.value));
    };

    function handleChangeTextTwo(event) {
        setTextTwo(Number(event.target.value));
        localStorage.setItem('textTwo', Number(event.target.value));
    };

    function onComenzarPropsOne(e) {
        props.onComenzar(e.target.value, textTwo);
        handleChangeTextOne(e);
    };

    function onComenzarPropsTwo(event) {
        props.onComenzar(event.target.value, textOne);
        handleChangeTextTwo(event);
    };

    function onSumar() {
        props.onComenzar(textOne + 1, textTwo);
        setTextOne(textOne + 1);
        localStorage.setItem('textOne', textOne + 1);
    };

    function onRestar() {
        props.onComenzar(textOne - 1, textTwo)
        setTextOne(textOne - 1);
        localStorage.setItem('textOne', textOne - 1);
    };

    function onSumarTwo() {
        props.onComenzar(textTwo + 1, textOne)
        setTextTwo(textTwo + 1);
        localStorage.setItem('textTwo', textTwo + 1);
    };

    function onRestarTwo() {
        props.onComenzar(textTwo - 1, textOne)
        setTextTwo(textTwo - 1);
        localStorage.setItem('textTwo', textTwo - 1);
    };


    return (
        <Fragment>
            <Label >
                Número de páginas:

                <ButtonPanel onProps={onComenzarPropsOne}
                    value={textOne}
                    onSumar={onSumar}
                    onRestar={onRestar}
                />

            </Label>

            <hr />

            <Label>
                Número de idiomas:

                <ButtonPanel onProps={onComenzarPropsTwo}
                    value={textTwo}
                    onSumar={onSumarTwo}
                    onRestar={onRestarTwo}
                />

            </Label>

        </Fragment>
    );
};

export default InputPanel;