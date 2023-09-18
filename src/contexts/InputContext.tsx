import { createContext, useState } from "react";
export interface InputContextProps {
  hasFocus: boolean;
  withoutFocus: () => void;
  withFocus: () => void;
}
export const InputContext = createContext<InputContextProps>(
  {} as InputContextProps
);
export const InputProvider = ({ children }: React.PropsWithChildren) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <InputContext.Provider
      value={{
        hasFocus: focus,
        withFocus() {
          setFocus(true);
        },
        withoutFocus() {
          setFocus(false);
        },
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
