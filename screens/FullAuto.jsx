import React from "react";
import { View, Image, Text } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { Loading } from "../components/Loading";

const AutoImage = styled.Image`
  width: 100px;
  height: 100px;
`;
const AutoText = styled.Text`
  font-size: 14px;
`;
export const FullAutoScreen = ({ route, navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const { id, name, image, descr } = route.params;
  {
    console.log(route);
  }

  React.useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  if (loading) {
    return (
      <View>
        <Loading />;
      </View>
    );
  }
  return (
    <View
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "row",
        gap: 20,
      }}
    >
      <AutoImage source={{ uri: image }} />
      <AutoText>{descr}</AutoText>
    </View>
  );
};
