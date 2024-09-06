import { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { styles } from "./styles";

import { CreditCard, CARD_SIDE } from "@/components/credit-card";
import { Input } from "@/components/input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getCreditCardType } from "@/models/creditCardSpec";

export function Payment() {
  const [cardName, setCardName] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  const [icon, setIcon] = useState<"flip-to-front" | "flip-to-back">("flip-to-back");
  const [touchableText, setTouchableText] = useState<"Ver Verso" | "Ver Frente">("Ver Verso");
  const [numberLength, setNumberLength] = useState<number>(1);
  const [codeLength, setCodeLength] = useState<number>(3);
  const [codeName, setCodeName] = useState<string>("CVV");

  const cardSide = useSharedValue(CARD_SIDE.front);

  const cardInfo = getCreditCardType(number);

  console.log(cardInfo);

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard();
      setTouchableText("Ver Frente");
      setIcon("flip-to-front");
    } else {
      showFrontCard();
      setTouchableText("Ver Verso");
      setIcon("flip-to-back");
    }
  }

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleMaskDateInput(dateValue: string) {
    let cleaned = dateValue.replace(/[^0-9]/g, "");
    const regexMonth = /^(0[1-9]|1[0-2])$/gm;

    if (cleaned.length > 2) {
      cleaned = cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }

    if (cleaned.length > 5) {
      cleaned = cleaned.slice(0, 5);
    }
    if (!regexMonth.test(cleaned) && cleaned.length === 2) {
      cleaned = "0" + cleaned.slice(0, 1) + "/" + cleaned.slice(1);
    }
    setDate(cleaned);
  }

  function handleNameInput(nameValue: string) {
    const nameNormalized = nameValue
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trimStart();
    const nameOnlyLetters = nameNormalized.replace(/[^a-zA-Z\s]/g, "");
    setName(nameOnlyLetters);
  }

  function handleCalculateCodeConfig() {
    const codeName = cardInfo.code.name;
    const codeLength = cardInfo.code.size;
    setCodeName(codeName);
    setCodeLength(codeLength);
  }

  function handleCalculateNumberLength() {
    const lengthsRange = cardInfo.lengths;
    const maxLength = lengthsRange[lengthsRange.length - 1];
    setNumberLength(maxLength);
  }

  function handleCardNumberInput(cardNumberValue: string) {
    const cardNumberOnlyNumbers = cardNumberValue.replace(/[^0-9]/g, "");
    handleCalculateNumberLength();
    handleCalculateCodeConfig();
    setNumber(cardNumberOnlyNumbers);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <CreditCard
          cardSide={cardSide}
          data={{
            cardName,
            name,
            number,
            date,
            code,
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
          <MaterialCommunityIcons name={icon} size={24} color="black" />
          <Text>{touchableText}</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <Input placeholder="Nome do titular" onFocus={showFrontCard} onChangeText={handleNameInput} value={name} maxLength={28} />
          <Input
            placeholder="Número do cartão"
            inputMode="numeric"
            keyboardType="numeric"
            maxLength={numberLength}
            onFocus={showBackCard}
            onChangeText={handleCardNumberInput}
            value={number}
          />
          <View style={styles.inputInLine}>
            <Input
              placeholder="01/02"
              keyboardType="numeric"
              inputMode="numeric"
              maxLength={5}
              style={styles.inputSmall}
              onFocus={showBackCard}
              onChangeText={handleMaskDateInput}
              value={date}
            />
            <Input
              placeholder={codeName}
              keyboardType="numeric"
              inputMode="numeric"
              maxLength={codeLength}
              style={styles.inputSmall}
              onFocus={showBackCard}
              onChangeText={setCode}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
