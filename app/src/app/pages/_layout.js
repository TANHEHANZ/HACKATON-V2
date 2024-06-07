import { Slot } from "expo-router";
import FooterBar from "../../components/footerBar";
import { View } from "react-native";

export default function PagesLayout() {
  return (
    <>
      {/* <Header /> */}
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
      <FooterBar />
    </>
  );
}
