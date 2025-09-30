import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import EachItem from "../../src/components/molecule/EachItem";
import FabBtn from "../../src/components/molecule/FabBtn";
import Header from "../../src/components/molecule/Header";
import { useGallery } from "../../src/context/GalleryContext";

const HomeScreen = () => {
  const { items } = useGallery();
  const router = useRouter();

  const handlePress = (item) => {
    router.push({
      pathname: "/(gallery)/caption-screen",
      params: { id: item.id }, // sirf id bhejna
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <EachItem data={items} onItemPress={handlePress} />
      <FabBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FF",
  },
});

export default HomeScreen;
