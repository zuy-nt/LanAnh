
const images = ['h1.png', 'h3.png', 'q3.png', 't2.png', 't5.png'];

function openGift() {
    // Bổ sung: Phát nhạc khi ấn vào hộp quà
    const music = document.getElementById('music');
    music.play().catch(error => {
        console.log("Trình duyệt chặn tự động phát nhạc:", error);
    });

    // 1. Ẩn trang quà
    document.getElementById('gift-page').classList.add('hidden');
    
    // 2. Hiện trang lời chúc
    const wishPage = document.getElementById('wish-page');
    wishPage.classList.remove('hidden');

    // 3. Bắt đầu tạo hiệu ứng rơi liên tục
    setInterval(createFallingItem, 400); // Cứ 0.4 giây tạo 1 hình mới
}

function createFallingItem() {
    const item = document.createElement('img');
    
    // Lấy ngẫu nhiên 1 tấm hình từ danh sách
    const randomSrc = images[Math.floor(Math.random() * images.length)];
    item.src = randomSrc;
    item.className = 'falling-img';

    // Các thông số ngẫu nhiên để trông tự nhiên hơn
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * (70 - 30) + 30; // Kích thước từ 30px đến 70px
    const duration = Math.random() * (5 - 3) + 3; // Tốc độ rơi từ 3s đến 5s

    item.style.left = startX + 'px';
    item.style.width = size + 'px';
    item.style.animationDuration = duration + 's';
    item.style.opacity = Math.random() * (1 - 0.7) + 0.7; // Độ trong suốt nhẹ

    document.body.appendChild(item);

    // Xóa ảnh khi rơi xong để giải phóng bộ nhớ
    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}