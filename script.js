// ==========================
// A. VALIDATION FORM
// ==========================
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Ngăn gửi form ngay

        // Xóa tất cả thông báo lỗi cũ
        clearErrors();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let hasError = false;

        // Kiểm tra tên không được để trống
        if (name === "") {
            showError("nameError", "⚠️ Vui lòng nhập họ tên!");
            document.getElementById("name").classList.add("input-error");
            hasError = true;
        }

        // Kiểm tra email đúng định dạng (sử dụng Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError("emailError", "⚠️ Email không hợp lệ! Vui lòng nhập đúng định dạng (vd: example@domain.com)");
            document.getElementById("email").classList.add("input-error");
            hasError = true;
        }

        // Kiểm tra nội dung/góp ý ít nhất 10 ký tự
        if (message.length < 10) {
            showError("messageError", "⚠️ Lời nhắn phải có ít nhất 10 ký tự!");
            document.getElementById("message").classList.add("input-error");
            hasError = true;
        }

        // Nếu không có lỗi thì gửi thành công
        if (!hasError) {
            alert("✅ Gửi thành công! Cảm ơn bạn đã liên hệ ❤️");
            form.reset();
        }
    });

    // Xóa lỗi khi người dùng bắt đầu nhập lại
    document.getElementById("name").addEventListener("input", function() {
        clearError("nameError");
        this.classList.remove("input-error");
    });
    
    document.getElementById("email").addEventListener("input", function() {
        clearError("emailError");
        this.classList.remove("input-error");
    });
    
    document.getElementById("message").addEventListener("input", function() {
        clearError("messageError");
        this.classList.remove("input-error");
    });
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearError(elementId) {
    document.getElementById(elementId).textContent = "";
}

function clearErrors() {
    const errorElements = ["nameError", "emailError", "messageError"];
    errorElements.forEach(id => clearError(id));
    
    // Xóa các class input-error
    document.querySelectorAll(".input-error").forEach(el => {
        el.classList.remove("input-error");
    });
}

// ==========================
// B. CHECKBOX "HOÀN THÀNH MỤC TIÊU"
// ==========================
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("table input[type='checkbox']").forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const row = this.closest("tr");
            if (this.checked) {
                row.classList.add("completed");
            } else {
                row.classList.remove("completed");
            }
        });
    });
});

// ==========================
// C. HIỆU ỨNG ẢNH ĐẠI DIỆN
// ==========================
document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.querySelector(".avatar img");
    
    avatar.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
        this.style.border = "4px solid #CAEDFF";
    });
    
    avatar.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.border = "none";
    });
});

// ==========================
// D. NÚT "LÊN ĐẦU TRANG"
// ==========================
document.addEventListener("DOMContentLoaded", function() {
    // Tạo nút "Lên đầu trang"
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

    // Hiện/ẩn nút khi scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    // Xử lý click để cuộn lên đầu trang
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
