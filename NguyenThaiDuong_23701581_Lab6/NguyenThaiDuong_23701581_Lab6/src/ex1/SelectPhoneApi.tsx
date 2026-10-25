import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import type { Phone } from "../types";
import { fetchPhone, USING_API } from "../api/phoneApi";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { SelectPhoneApp } from "./SelectPhoneApp";
import { colors } from "../theme";
export function SelectPhoneApi({onBack}:{onBack?:()=>void}) {
  const [phone,setPhone] = useState<Phone|null>(null);
  const [error,setError] = useState<string|null>(null);
  const load = useCallback(async () => {
    setError(null); setPhone(null);
    try { setPhone(await fetchPhone("1")); }
    catch (e) { setError(e instanceof Error ? e.message : "Đã xảy ra lỗi không xác định."); }
  },[]);
  useEffect(()=>{ void load(); },[load]);
  if(error) return <View style={{flex:1}}><Pressable onPress={onBack} style={{padding:12}}><Text style={{color:colors.blue}}>‹ Menu</Text></Pressable><ErrorBox message={error} onRetry={load}/></View>;
  if(!phone) return <Loading />;
  // API data is passed to a dedicated SelectPhoneApp so the local app remains reusable.
  return <SelectPhoneApp phoneOverride={phone} onBack={onBack}/>;
}
