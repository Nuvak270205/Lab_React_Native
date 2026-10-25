import React from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { PHONES } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { PhoneVisual } from "../components/PhoneVisual";
import { Stars } from "../components/Stars";
import { useFavorites } from "./FavoritesContext";
import type { RootProps } from "./types";
export function ProductDetailsScreen({route}:RootProps<"ProductDetails">){
 const {id}=route.params;const phone=PHONES.find(p=>p.id===id);const {has,toggle}=useFavorites();
 if(!phone)return <View style={s.center}><Text>Không tìm thấy sản phẩm #{id}</Text></View>;
 const saved=has(phone.id);
 return <ScrollView contentContainerStyle={s.page}><PhoneVisual color={phone.defaultColor}/><Text style={s.name}>{phone.name}</Text><Stars value={phone.rating}/><Text style={s.price}>{formatPrice(phone.price)}</Text><Text style={s.supplier}>Cung cấp bởi {phone.supplier}</Text><Pressable style={[s.btn,saved&&s.saved]} onPress={()=>toggle(phone.id)}><Text style={s.btnText}>{saved?"♥ Đã lưu":"♡ Lưu vào yêu thích"}</Text></Pressable></ScrollView>;
}
const s=StyleSheet.create({page:{alignItems:"center",padding:20,gap:14,backgroundColor:"#fff",flexGrow:1},center:{flex:1,alignItems:"center",justifyContent:"center"},name:{fontSize:18,fontWeight:"700",textAlign:"center"},price:{fontSize:22,fontWeight:"900",color:colors.red},supplier:{color:colors.muted},btn:{marginTop:10,backgroundColor:colors.red,padding:15,borderRadius:8,width:"100%",alignItems:"center"},saved:{backgroundColor:colors.blue},btnText:{color:"#fff",fontWeight:"800"}});
