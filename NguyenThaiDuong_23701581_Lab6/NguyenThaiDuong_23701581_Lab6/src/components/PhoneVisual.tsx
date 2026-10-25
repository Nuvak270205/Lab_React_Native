import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { ColorKey } from "../types";
import { PHONE_COLORS } from "../data/phones";

/** Hình điện thoại minh họa bằng View để project chạy ngay khi chưa có ảnh PNG. */
export function PhoneVisual({ color, small = false }: { color: ColorKey; small?: boolean }) {
  const hex = PHONE_COLORS[color].hex;
  const dark = color === "black" || color === "blue" || color === "red";
  return (
    <View style={[s.device, small && s.small, { backgroundColor: hex, borderColor: dark ? "#20232A" : "#9AA3AD" }]}>
      <View style={[s.camera, { backgroundColor: dark ? "#222" : "#53616B" }]} />
      <View style={[s.lens, { backgroundColor: "#0C1117" }]} />
      <View style={[s.lens2, { backgroundColor: "#0C1117" }]} />
      <View style={[s.logo, { backgroundColor: dark ? "#FFFFFF55" : "#4B5964" }]} />
      <Text style={[s.phoneText, { color: dark ? "#FFFFFF90" : "#334155" }]}>V</Text>
    </View>
  );
}
const s = StyleSheet.create({
  device: { width: 164, height: 270, borderRadius: 24, borderWidth: 4, alignItems: "center", justifyContent: "center", elevation: 3 },
  small: { width: 76, height: 126, borderRadius: 14, borderWidth: 3 },
  camera: { position: "absolute", top: 14, left: 12, width: 38, height: 48, borderRadius: 10 },
  lens: { position: "absolute", top: 21, left: 19, width: 11, height: 11, borderRadius: 6 },
  lens2: { position: "absolute", top: 37, left: 19, width: 11, height: 11, borderRadius: 6 },
  logo: { width: 18, height: 18, borderRadius: 9, position: "absolute", top: "48%" },
  phoneText: { position: "absolute", bottom: 22, fontSize: 16, fontWeight: "800" }
});
