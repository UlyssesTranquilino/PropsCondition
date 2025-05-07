import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UserGreeting from "./UserGreeting";
import Student from "./Student";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserGreeting isLoggedIn={true} username="huh_yunjin" />
      <UserGreeting isLoggedIn={false} username="lisa" />

      <Student name="Nayeon" age={29} isSingle={true} />
      <Student name="Jeongyeon" age={28} isSingle={true} />
      <Student name="Momo" age={27} isSingle={true} />
      <Student name="Sana" age={28} isSingle={true} />
    </>
  );
}

export default App;
