import "./App.css";
import MyImg from "./assets/react.svg";
import Input from "./components/inputs/Input";
import Button from "./components/Button";
import List from "./components/List";
import { BsAlarmFill } from "react-icons/bs";
import { BsBrushFill } from "react-icons/bs";
import Counter from "./components/Counter";
import NewCounter from "./components/NewCounter";
import LoginForm from "./components/LoginForm";
import Users from "./components/Users";
import Album from "./components/Album";

const App = () => {
  let message = "Hi, I am a message!";
  const onClickFunc = () => alert(message);
  let content = "exit to page";

  const loginInfo = {
    password: "1234",
    userName: "Lily",
  };

  console.log(loginInfo.userName.length);

  // if (loginInfo.password.length < 1 || loginInfo.password !== "123") {
  //   return (
  //     <div>
  //       <h3>Password is wrong.</h3>
  //     </div>
  //   );
  // } else if (loginInfo.userName.length < 3 || loginInfo.userName !== "Sara") {
  //   return (
  //     <div>
  //       <h3>UserName is wrong.</h3>
  //     </div>
  //   );
  // }

  // if (loginInfo.password !== "123" && loginInfo.userName !== "Sara") {
  //   return (
  //     <div>
  //       <h3>UserName and Password are wrong.</h3>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Hi</h1>
      <p>I am new react project</p>
      <section>
        <BsAlarmFill />
        <BsBrushFill />

        <h2>In ye goroh jadid ast</h2>
        <img src={MyImg} alt="" />
        <Button
          onClickFunc={onClickFunc}
          content="open to page"
          className="redBtn"
        />
        <Button content={content} className="blueBtn" />
        <Input />
      </section>
      <section>
        <List />
      </section>
      <section>
        <Counter />
        <NewCounter />
      </section>
      <section>
        <LoginForm />
      </section>
      <section>
        <Users />
        <section>
          <Album />
        </section>
      </section>
    </div>
  );
};

export default App;
