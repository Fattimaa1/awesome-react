const Button  = ({onClickFunc ,content, className})=> {
    // let message = 'Hi, I am a message!';
    // const onClickFun = () => alert(message);

    return (
        <button style={{color: 'black'}} onClick={onClickFunc} className={className}>
           {content}
        </button>

    );
};

export default Button;