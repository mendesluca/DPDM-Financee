import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
  },
  bg: {
    backgroundColor: "#8D7722",
  },
  CircleShapeView1: {
    width: 900,
    height: 900,
    borderRadius: 900 / 2,
    backgroundColor: "#9D8E54",
    position: "absolute",
    zIndex: -99999,
  },
  CircleShapeView2: {
    width: 800,
    height: 800,
    borderRadius: 900 / 2,
    backgroundColor: "#AEA587",
    position: "absolute",
    zIndex: -99998,
  },
  CircleShapeView3: {
    width: 700,
    height: 700,
    borderRadius: 900 / 2,
    backgroundColor: "#BFBDBA",
    position: "absolute",
    zIndex: -99997,
  },
  CircleShapeView4: {
    width: 600,
    height: 600,
    borderRadius: 900 / 2,
    backgroundColor: "#000",
    position: "absolute",
    zIndex: -99996,
  },
  logo: {
    width: 420,
    height: 150,
  },
  login__msg: (text = "none") => ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginTop: 10,
    marginBottom: 15,
    display: text,
  }),

  login__form: {
    width: "80%",
  },
  login__input: {
    backgroundColor: "#BFBDBA",
    fontSize: 20,
    width: 268.85,
    height: 50,
    borderRadius: 40,
    padding: 7,
    marginBottom: 15,
  },
  login__button: {
    backgroundColor: "#8D7722",
    width: 179.09,
    height: 40,
    alignSelf: "center",
    borderRadius: 40,
    padding: 2,
  },
  login__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#000",
    alignSelf: "center",
  },
});

export { css };
