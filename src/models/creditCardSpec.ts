import creditCardType, { types } from "credit-card-type";
import { CreditCardTypeCardBrandId } from "credit-card-type/dist/types";
import { CardFlags } from "./cardLogoEnum";
// import { CardFlags } from "./cardLogoEnum";

export interface getCreditCardTypeReturn {
  type: CardFlags;
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
  return cardInformationFirstMatch as getCreditCardTypeReturn;
};
