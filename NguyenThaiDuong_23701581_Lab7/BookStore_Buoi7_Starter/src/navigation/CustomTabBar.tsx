import React from "react";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBar, type TabItem } from "../components/TabBar";
import { useCart } from "../store/hooks";

// Nối Tab Bar tự dựng với React Navigation: nhận { state, descriptors, navigation }
export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { totalQuantity } = useCart();
  const EMOJI: Record<string, string> = {
    Home: "🏠",
    Categories: "🗂️",
    Cart: "🛒",
    Account: "👤",
  };
  const items: TabItem[] = state.routes.map((route) => ({
    key: route.key,
    label: descriptors[route.key].options.title ?? route.name,
    emoji: EMOJI[route.name] ?? "•",
    ...(route.name === "Cart" ? { badge: totalQuantity } : {}),
  }));
  const onPress = (key: string) => {
    const route = state.routes.find((item) => item.key === key);
    if (!route) return;

    const isFocused = state.routes[state.index].key === key;
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return <TabBar items={items} activeKey={state.routes[state.index].key} onPress={onPress} />;
}
