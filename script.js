// Countdown Timer Logic
document.addEventListener('DOMContentLoaded', () => {
    // 세일 종료 날짜 설정 (예: 2025년 12월 31일)
    const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // 시간 계산
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // HTML 요소에 시간 표시
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

        // 카운트다운 종료 시
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
        
});
