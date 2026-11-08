import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDebounce } from "../hooks/useDebounce";
import { CartItem } from "../types";
import { colors, formatPrice, radius } from "../theme";

interface Props {
  item: CartItem;
  onChangeQty: (bookId: number, quantity: number) => void;
  onRemove: (bookId: number) => void;
}

export function CartItemRow({ item, onChangeQty, onRemove }: Props) {
  const [qty, setQty] = useState(item.quantity);
  const debouncedQty = useDebounce(qty, 300);
  const canDec = qty > 1;
  const canInc = qty < item.stock;

  useEffect(() => {
    if (debouncedQty !== item.quantity) onChangeQty(item.bookId, debouncedQty);
  }, [debouncedQty, item.bookId, item.quantity, onChangeQty]);

  useEffect(() => {
    setQty(item.quantity);
  }, [item.quantity]);

  return (
    <View style={styles.row}>
      <View style={[styles.cover, { backgroundColor: item.color }]}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
        <Text style={styles.stock}>Còn {item.stock}</Text>
      </View>
      <View style={styles.quantityControl}>
        <Pressable
          style={[styles.quantityButton, !canDec && styles.disabled]}
          onPress={() => setQty((current) => current - 1)}
          disabled={!canDec}
          accessibilityLabel="Giảm"
        >
          <Text style={styles.quantityButtonText}>−</Text>
        </Pressable>
        <Text style={styles.qty}>{qty}</Text>
        <Pressable
          style={[styles.quantityButton, !canInc && styles.disabled]}
          onPress={() => setQty((current) => current + 1)}
          disabled={!canInc}
          accessibilityLabel="Tăng"
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => onRemove(item.bookId)} hitSlop={8} accessibilityLabel="Xóa khỏi giỏ">
        <Text style={styles.trash}>🗑️</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", backgroundColor: colors.card, borderRadius: radius.md, padding: 10, marginHorizontal: 12, marginVertical: 5, gap: 10 },
  cover: { width: 54, height: 72, borderRadius: radius.sm, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 26 },
  info: { flex: 1, gap: 2 },
  title: { fontWeight: "700", color: colors.text },
  price: { color: colors.indigo, fontWeight: "800" },
  stock: { color: colors.muted, fontSize: 12 },
  quantityControl: { flexDirection: "row", alignItems: "center", gap: 6 },
  quantityButton: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.line, alignItems: "center", justifyContent: "center" },
  quantityButtonText: { color: colors.navy, fontSize: 18, fontWeight: "700", lineHeight: 22 },
  disabled: { opacity: 0.4 },
  qty: { fontWeight: "800", color: colors.navy, fontSize: 16 },
  trash: { fontSize: 22 },
});
