import { useState } from "react";
import { Button } from "../../components/button/Button.component";

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
        <div className="App">
            {counter}
            <div className="btn__group">
                <Button
                    text={"increase"}
                    clickFun={() => increaseFun(counter)}
                />
                <Button
                    text={"decrease"}
                    clickFun={() => decreseFun(counter)}
                    disabled={!counter}
                />
            </div>
        </div>
    );
};
