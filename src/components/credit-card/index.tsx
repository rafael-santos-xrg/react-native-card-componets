import { View, Text } from "react-native";

import { styles } from "./styles";
import Animated, { SharedValue, interpolate, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { getCreditCardType } from "@/models/creditCardSpec";

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
  };

  const normalizedNumber = () => {
    const cardGaps = getCreditCardType(data.number).gaps;
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
      <Animated.View style={[styles.card, styles.front, frontAnimatedStyles]}>
        <View style={styles.header}>
          <Text>{data.cardName}</Text>
        </View>
        <View style={[styles.chip]} />
        <View style={styles.footer}>
          <Text style={styles.name}>{normalizedName()}</Text>

          <View style={styles.flag}>
            <View style={[styles.circle, styles.red]} />
            <View style={[styles.circle, styles.orange]} />
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.card, styles.back, backAnimatedStyles]}>
        <View style={styles.cardLine} />

        <View style={styles.footer}>
          <View>
            <Text style={styles.label}>Número do cartão</Text>
            <Text style={styles.value}>{normalizedNumber()}</Text>
          </View>

          <View>
            <Text style={styles.label}>Validade</Text>
            <Text style={styles.value}>{data.date}</Text>
          </View>

          <View>
            <Text style={styles.label}>CVV</Text>
            <Text style={styles.value}>{data.code}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
