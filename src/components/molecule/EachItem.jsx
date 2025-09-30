import {
    Dimensions,
    FlatList,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const EachItem = ({ data, onItemPress }) => {
  const isWeb = Platform.OS === "web";
  const screenWidth = Dimensions.get("window").width;

  const numColumns = isWeb ? 5 : 3;
  const gap = 10;
  const itemWidth = (screenWidth - gap * (numColumns + 1)) / numColumns;
  const imgHeight = isWeb ? 180 : 100;
  const fontSize = isWeb ? 16 : 12;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => onItemPress(item)}
      style={[
        styles.parentContainer,
        { width: itemWidth, marginRight: gap, marginBottom: gap },
      ]}
    >
      <View style={styles.container}>
        <Image
          source={item.image}
          style={{
            width: itemWidth,
            height: imgHeight,
            resizeMode: "contain",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
          }}
        />
        <Text style={[styles.desc, { fontSize }]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      key={numColumns}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: gap, paddingBottom: gap }}
    />
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  desc: {
    fontWeight: "400",
    marginTop: 4,
  },
});

export default EachItem;
