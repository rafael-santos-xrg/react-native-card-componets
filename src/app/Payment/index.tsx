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
  const [dateValue, setDateValue] = useState("");

  const cardSide = useSharedValue(CARD_SIDE.front);

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

    if (cleaned.length > 2) {
      cleaned = cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }

    if (cleaned.length > 5) {
      cleaned = cleaned.slice(0, 5);
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

  function handleCardNumberInput(cardNumberValue: string) {
    const cardNumberOnlyNumbers = cardNumberValue.replace(/[^0-9]/g, "");
    getCreditCardType(cardNumberOnlyNumbers);
    setNumber(cardNumberOnlyNumbers);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <CreditCard
          cardSide={cardSide}
          data={{
            cardName,
            name: name.toUpperCase(),
            number: number.replace(/(\d{4})(?=\d)/g, "$1 "),
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
            maxLength={16}
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
            <Input placeholder="123" keyboardType="numeric" inputMode="numeric" maxLength={3} style={styles.inputSmall} onFocus={showBackCard} onChangeText={setCode} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
