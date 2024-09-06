import creditCardType from "credit-card-type";

interface getCreditCardTypeReturn {
  type: string;
  gaps: number[];
  lengths: number[];
  code: {
    size: number;
    name: string;
  };
}

export const getCreditCardType = (creditCardNumber: string): getCreditCardTypeReturn => {
  const cardInformationMatches = creditCardType(creditCardNumber);
  if (cardInformationMatches.length === 0) {
    return {
      type: "none",
      gaps: [4, 8, 12],
      lengths: [16],
      code: {
        size: 3,
        name: "CVC",
      },
    };
  }
  const { type, gaps, lengths, code } = cardInformationMatches[0];
  const cardInformationFirstMatch = { type, gaps, lengths, code };
  return cardInformationFirstMatch;
};
