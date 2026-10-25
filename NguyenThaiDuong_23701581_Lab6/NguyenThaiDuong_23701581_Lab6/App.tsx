import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SelectPhoneApp } from "./src/ex1/SelectPhoneApp";
import { SelectPhoneApi } from "./src/ex1/SelectPhoneApi";
import { BottomTabApp } from "./src/ex3/BottomTabApp";
import { StackTabApp } from "./src/ex4/StackTabApp";
import { DrawerApp } from "./src/ex5/DrawerApp";
import { colors } from "./src/theme";

type LabKey = "menu" | "b1" | "b2" | "b3" | "b4" | "b5";

export default function App() {
  const [screen, setScreen] = useState<LabKey>("menu");
  if (screen === "b1") return <><StatusBar style="dark" /><SelectPhoneApp onBack={() => setScreen("menu")} /></>;
  if (screen === "b2") return <><StatusBar style="dark" /><SelectPhoneApi onBack={() => setScreen("menu")} /></>;
  if (screen === "b3") return <><StatusBar style="dark" /><BottomTabApp /></>;
  if (screen === "b4") return <><StatusBar style="dark" /><StackTabApp /></>;
  if (screen === "b5") return <><StatusBar style="dark" /><DrawerApp /></>;

  const items: { key: LabKey; title: string; description: string }[] = [
    { key: "b1", title: "Bài 1 – Select Phone", description: "Stack, chọn màu và truyền params" },
    { key: "b2", title: "Bài 2 – API", description: "Loading, lỗi, thử lại, MockAPI/offline" },
    { key: "b3", title: "Bài 3 – Bottom Tab", description: "Trang chủ, tìm kiếm, cá nhân" },
    { key: "b4", title: "Bài 4 – Stack + Tab", description: "Chi tiết sản phẩm và yêu thích" },
    { key: "b5", title: "Bài 5 – Drawer", description: "Trang chủ, cá nhân, cài đặt" }
  ];
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>LAB 06 – NAVIGATION</Text>
        <Text style={styles.subheading}>Chọn bài thực hành</Text>
        {items.map((item) => (
          <Pressable key={item.key} style={styles.card} onPress={() => setScreen(item.key)}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={styles.open}>MỞ BÀI  ›</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F4F5F7" },
  content: { padding: 20, gap: 14 },
  heading: { fontSize: 23, fontWeight: "800", color: colors.navy, marginTop: 24 },
  subheading: { color: colors.muted, marginBottom: 8 },
  card: { backgroundColor: "#fff", padding: 18, borderRadius: 12, borderWidth: 1, borderColor: colors.line },
  cardTitle: { fontSize: 17, fontWeight: "700", color: colors.text },
  cardDescription: { marginTop: 5, color: colors.muted },
  open: { marginTop: 12, color: colors.red, fontWeight: "800" }
});
