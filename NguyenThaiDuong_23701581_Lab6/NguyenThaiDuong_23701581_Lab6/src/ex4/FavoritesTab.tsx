import React from "react";
import { FlatList, View, Text, Pressable, StyleSheet } from "react-native";
import { PHONES } from "../data/phones";
import { useFavorites } from "./FavoritesContext";
import { formatPrice, colors } from "../theme";
import { PhoneVisual } from "../components/PhoneVisual";
import type { TabProps } from "./types";
export function FavoritesTab({navigation}:TabProps<"Favorites">){
 const {ids}=useFavorites();const favorites=PHONES.filter(p=>ids.includes(p.id));
 if(!favorites.length)return <View style={s.empty}><Text>Chưa có sản phẩm nào được lưu.</Text></View>;
 return <FlatList style={{backgroundColor:"#F4F5F7"}} contentContainerStyle={{padding:12}} data={favorites} keyExtractor={p=>p.id} renderItem={({item})=><Pressable style={s.row} onPress={()=>navigation.navigate("ProductDetails",{id:item.id})}><PhoneVisual color={item.defaultColor} small/><View style={{flex:1,gap:6}}><Text style={s.name}>{item.name}</Text><Text style={s.price}>{formatPrice(item.price)}</Text></View></Pressable>}/>;
}
const s=StyleSheet.create({empty:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},row:{backgroundColor:"#fff",padding:12,marginBottom:10,borderRadius:10,flexDirection:"row",alignItems:"center",gap:12},name:{fontWeight:"700",color:colors.text},price:{fontWeight:"800",color:colors.red}});
