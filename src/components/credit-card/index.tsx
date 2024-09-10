import { View, Text } from "react-native";

import { styles } from "./styles";
import Animated, { SharedValue, interpolate, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { getCreditCardType } from "@/models/creditCardSpec";
import CardLogo from "./card-logo";
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";

export enum CARD_SIDE {
  front = 0,
  back = 1,
}

type CreditCardProps = {
  cardSide: SharedValue<number>;
  data: {
    cardName: string;
    name: string;
    number: string;
    date: string;
    code: string;
  };
};

export function CreditCard({ cardSide, data }: CreditCardProps) {
  const { theme, handleSetTheme } = useTheme();

  console.log(data.number.length);

  const cardType = getCreditCardType(data.number);

  useEffect(() => {
    if (data.number.length < 1) return handleSetTheme("none");
    handleSetTheme(cardType.type);
  }, [cardType]);

  function insertSpaces(targetString: string, gapsList: number[]) {
    let result = targetString;
    gapsList.forEach((gap, index) => {
      const position = gap + index;
      if (position < result.length) {
        result = result.slice(0, position) + " " + result.slice(position);
      }
    });
    return result;
  }
  const normalizedName = () => {
    return data.name.toUpperCase();
    return "VICTOR R M SANTOS".toUpperCase();
  };

  const normalizedNumber = () => {
    const cardGaps = cardType.gaps;
    return insertSpaces(data.number, cardGaps);
  };

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(cardSide.value, [CARD_SIDE.front, CARD_SIDE.back], [0, 180]);

    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(cardSide.value, [CARD_SIDE.front, CARD_SIDE.back], [180, 360]);

    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.card,
          styles.front,
          frontAnimatedStyles,
          {
            backgroundColor: theme.backgroundFrontColor,
          },
        ]}
      >
        <View style={styles.header}>
          <Text>{data.cardName}</Text>
        </View>
        <View style={[styles.chip, { backgroundColor: theme.chipColor }]} />
        <View style={styles.footer}>
          <Text style={[styles.name, { color: theme.textColor }]}>{normalizedName()}</Text>

          <View style={styles.flag}>
            <CardLogo cardFlagName={data.number.length >= 1 ? cardType.type : "none"} />
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.card, styles.back, backAnimatedStyles, { backgroundColor: theme.backgroundBackColor }]}>
        <View style={[styles.cardLine, { backgroundColor: theme.lineColor }]} />

        <View style={styles.footer}>
          <View>
            <Text style={[styles.label, { color: theme.labelColor }]}>Número do cartão</Text>
            <Text style={[styles.value, { color: theme.textColor }]}>{normalizedNumber()}</Text>
          </View>

          <View>
            <Text style={[styles.label, { color: theme.labelColor }]}>Validade</Text>
            <Text style={[styles.value, { color: theme.textColor }]}>{data.date}</Text>
          </View>

          <View>
            <Text style={[styles.label, { color: theme.labelColor }]}>CVV</Text>
            <Text style={[styles.value, { color: theme.textColor }]}>{data.code}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
