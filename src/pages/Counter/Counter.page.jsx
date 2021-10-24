import { useState } from "react";
import { Button } from "../../components/button/Button.component";
import "./Counter.component.scss";

export const Counter = () => {
    let [counter, setCounter] = useState(0);

    function increaseFun(value) {
        return setCounter(++value);
    }
    function decreseFun(value) {
        if (value === 0) return;
        else setCounter(--value);
    }
    return (
        <div className="counter">
            <div className="counter__text">{counter}</div>
            <div className="btn__group">
                <Button
                    className="counter__btn inc"
                    text={"+"}
                    clickFun={() => increaseFun(counter)}
                />
                <Button
                    text={"-"}
                    className="counter__btn dec"
                    clickFun={() => decreseFun(counter)}
                    disabled={!counter}
                />
            </div>
        </div>
    );
};
