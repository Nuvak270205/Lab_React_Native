# Lab 06 – Navigation (Expo + React Native + TypeScript)

## Chạy project
```powershell
npm install
npm run typecheck
npx expo start
```
Quét QR bằng Expo Go, hoặc nhấn `w` nếu muốn thử bản web và môi trường hỗ trợ.

## Bài thực hành
- Bài 1: Select Phone, Stack, chọn màu và truyền params.
- Bài 2: fetch API, loading, error, retry; mặc định dùng dữ liệu offline.
- Bài 3: Bottom Tabs Home/Search/Profile.
- Bài 4: Stack + Tabs + ProductDetails + Favorites Context.
- Bài 5: Drawer + Settings Switch.

## API MockAPI (Bài 2)
Tạo resource `phones`, nhập record có `id` là `1` và các trường tương ứng Phone. Sau đó tạo file `.env` từ `.env.example` và đặt:
```
EXPO_PUBLIC_API_URL=https://YOUR_PROJECT.mockapi.io/api/v1
```
Khởi động lại Expo bằng:
```powershell
npx expo start -c
```
Endpoint được gọi là `${EXPO_PUBLIC_API_URL}/phones/1`.

## Ghi chú
- Để project có thể chạy ngay mà không cần tải hình, hình điện thoại ở Bài 1/3/4 được minh họa bằng React Native Views. Nếu giảng viên yêu cầu khớp chính xác Figma, thay `PhoneVisual` bằng ảnh PNG sản phẩm trong `assets/phones`.
- `CHỌN MUA` là nút giao diện vì tài liệu không yêu cầu xử lý mua hàng.
- Mỗi bài có `NavigationContainer` riêng và menu App chỉ render một bài tại một thời điểm.
