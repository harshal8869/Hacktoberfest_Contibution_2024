document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box-item');

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            alert(`${this.textContent} clicked!`);
        });
    });
});
