import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
type DrawerParamList={Home:undefined;Profile:undefined;Settings:undefined};
const Drawer=createDrawerNavigator<DrawerParamList>();
function HomeScreen({dark}:{dark?:boolean}){return <View style={[s.center,dark&&s.dark]}><Text style={[s.big,dark&&s.light]}>Xin chào 👋</Text></View>;}
function ProfileScreen({dark}:{dark?:boolean}){return <View style={[s.center,dark&&s.dark]}><View style={s.avatar}><Text style={s.avatarText}>NA</Text></View><Text style={[s.big,dark&&s.light]}>Nguyễn Văn An</Text><Text style={[s.muted,dark&&s.light]}>an.nguyen@example.com</Text></View>;}
function SettingsScreen({notify,setNotify,dark,setDark}:{notify:boolean;setNotify:(v:boolean)=>void;dark:boolean;setDark:(v:boolean)=>void}){return <View style={s.settings}><View style={s.settingRow}><Text style={s.label}>Nhận thông báo</Text><Switch value={notify} onValueChange={setNotify}/></View><View style={s.settingRow}><Text style={s.label}>Giao diện tối</Text><Switch value={dark} onValueChange={setDark}/></View><Text style={s.status}>Thông báo: {notify?"BẬT":"TẮT"} · Giao diện: {dark?"tối":"sáng"}</Text></View>;}
export function DrawerApp(){
 const [notify,setNotify]=useState(true);const [dark,setDark]=useState(false);
 return <NavigationContainer><Drawer.Navigator screenOptions={({route})=>({drawerActiveTintColor:colors.red,headerTitle:({Home:"Trang chủ",Profile:"Cá nhân",Settings:"Cài đặt"} as const)[route.name],drawerIcon:({color,size})=><Ionicons name={({Home:"home-outline",Profile:"person-outline",Settings:"settings-outline"} as const)[route.name]} color={color} size={size}/>})}>
 <Drawer.Screen name="Home">{()=> <HomeScreen dark={dark}/>}</Drawer.Screen>
 <Drawer.Screen name="Profile">{()=> <ProfileScreen dark={dark}/>}</Drawer.Screen>
 <Drawer.Screen name="Settings">{()=> <SettingsScreen notify={notify} setNotify={setNotify} dark={dark} setDark={setDark}/>}</Drawer.Screen>
 </Drawer.Navigator></NavigationContainer>;
}
const s=StyleSheet.create({center:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff",gap:8},dark:{backgroundColor:"#20232A"},light:{color:"#fff"},big:{fontSize:23,fontWeight:"800",color:colors.text},muted:{color:colors.muted},avatar:{width:96,height:96,borderRadius:48,backgroundColor:colors.blue,alignItems:"center",justifyContent:"center"},avatarText:{fontSize:30,fontWeight:"800",color:"#fff"},settings:{flex:1,padding:20,backgroundColor:"#fff"},settingRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:18,borderBottomWidth:1,borderColor:colors.line},label:{fontSize:16,color:colors.text},status:{marginTop:24,fontWeight:"700",color:colors.blue}});
