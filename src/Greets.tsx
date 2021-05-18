import { useUpperGreeting } from "./context/computedGreeting";

export default function Greets() {
  const greetings = useUpperGreeting();

  return <p>Greetings: {greetings}</p>;
}
