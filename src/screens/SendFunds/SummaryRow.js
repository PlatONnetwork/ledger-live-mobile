// @flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import LText from "../../components/LText/index";

import colors from "../../colors";
import Touchable from "../../components/Touchable";

type Props = {
  title: React$Node,
  titleProps?: *,
  additionalInfo?: *,
  children: React$Node,
  onPress?: () => void,
};

type State = {};

class SummaryRow extends Component<Props, State> {
  render(): React$Node {
    const { title, children, titleProps, additionalInfo, onPress } = this.props;
    const titleContainer = (
      <View style={styles.titleContainer}>
        <LText style={[styles.title]} {...titleProps}>
          {title}
        </LText>
        <View style={styles.iconContainer}>
          {!!additionalInfo && <View>{additionalInfo}</View>}
        </View>
      </View>
    );
    return (
      <View style={[styles.root]}>
        {onPress ? (
          <Touchable onPress={onPress}>{titleContainer}</Touchable>
        ) : (
          titleContainer
        )}
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
    paddingRight: 16,
    paddingVertical: 16,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  title: {
    fontSize: 14,
    color: colors.grey,
  },
  iconContainer: {
    paddingLeft: 6,
  },
});

export default SummaryRow;
