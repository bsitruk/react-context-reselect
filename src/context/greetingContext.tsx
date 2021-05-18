import React, { useState } from "react";

function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export type GreetingType = {
  greet: string;
  setGreet: (value: string) => void;
};
const [useGreeting, CtxProvider] = createCtx<GreetingType>();

type Props = {
  children: React.ReactNode;
};
const GreetingProvider = ({ children }: Props) => {
  const [greet, setGreet] = useState("Hello World");

  return <CtxProvider value={{ greet, setGreet }}>{children}</CtxProvider>;
};

export { useGreeting, GreetingProvider };
