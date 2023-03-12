import {
  createContext,
  useContext,
  createSignal,
  JSXElement,
  Accessor,
  Setter,
} from "solid-js";

type Props = {
  children: JSXElement;
};

type TS = {
  response: Accessor<string>;
  setResponse: Setter<string>;
};

export const AppContext = createContext<TS>({} as TS);

export const Provider = (props: Props) => {
  const [response, setResponse] = createSignal<string>("");
  return (
    <AppContext.Provider value={{ response, setResponse }}>
      {props.children}
    </AppContext.Provider>
  );
};

// export const TSContext = useContext(AppContext);
