import { GreetingProvider } from "./context/greetingContext";
import { useState } from "react";
import Greets from "./Greets";
import OtherGreet from "./OtherGreet";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <GreetingProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Greets />
        <OtherGreet />
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </div>
    </GreetingProvider>
  );
}
