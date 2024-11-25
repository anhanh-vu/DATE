// script.js
document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy dữ liệu từ các trường input
    const date = document.getElementById('date').value;
    const place = document.getElementById('place').value;

    // Kiểm tra xem người dùng đã nhập đầy đủ thông tin chưa
    if (date && place) {
        // Hiển thị thông báo xác nhận
        document.getElementById('responseMessage').innerHTML = `
            Em sẽ hẹn em vào ${date} và chúng ta sẽ đi đến ${place}. ❤️
            <br>
            Em có đồng ý không? 😘
        `;
    } else {
        // Nếu thiếu thông tin, yêu cầu người dùng nhập lại
        document.getElementById('responseMessage').innerHTML = `
            Vui lòng nhập đầy đủ thông tin để gửi lời mời! ❌
        `;
    }
});
