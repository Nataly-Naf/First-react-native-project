import { StatusBar } from "expo-status-bar";
import {
  Text,
  Alert,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post.jsx";
import axios from "axios";
import React from "react";
import { nanoid } from "nanoid";
import { FullAutoScreen } from "./FullAuto.jsx";

export const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const fetchAutos = () => {
    setLoading(true);
    axios
      .get("https://65d61695f6967ba8e3bd7bca.mockapi.io/autos")
      .then(({ data }) => {
        const updatedData = data.map((item) => ({ ...item, id: nanoid() }));
        setItems(updatedData);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Pictures download error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  React.useEffect(fetchAutos, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  const handlePress = (item) => {
    navigation.navigate("Car", {
      id: item.id,
      name: item.make,
      image: item.img,
      descr: item.description,
    });
  };
  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchAutos} />
        }
        data={items}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <Post
              title={item.description}
              imageUrl={item.img}
              createdAt={item.year}
            />
          </Pressable>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
};
