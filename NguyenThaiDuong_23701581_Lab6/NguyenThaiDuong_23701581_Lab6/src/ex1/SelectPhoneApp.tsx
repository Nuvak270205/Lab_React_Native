import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import type { ColorKey, Phone } from "../types";
import { PHONES, PHONE_COLORS, COLOR_ORDER } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";
import { PhoneVisual } from "../components/PhoneVisual";

export type SelectPhoneParamList = { Product: { color?: ColorKey } | undefined; ChooseColor: { color?: ColorKey } | undefined };
const Stack = createNativeStackNavigator<SelectPhoneParamList>();
export function SelectPhoneApp({ onBack, phoneOverride }: { onBack?: () => void; phoneOverride?: Phone }) {
  return <NavigationContainer><Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Product">{(props) => <ProductScreen {...props} phone={phoneOverride ?? PHONES[0]} onBack={onBack} />}</Stack.Screen>
    <Stack.Screen name="ChooseColor">{(props) => <ChooseColorScreen {...props} phone={phoneOverride ?? PHONES[0]} />}</Stack.Screen>
  </Stack.Navigator></NavigationContainer>;
}
type ProductProps = NativeStackScreenProps<SelectPhoneParamList, "Product"> & { phone: Phone; onBack?: () => void };
function ProductScreen({ navigation, route, phone, onBack }: ProductProps) {
  const picked = route.params?.color;
  const shown = picked ?? phone.defaultColor;
  return <SafeAreaView style={s.root}>
    <View style={s.topbar}><Pressable onPress={onBack}><Text style={s.back}>{onBack ? "‹ Menu" : ""}</Text></Pressable><Text style={s.brand}>TIKI</Text><Text style={s.cart}>🛒</Text></View>
    <ScrollView contentContainerStyle={s.productContent}>
      <View style={s.imageWrap}><PhoneVisual color={shown} /></View>
      <Text style={s.name}>{phone.name}</Text>
      <View style={s.row}><Stars value={phone.rating}/><Text style={s.review}>(Xem {phone.reviewCount} đánh giá)</Text></View>
      <View style={s.row}><Text style={s.price}>{formatPrice(phone.price)}</Text><Text style={s.oldPrice}>{formatPrice(phone.oldPrice)}</Text></View>
      <Text style={s.badge}>{phone.badge}</Text>
      <Pressable style={s.chooseBtn} onPress={() => navigation.navigate("ChooseColor", { color: picked })}>
        <Text style={s.chooseText}>4 MÀU-CHỌN {picked ? "LOẠI" : "MÀU"}</Text><Text style={s.chevron}>›</Text>
      </Pressable>
    </ScrollView>
    <Pressable style={s.buyBtn} onPress={() => {}}><Text style={s.buyText}>CHỌN MUA</Text></Pressable>
  </SafeAreaView>;
}
type ChooseProps = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & { phone: Phone };
function ChooseColorScreen({ navigation, route, phone }: ChooseProps) {
  const [picked, setPicked] = React.useState<ColorKey | undefined>(route.params?.color);
  const [line1, line2] = phone.name.split(" - ");
  return <SafeAreaView style={s.root}>
    <View style={s.topbar}><Pressable onPress={() => navigation.goBack()}><Text style={s.back}>‹ Quay lại</Text></Pressable><Text style={s.brand}>Chọn màu</Text><View style={{width:45}} /></View>
    <View style={s.header}>
      <PhoneVisual color={picked ?? phone.defaultColor} small />
      <View style={s.headerText}><Text style={s.small}>{line1}</Text><Text style={s.small}>{line2}</Text>
        {picked && <><Text style={s.detail}>Màu: <Text style={{fontWeight:"800"}}>{PHONE_COLORS[picked].label}</Text></Text><Text style={s.detail}>Cung cấp bởi <Text style={{fontWeight:"800"}}>{phone.supplier}</Text></Text><Text style={s.detailBold}>{formatPrice(phone.price)}</Text></>}
      </View>
    </View>
    <View style={s.body}><Text style={s.hint}>Chọn một màu bên dưới:</Text>
      {COLOR_ORDER.map((key) => <Pressable key={key} onPress={() => setPicked(key)} style={[s.swatchRow, picked === key && s.swatchSelected]}>
        <View style={[s.swatch, {backgroundColor: PHONE_COLORS[key].hex}]} /><Text style={s.swatchText}>{PHONE_COLORS[key].label}</Text>{picked === key && <Text style={s.check}>✓</Text>}
      </Pressable>)}
      <Pressable style={s.doneBtn} onPress={() => navigation.navigate("Product", { color: picked }, { merge: true })}><Text style={s.doneText}>XONG</Text></Pressable>
    </View>
  </SafeAreaView>;
}
const s = StyleSheet.create({
  root:{flex:1,backgroundColor:"#fff"}, topbar:{height:48,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16,borderBottomWidth:1,borderColor:"#eee"},
  back:{color:colors.blue,fontWeight:"700",width:55},brand:{fontWeight:"800",color:colors.navy,fontSize:16},cart:{width:30,textAlign:"right"},productContent:{padding:16,paddingBottom:24},
  imageWrap:{height:300,alignItems:"center",justifyContent:"center"},name:{fontSize:16,color:colors.text,fontWeight:"500",marginTop:10},row:{flexDirection:"row",alignItems:"center",gap:10,marginTop:9},
  review:{fontSize:12,color:colors.muted},price:{fontSize:20,fontWeight:"800",color:colors.text},oldPrice:{fontSize:14,color:colors.muted,textDecorationLine:"line-through"},badge:{marginTop:10,color:colors.red,fontWeight:"800",fontSize:11},
  chooseBtn:{marginTop:18,borderWidth:1,borderColor:colors.line,borderRadius:6,padding:15,justifyContent:"center"},chooseText:{fontWeight:"800",fontSize:13,color:colors.text},chevron:{position:"absolute",right:12,fontSize:25,color:colors.muted},
  buyBtn:{backgroundColor:colors.red,marginHorizontal:16,marginBottom:12,borderRadius:6,padding:16,alignItems:"center"},buyText:{color:"#fff",fontWeight:"900"},
  header:{flexDirection:"row",padding:18,gap:16,minHeight:165,alignItems:"center"},headerText:{flex:1,gap:5},small:{fontSize:13,color:colors.text},detail:{fontSize:12,color:colors.text,marginTop:3},detailBold:{fontSize:16,fontWeight:"800",marginTop:3},
  body:{flex:1,backgroundColor:"#F0F0F0",padding:18},hint:{fontSize:15,fontWeight:"700",marginBottom:10},swatchRow:{height:52,backgroundColor:"#fff",borderRadius:8,marginBottom:8,flexDirection:"row",alignItems:"center",paddingHorizontal:12,gap:12,borderWidth:1,borderColor:"transparent"},
  swatchSelected:{borderColor:"#222",borderWidth:2},swatch:{width:30,height:30,borderRadius:4,borderWidth:1,borderColor:"#bbb"},swatchText:{textTransform:"capitalize",fontSize:15,flex:1},check:{fontWeight:"900",fontSize:18,color:colors.red},
  doneBtn:{marginTop:12,backgroundColor:colors.blue,padding:15,alignItems:"center",borderRadius:4},doneText:{color:"#fff",fontWeight:"900"}
});
