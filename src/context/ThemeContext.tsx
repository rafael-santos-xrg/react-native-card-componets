import { CardFlags } from "@/models/cardLogoEnum";
import React, { createContext, useContext, useState } from "react";

interface Theme {
  backgroundFrontColor: string;
  backgroundBackColor: string;
  labelColor: string;
  textColor: string;
  chipColor: string;
  lineColor: string;
}

const themes: Record<CardFlags, Theme> = {
  "american-express": { backgroundFrontColor: "#005FAA", backgroundBackColor: "#134183", textColor: "#FFFFFF", labelColor: "#F9FAFD", lineColor: "#000000", chipColor: "#D4D9E0" },
  "diners-club": { backgroundFrontColor: "#BFC0C2", backgroundBackColor: "#909497", chipColor: "#CBCCD0", lineColor: "#000000", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  discover: { backgroundFrontColor: "#FF6000", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  elo: { backgroundFrontColor: "#000000", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  hiper: { backgroundFrontColor: "#B22222", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  hipercard: { backgroundFrontColor: "#B22222", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  jcb: { backgroundFrontColor: "#000080", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  maestro: { backgroundFrontColor: "#CC0000", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  mastercard: { backgroundFrontColor: "#E8E8E9", backgroundBackColor: "#B0B0B0", textColor: "#000000", labelColor: "#575456", chipColor: "#BAC1C7", lineColor: "#000000" },
  mir: { backgroundFrontColor: "#009639", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  unionpay: { backgroundFrontColor: "#0073B2", textColor: "#FFFFFF", labelColor: "#FFFFFF" },
  visa: { backgroundFrontColor: "#1434CB", textColor: "#FFFFFF", labelColor: "#F7F7F7", chipColor: "#8E8E8E", backgroundBackColor: "#0A288A", lineColor: "#000000" },
  none: { backgroundFrontColor: "#DAE1E7", backgroundBackColor: "#BAC1C7", textColor: "#000000", labelColor: "#4F5F64", lineColor: "#8795A0", chipColor: "#8795A0" },
};

interface ThemeContextProps {
  theme: Theme;
  handleSetTheme: (theme: CardFlags) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: themes["none"],
  handleSetTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ cardType: CardFlags; children: React.ReactNode }> = ({ cardType, children }) => {
  const [theme, setTheme] = useState<Theme>(themes[cardType]);

  React.useEffect(() => {
    setTheme(themes[cardType]);
  }, [cardType]);

  const handleSetTheme = (newTheme: CardFlags) => {
    setTheme(themes[newTheme]);
  };

  return <ThemeContext.Provider value={{ theme, handleSetTheme }}>{children}</ThemeContext.Provider>;
};
