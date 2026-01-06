"use client";
const { createContext, useContext } = require("react");

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  function changeMode() {
    setMode(!mode);
  }
  return (
    <ThemeProvider.Provider value={{ mode, changeMode }}>
      {children}
    </ThemeProvider.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeProvider);
};
