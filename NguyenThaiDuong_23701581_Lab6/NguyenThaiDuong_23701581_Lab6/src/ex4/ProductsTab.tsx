import React from "react";
import { FlatList, View, Text, Pressable, StyleSheet } from "react-native";
import { PHONES } from "../data/phones";
import { formatPrice, colors } from "../theme";
import { PhoneVisual } from "../components/PhoneVisual";
import { Stars } from "../components/Stars";
import type { TabProps } from "./types";
import type { Phone } from "../types";
function ProductRow({phone,onPress}:{phone:Phone;onPress:()=>void}){return <Pressable onPress={onPress} style={s.row}><PhoneVisual color={phone.defaultColor} small/><View style={{flex:1,gap:5}}><Text style={s.name}>{phone.name}</Text><Stars value={phone.rating}/><Text style={s.price}>{formatPrice(phone.price)}</Text></View><Text style={s.arrow}>›</Text></Pressable>;}
export function ProductsTab({navigation}:TabProps<"Products">){return <FlatList style={{backgroundColor:"#F4F5F7"}} contentContainerStyle={{padding:12}} data={PHONES} keyExtractor={p=>p.id} renderItem={({item})=><ProductRow phone={item} onPress={()=>navigation.navigate("ProductDetails",{id:item.id})}/>}/>;}
const s=StyleSheet.create({row:{flexDirection:"row",alignItems:"center",gap:12,padding:12,marginBottom:10,borderRadius:10,backgroundColor:"#fff"},name:{fontWeight:"700",color:colors.text},price:{fontWeight:"800",color:colors.red},arrow:{fontSize:24,color:colors.muted}});
