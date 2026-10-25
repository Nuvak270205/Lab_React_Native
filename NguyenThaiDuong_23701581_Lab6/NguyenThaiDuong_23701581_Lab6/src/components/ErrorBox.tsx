import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../theme";
export function ErrorBox({message,onRetry}:{message:string;onRetry:()=>void}) { return <View style={s.box}><Text style={s.title}>Không tải được dữ liệu</Text><Text style={s.message}>{message}</Text><Pressable onPress={onRetry} style={s.btn}><Text style={s.btnText}>THỬ LẠI</Text></Pressable></View>; }
const s=StyleSheet.create({box:{flex:1,alignItems:"center",justifyContent:"center",padding:24,backgroundColor:"#fff"},title:{fontSize:18,fontWeight:"800",color:colors.red},message:{marginTop:10,textAlign:"center",color:colors.text},btn:{marginTop:18,paddingVertical:12,paddingHorizontal:28,backgroundColor:colors.blue,borderRadius:6},btnText:{color:"#fff",fontWeight:"800"}});
