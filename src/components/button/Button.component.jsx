import "./Button.component.scss";
const Button = ({ clickFun, text, disabled, className }) => (
    <button onClick={clickFun} disabled={disabled} className={className}>
        {text}
    </button>
);
export { Button };
