import { useUpperGreeting } from "./context/computedGreeting";
import { useGreeting } from "./context/greetingContext";

export default function OtherGreet() {
  const greetings = useUpperGreeting();
  const { greet, setGreet } = useGreeting();

  return (
    <div>
      <p>Other Greetings: {greetings}</p>
      <button
        onClick={() =>
          setGreet(greet === "Hello World" ? "Hello Me" : "Hello World")
        }
      >
        Swap Greet
      </button>
    </div>
  );
}
