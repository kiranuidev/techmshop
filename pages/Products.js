import React, { Component } from "react";
import { View, Text,Button } from "react-native";
import TopNav from "../components/TopNav";
import { Card,Icon } from "react-native-elements";
export default class Products extends Component {
  static navigationOptions = ({ navigation }) => {
    navigation.title = "Products";
    return {
      header: <TopNav navigation={navigation} />
    };
  };
  render() {
    return (
      <View>
        <Card title="HELLO WORLD" image={require("../images/1.png")}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    );
  }
}
