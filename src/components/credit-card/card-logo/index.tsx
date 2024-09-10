import { CardFlags } from "@/models/cardLogoEnum";
import { View } from "react-native";

export default function CardLogo({ cardFlagName }: { cardFlagName?: CardFlags }) {
  console.log(cardFlagName)
  const CardFlag = CardFlags[cardFlagName ?? "none"];
  return (
    <View>
      <CardFlag width={60} height={60} />
    </View>
  );
}
