// ==========================
// A. VALIDATION FORM
// ==========================
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn gửi form ngay

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Vui lòng nhập họ tên!");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ!");
        return;
    }
    if (message.length < 10) {
        alert("Lời nhắn phải có ít nhất 10 ký tự!");
        return;
    }

    alert("Gửi thành công! Cảm ơn bạn đã liên hệ ❤️");
    e.target.reset();
});

// ==========================
// B. CHECKBOX "HOÀN THÀNH MỤC TIÊU"
// ==========================
document.querySelectorAll("table input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        const row = this.closest("tr");
        if (this.checked) {
            row.style.backgroundColor = "#c6f5c6";
            row.style.textDecoration = "line-through";
        } else {
            row.style.backgroundColor = "";
            row.style.textDecoration = "none";
        }
    });
});

// ==========================
// C. HIỆU ỨNG ẢNH ĐẠI DIỆN
// ==========================
const avatar = document.querySelector(".avatar img");
avatar.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
    this.style.border = "4px solid #CAEDFF";
});
avatar.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
    this.style.border = "none";
});

// ==========================
// D. NÚT "LÊN ĐẦU TRANG"
// ==========================
const topButton = document.createElement("button");
topButton.textContent = "⬆ Lên đầu trang";
topButton.id = "backToTop";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.display = "none";
topButton.style.padding = "10px 15px";
topButton.style.background = "#0077cc";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "8px";
topButton.style.cursor = "pointer";
topButton.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
document.body.appendChild(topButton);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});
topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
