import React, { createContext, useState } from "react";

const getLanguage = () => (navigator.language === "pt-BR" ? "pt" : "en");
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getLanguage());

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
