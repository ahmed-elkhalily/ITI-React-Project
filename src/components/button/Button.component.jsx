const Button = ({ clickFun, text, disabled }) => (
    <button onClick={clickFun} disabled={disabled}>
        {text}
    </button>
);
export { Button };
