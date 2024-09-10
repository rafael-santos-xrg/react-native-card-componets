import { HipercardLogo } from "@/assets/Hipercard_logo";
import { AmericanExpressLogo, DinersClubLogo, DiscoverLogo, EloLogo, HiperLogo, JcbLogo, MaestroLogo, MasterCardLogo, MirLogo, NoneLogo, UnionPayLogo } from "../assets";
import { SvgProps } from "react-native-svg";
import VisaLogo from "@/assets/visa_logo";
import { CreditCardTypeCardBrandId } from "credit-card-type/dist/types";

export type CardFlags = CreditCardTypeCardBrandId | "none";

export const CardFlags: Record<CardFlags, (props: SvgProps) => React.JSX.Element> = {
  "american-express": AmericanExpressLogo,
  "diners-club": DinersClubLogo,
  discover: DiscoverLogo,
  elo: EloLogo,
  hiper: HiperLogo,
  hipercard: HipercardLogo,
  jcb: JcbLogo,
  maestro: MaestroLogo,
  mastercard: MasterCardLogo,
  mir: MirLogo,
  unionpay: UnionPayLogo,
  visa: VisaLogo,
  none: NoneLogo,
};
