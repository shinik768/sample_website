document.addEventListener("DOMContentLoaded", () => {
    // 各リンクボタンを取得
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        // マウスオーバーで色を変更
        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "#ffea00";  // 色を変更
            link.style.color = "black";  // 文字色を変更
        });

        // マウスが外れた時に元の色に戻す
        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "#007bff";  // 元の色に戻す
            link.style.color = "white";  // 元の文字色に戻す
        });
    });
});