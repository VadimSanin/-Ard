
document.addEventListener("DOMContentLoaded", () => {
    // Находим все кнопки с классом toggle-btn
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Определяем цель кнопки
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Переключаем видимость секции
            if (targetSection) {
                targetSection.classList.toggle("hidden");
            }
        });
    });
});
