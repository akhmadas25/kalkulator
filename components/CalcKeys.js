import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class CalcKeys extends Component {
  render() {
    return (
      <View style={styles.calcKey}>
        <TouchableOpacity
          onPress={() => {
            this.props.onClick();
          }}
        >
          <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calcKey: {
    backgroundColor: "#FF5757",
    flex: 0.2,
    borderRadius: 10,
  },

  textDisplay: {
    color: "white",
    textAlign: "center",
    fontSize: 48,
    paddingVertical: 5
  },
});
