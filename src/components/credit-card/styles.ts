import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    justifyContent: "space-between",
  },
  front: {
    width: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    backgroundColor: "#DAE1E7",
  },
  back: {
    width: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#BAC1C7",
    justifyContent: "flex-end",
  },
  header: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  chip: {
    position: "absolute",
    top: "40%",
    left: "10%",
    width: "15%",
    height: 40,
    backgroundColor: "#8795A0",
    borderRadius: 8 ,
  },
  cardLine: {
    top: 40,
    position: "absolute",
    width: "100%",
    height: 50,
    backgroundColor: "#E4ECF3",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  logo: {
    backgroundColor: "#8795A0",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  footer: {
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    alignContent: "center",
  },
  flag: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    fontSize: 12,
    color: "#4F5F64",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
