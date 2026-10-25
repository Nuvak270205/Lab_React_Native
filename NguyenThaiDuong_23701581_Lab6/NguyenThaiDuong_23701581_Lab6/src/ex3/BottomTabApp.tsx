import React, { useMemo, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { PHONES } from "../data/phones";
import { colors } from "../theme";
import { Stars } from "../components/Stars";
import { PhoneVisual } from "../components/PhoneVisual";
import type { Phone } from "../types";
type TabParamList={Home:undefined;Search:undefined;Profile:undefined};
const Tab=createBottomTabNavigator<TabParamList>();
const ICONS:Record<keyof TabParamList,[keyof typeof Ionicons.glyphMap,keyof typeof Ionicons.glyphMap]>={Home:["home","home-outline"],Search:["search","search-outline"],Profile:["person","person-outline"]};
function HomeTab(){return <FlatList style={{backgroundColor:"#F4F5F7"}} contentContainerStyle={s.list} data={PHONES} keyExtractor={p=>p.id} renderItem={({item})=><PhoneRow phone={item}/>}/>;}
function SearchTab(){
 const [keyword,setKeyword]=useState("");
 const filtered=useMemo(()=>PHONES.filter(p=>p.name.toLowerCase().includes(keyword.trim().toLowerCase())),[keyword]);
 return <View style={s.page}><TextInput value={keyword} onChangeText={setKeyword} placeholder="Nhập từ khóa" style={s.input}/>{filtered.length===0?<Text style={s.empty}>Không có kết quả cho “{keyword}”</Text>:<FlatList data={filtered} keyExtractor={p=>p.id} renderItem={({item})=><PhoneRow phone={item}/>}/>}</View>;
}
function ProfileTab(){return <View style={s.profile}><View style={s.avatar}><Text style={s.avatarText}>A</Text></View><Text style={s.profileName}>Nguyễn Văn An</Text><Text style={s.muted}>an.nguyen@example.com</Text></View>;}
function PhoneRow({phone}:{phone:Phone}){return <View style={s.row}><PhoneVisual color={phone.defaultColor} small/><View style={{flex:1,gap:5}}><Text style={s.name}>{phone.name}</Text><Stars value={phone.rating}/><Text style={s.price}>{phone.price.toLocaleString("vi-VN")} đ</Text></View></View>;}
export function BottomTabApp(){return <NavigationContainer><Tab.Navigator screenOptions={({route})=>({headerTitle:({Home:"Trang chủ",Search:"Tìm kiếm",Profile:"Cá nhân"} as const)[route.name],tabBarActiveTintColor:colors.red,tabBarIcon:({focused,color,size})=><Ionicons name={ICONS[route.name][focused?0:1]} size={size} color={color}/>})}><Tab.Screen name="Home" component={HomeTab}/><Tab.Screen name="Search" component={SearchTab}/><Tab.Screen name="Profile" component={ProfileTab}/></Tab.Navigator></NavigationContainer>;}
const s=StyleSheet.create({list:{padding:12,gap:10},page:{flex:1,padding:14,backgroundColor:"#F4F5F7"},input:{backgroundColor:"#fff",borderRadius:8,borderWidth:1,borderColor:colors.line,paddingHorizontal:14,paddingVertical:12,marginBottom:12},row:{flexDirection:"row",gap:14,alignItems:"center",backgroundColor:"#fff",padding:12,borderRadius:10,marginBottom:10},name:{fontSize:14,color:colors.text,fontWeight:"600"},price:{color:colors.red,fontSize:16,fontWeight:"800"},empty:{textAlign:"center",marginTop:30,color:colors.muted},profile:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff",gap:8},avatar:{width:96,height:96,borderRadius:48,backgroundColor:colors.blue,alignItems:"center",justifyContent:"center",marginBottom:10},avatarText:{fontSize:36,color:"#fff",fontWeight:"800"},profileName:{fontSize:22,fontWeight:"800",color:colors.text},muted:{color:colors.muted}});
