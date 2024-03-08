import Colors from "@/constants/Colors";
import { StyleSheet, Text, Image, Pressable } from "react-native";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/dafault.png";

type ProductListItemprops = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemprops) => {
  return (
        <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name} </Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 8,
  },

  price: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.light.tint,
  },
});
