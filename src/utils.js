export const returnLanguage = textObj => {
  return navigator.language === 'pt-BR' ? textObj.pt : textObj.en;
};
