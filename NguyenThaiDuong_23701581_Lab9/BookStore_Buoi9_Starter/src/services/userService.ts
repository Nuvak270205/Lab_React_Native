import { api } from "../api/client";
import { User } from "../types";

// BT9.4: PATCH /users/:id chỉ với { name, phone } (PATCH chỉ đổi trường được gửi, PUT sẽ làm mất email/password).
// json-server trả cả `password` → loại password khỏi kết quả trước khi return (không đưa mật khẩu vào store).
export async function updateProfile(id: number, data: Pick<User, "name" | "phone">): Promise<User> {
  const res = await api.patch<User & { password?: string }>(`/users/${id}`, data);
  const { password: _password, ...user } = res.data;
  return user;
}
