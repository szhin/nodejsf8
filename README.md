# nodejsf8

GET và POST là hai phương thức của giao thức HTTP, đều là gửi dữ liệu về server xử lí sau khi người dùng nhập thông tin vào form và thực hiện submit.

Phương thức GET:
Gửi thông tin người dùng và đính lên đường dẫn URL. (query, có thể gọi bg req.query)
Băng thông của nó chỉ khoảng 1024 kí tự vì vây GET hạn chế về số kí tự được gửi đi.
GET không thể gửi dữ liệu nhị phân , hình ảnh ...
Có thể cached và được bookmark (đánh dấu trên trình duyệt), lưu trong browser history.

Phương thức POST:
Truyền thông tin thông qua HTTP header. (form data, có thể gọi bằng req.body)
Dữ liệu rất bảo mật vì dữ liệu được gửi ngầm, không đưa lên URL, bằng việc sử dụng Secure HTTP.
Parameters được truyền trong request body
Có thể truyền dữ liệu lớn, hạn chế tùy thuộc vào cấu hình của Server.
Không cache và bookmark được cũng như không được lưu lại trong browser history. + + Không hạn chế về kích thước dữ liệu khi gửi, có thể gửi dữ liệu nhị phân, hình ảnh.

CRUD
C: CREATE
R: READ
U: UPDATE
D: DELETE

Create: POST
Update: PUT, PATCH
Delete: DELETE
Read: GET

# middleware

### Ý nghĩa
- Phần mềm trung gian đứng giữa các thành phần

browser(client) ---- request ----> server(node)
browser(client) <--- request ----- server(node)

### Vai trò 
- giống bác bảo vệ
Nhà ----> bác bảo vệ 1(middleware 1): Bác 2 (middleware 2):sự kiện (soát vé)
Nhà <---- Sự kiện

1. Soát vé (kiểm soát - Validation)
2. Ko cho vào
3. Cho phép vào
4: chỉnh sửa, thay đổi

### Ứng dụng
- Dựng chức năng xác thực (authentication)
- Chức năng phân quyền (Authorization)
- Chia sẻ các giá trị của biến tới tất cả các views (BE)
