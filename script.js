const menuBtn = document.getElementById ("menu-btn");
const mobileMenu = document.getElementById ("mobile-menu");

menuBtn.addEventListener("click" , ()=> {
    mobileMenu.classList.toggle("hidden");
});

// Theme Toggle
const themeToggleBtns = document.querySelectorAll('#theme-toggle');
const handleThemeToggle = () => {
    document.documentElement.classList.toggle('dark')
}
themeToggleBtns.forEach(btn => {
    btn.addEventListener('click' , handleThemeToggle)
})

// Start Counter
document.addEventListener("DOMContentLoaded", function () {
    const counts = document.querySelectorAll('.count'); // تحديد جميع عناصر العداد
    const speed = 97; // سرعة العد

    // دالة تشغيل العداد
    const startCounter = (counter) => {
        function upDate() {
            const target = Number(counter.getAttribute('data-target'));
            const count = Number(counter.innerText);
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.floor(inc + count);
                setTimeout(upDate, 15);
            } else {
                counter.innerText = target;
            }
        }
        upDate();
    };
    // إعداد مراقب ظهور القسم
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target); // تشغيل العداد
                observer.unobserve(entry.target); // إيقاف المراقبة لمنع إعادة العد
            }
        });
    }, { threshold: 0.5 }); // يتم التفعيل عند ظهور 50% من العنصر

    // مراقبة جميع العدادات داخل القسم
    counts.forEach(count => observer.observe(count));
});
