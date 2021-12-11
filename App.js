import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CalcKeys from "./components/CalcKeys.js";
import CountKey from "./components/CountKeys.js";
import OperatorKeys from "./components/OperatorKeys.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      numerator: "",
      denominator: "",
      operator: "",
      switchFractionSection: false,
    };
  }

  clear() {
    this.setState((state, props) => ({ display: "" }));
  }

  evaluate(x, y, operator) {
    if (operator == "+") {
      this.setState((state, props) => ({ display: parseInt(x) + parseInt(y) }));
      this.setState((state, props) => ({ switchFractionSection: false }));
    } else if (operator == "-") {
      this.setState((state, props) => ({ display: parseInt(x) - parseInt(y) }));
      this.setState((state, props) => ({ switchFractionSection: false }));
    } else if (operator == "x") {
      this.setState((state, props) => ({ display: parseInt(x) * parseInt(y) }));
      this.setState((state, props) => ({ switchFractionSection: false }));
    } else if (operator == "/") {
      this.setState((state, props) => ({ display: parseInt(x) / parseInt(y) }));
      this.setState((state, props) => ({ switchFractionSection: false }));
    } else if (operator == "%") {
      this.setState((state, props) => ({ display: (parseInt(x) * 1) / 100 }));
      this.setState((state, props) => ({ switchFractionSection: false }));
    }

    //Clear state for next operation
    this.setState((prevState) => ({ denominator: "" }));
    this.setState((prevState) => ({ numerator: "" }));
  }

  addNumber(x) {
    //show the number clicked on the display. IF this is the first number saved it is save as the denominator If this is the second number enter, it is saved as the numerator.
    this.setState((state, props) => ({ display: state.display + x }));
    if (this.state.switchFractionSection == true) {
      this.setState((state, props) => ({ denominator: state.denominator + x }));
    } else {
      this.setState((state, props) => ({ numerator: state.numerator + x }));
    }
  }

  operatorSymbol(x) {
    //If display already have a number and the user press a operator button, then the current display number is save as the numerator
    if (
      this.state.numerator == "" &&
      this.state.switchFractionSection == false
    ) {
      this.setState((state, props) => ({ numerator: this.state.display }));
    }

    this.setState((state, props) => ({ display: state.display + x }));
    this.setState((state, props) => ({ operator: x }));
    this.setState((state, props) => ({ switchFractionSection: true }));
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Calculator</Text>
        </View>
        <View style={styles.display}>
          <Text style={styles.title}>{this.state.display}</Text>
        </View>
        <View style={styles.calcKeyFirstRow}>
          <CalcKeys displayKey="1" onClick={() => this.addNumber("1")} />
          <CalcKeys displayKey="2" onClick={() => this.addNumber("2")} />
          <OperatorKeys
            displayKey="-"
            onClick={() => this.operatorSymbol("-")}
          />
          <OperatorKeys
            displayKey="+"
            onClick={() => this.operatorSymbol("+")}
          />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="3" onClick={() => this.addNumber("3")} />
          <CalcKeys displayKey="4" onClick={() => this.addNumber("4")} />
          <OperatorKeys
            displayKey="/"
            onClick={() => this.operatorSymbol("/")}
          />
          <OperatorKeys
            displayKey="*"
            onClick={() => this.operatorSymbol("x")}
          />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="5" onClick={() => this.addNumber("5")} />
          <CalcKeys displayKey="6" onClick={() => this.addNumber("6")} />
          <OperatorKeys onClick={() => this.clear()} displayKey="C" />
          <OperatorKeys
            displayKey="%"
            onClick={() => this.operatorSymbol("%")}
          />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="7" onClick={() => this.addNumber("7")} />
          <CalcKeys displayKey="8" onClick={() => this.addNumber("8")} />
          <CalcKeys displayKey="9" onClick={() => this.addNumber("9")} />
          <CalcKeys displayKey="0" onClick={() => this.addNumber("0")} />
        </View>
        <View style={styles.calcKeyRow}>
          <CountKey
            displayKey="="
            onClick={() =>
              this.evaluate(
                this.state.numerator,
                this.state.denominator,
                this.state.operator
              )
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
    alignItems: "center",
  },

  display: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 40,
    backgroundColor: "#ECECEC",
    width: "90%",
    height: "11%",
    borderRadius: 10,
  },

  title: {
    color: "black",
    textAlign: "center",
    fontSize: 36,
  },

  calcKeyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
    alignItems: "center",
    width: "95%",
  },

  calcKeyFirstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginVertical: 5,
    alignItems: "center",
    width: "95%",
  },
});
