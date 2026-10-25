import { PHONES } from "../data/phones";
import type { Phone } from "../types";
export const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? "").replace(/\/$/, "");
export const USING_API = API_URL.length > 0;
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve,ms));
export async function fetchPhone(id:string):Promise<Phone> {
  if (!USING_API) {
    await sleep(700);
    const found = PHONES.find(p => p.id === id);
    if (!found) throw new Error("Không tìm thấy sản phẩm");
    return found;
  }
  let response: Response;
  try { response = await fetch(`${API_URL}/phones/${id}`); }
  catch { throw new Error("Không kết nối được máy chủ. Hãy kiểm tra mạng và API URL."); }
  if (!response.ok) throw new Error(`Máy chủ trả về lỗi ${response.status}`);
  const data = await response.json() as Phone;
  if (!data || !data.id || !data.name || typeof data.price !== "number") throw new Error("Dữ liệu API không đúng định dạng Phone.");
  return data;
}
