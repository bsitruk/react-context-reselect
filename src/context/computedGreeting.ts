import { createSelector } from "reselect";
import { useGreeting, GreetingType } from "./greetingContext";

const transform = (s: string) => {
  console.log("Calling the transformer");
  return s.toUpperCase();
};

const selector = createSelector(
  ({ greet }: GreetingType) => greet,
  (greetValue) => {
    return transform(greetValue);
  }
);

// useMemo will trigger one call per component everytime 'greets' changes

// The selector create with reselect memoize the value globally.
// So only one computation is needed everytime 'greet' is changing.

export function useUpperGreeting() {
  const greetContext = useGreeting();
  const ret = selector(greetContext);
  return ret;
}
