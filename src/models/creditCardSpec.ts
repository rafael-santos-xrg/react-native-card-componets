import creditCardType from "credit-card-type";

export const getCreditCardType = (creditCardNumber: string) => {
  const cardInformationMatches = creditCardType(creditCardNumber);
  if (cardInformationMatches.length === 0) {
    return;
  }
  const { type, gaps, lengths, code } = cardInformationMatches[0];
  const cardInformationFirstMatch = { type, gaps, lengths, code };

  console.log(cardInformationFirstMatch);
};

export function insertSpaces(targetString: string, gapsList: number[]) {
  let result = targetString;
  gapsList.forEach((gap, index) => {
    const position = gap + index;
    if (position < result.length) {
      result = result.slice(0, position) + " " + result.slice(position);
    }
  });
  return result;
}

const ex = { code: { name: "CVV", size: 3 }, gaps: [4, 8, 12], lengths: [16, 18, 19], type: "visa" };
