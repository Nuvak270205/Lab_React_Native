# Trả lời câu hỏi bổ sung — Buổi 9

**1. Giá trị dẫn xuất.**
`errors` và `valid` đều suy ra được từ `name`, `phone`, `address` và giỏ hàng, nên tính trực tiếp mỗi lần render thì luôn khớp với dữ liệu hiện tại. Nếu lưu bằng `useState` riêng thì phải nhớ cập nhật ở mọi chỗ gọi `setName`, `setPhone`, `setAddress` và khi giỏ đổi. Quên một chỗ là lỗi đỏ hiện sai, hoặc nút "Xác nhận đặt hàng" sáng/mờ không đúng với nội dung form.

**2. Thứ tự gọi.**
Nếu `clear()` chạy trước `await createOrder(...)` mà lúc đó mất mạng thì đơn chưa được tạo nhưng giỏ đã trống, người dùng mất sạch hàng đã chọn và phải chọn lại từ đầu. Đặt `clear()` ngay sau `createOrder` là đúng vì chỉ khi server đã nhận đơn (không ném lỗi) mới xoá giỏ. Nếu lỗi, code nhảy vào `catch`, giỏ còn nguyên và người dùng bấm đặt lại được.

**3. PUT hay PATCH.**
`PUT /users/1` với `{ name, phone }` sẽ thay cả object, nên user đó chỉ còn `id`, `name`, `phone` và mất `email`, `password` (đăng nhập sẽ hỏng). `PATCH` chỉ đổi những trường được gửi, các trường còn lại giữ nguyên, nên an toàn cho form chỉ sửa một phần như hồ sơ. Vì json-server trả về cả `password`, hàm `updateProfile` còn phải loại trường này trước khi đưa vào store.

**4. Cập nhật lạc quan.**
Nếu bỏ đoạn hoàn lại `read: false` trong `catch` thì khi mất mạng giao diện vẫn báo "đã đọc" trong khi server vẫn là chưa đọc. Mở lại màn hình hoặc tải lại app thì thông báo bỗng quay về chưa đọc, rất khó hiểu. Nên dùng cách này cho thao tác nhẹ, ít khi sai và dễ hoàn tác, ví dụ thả tim yêu thích hoặc đánh dấu đã đọc. Không nên dùng cho thanh toán / đặt hàng, vì phải chắc server đã nhận đơn mới được báo thành công và xoá giỏ.

**5. Code bổ sung: bộ lọc trạng thái ở màn Đơn hàng.**
Thêm một state `status` và một chỗ lọc dữ liệu truyền cho `FlatList` (đã làm trong `src/screens/OrdersScreen.tsx`):

```tsx
type StatusFilter = "all" | OrderStatus;
const FILTERS: { key: StatusFilter; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "pending", label: "Chờ xác nhận" },
  { key: "shipping", label: "Đang giao" },
  { key: "completed", label: "Hoàn tất" },
  { key: "cancelled", label: "Đã huỷ" },
];

const [status, setStatus] = useState<StatusFilter>("all");

const visibleOrders = useMemo(
  () => orders.filter((o) => status === "all" || o.status === status),
  [orders, status]
);

// hàng nút lọc
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
  {FILTERS.map((f) => (
    <Pressable key={f.key} onPress={() => setStatus(f.key)}
      style={[styles.chip, status === f.key && styles.chipActive]}>
      <Text style={[styles.chipText, status === f.key && styles.chipTextActive]}>{f.label}</Text>
    </Pressable>
  ))}
</ScrollView>

// FlatList dùng data={visibleOrders}
```

> Thử thách BT9.C1 ("Mua lại") đã làm: nút hiện ở đơn `completed`, gọi `getBooks()` lấy giá/tồn kho mới nhất, cùng sách thì cộng số lượng (`setQty` tự chặn ở tồn kho) rồi chuyển sang tab Giỏ.
