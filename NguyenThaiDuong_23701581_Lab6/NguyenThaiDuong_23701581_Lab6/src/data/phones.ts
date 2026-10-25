import type { ColorKey, Phone } from "../types";
export const PHONE_COLORS: Record<ColorKey, { label: string; hex: string }> = {
  silver: { label: "bạc", hex: "#C9EEFA" },
  red: { label: "đỏ", hex: "#E53A2F" },
  black: { label: "đen", hex: "#000000" },
  blue: { label: "xanh", hex: "#2A4494" }
};
export const COLOR_ORDER: ColorKey[] = ["silver", "red", "black", "blue"];
export const PHONES: Phone[] = [
  { id: "1", name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng", price: 1790000, oldPrice: 1790000, rating: 5, reviewCount: 828, supplier: "Tiki Tradding", badge: "Ở ĐÂU RẺ HƠN HOÀN TIỀN", colors: COLOR_ORDER, defaultColor: "blue" },
  { id: "2", name: "Điện Thoại Vsmart Live 4 - Hàng chính hãng", price: 3990000, oldPrice: 4490000, rating: 5, reviewCount: 510, supplier: "Tiki Tradding", badge: "Ở ĐÂU RẺ HƠN HOÀN TIỀN", colors: COLOR_ORDER, defaultColor: "blue" },
  { id: "3", name: "Điện Thoại Vsmart Star 5 - Hàng chính hãng", price: 2490000, oldPrice: 2790000, rating: 4, reviewCount: 321, supplier: "Tiki Tradding", badge: "ƯU ĐÃI HÔM NAY", colors: COLOR_ORDER, defaultColor: "black" },
  { id: "4", name: "Điện Thoại Vsmart Active 3 - Hàng chính hãng", price: 3290000, oldPrice: 3590000, rating: 4, reviewCount: 275, supplier: "Tiki Tradding", badge: "ƯU ĐÃI HÔM NAY", colors: COLOR_ORDER, defaultColor: "red" },
  { id: "5", name: "Điện Thoại Vsmart Aris Pro - Hàng chính hãng", price: 6990000, oldPrice: 7490000, rating: 5, reviewCount: 192, supplier: "Tiki Tradding", badge: "Ở ĐÂU RẺ HƠN HOÀN TIỀN", colors: COLOR_ORDER, defaultColor: "blue" },
  { id: "6", name: "Điện Thoại Vsmart Bee 3 - Hàng chính hãng", price: 990000, oldPrice: 1190000, rating: 4, reviewCount: 148, supplier: "Tiki Tradding", badge: "GIÁ TỐT", colors: COLOR_ORDER, defaultColor: "silver" }
];
