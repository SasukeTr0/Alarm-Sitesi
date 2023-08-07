document.addEventListener("DOMContentLoaded", function() {
    const alarmSound = document.getElementById("alarmSound");
    const setAlarmBtn = document.getElementById("setAlarmBtn");
    const alarmTimeInput = document.getElementById("alarmTime");

    setAlarmBtn.addEventListener("click", function() {
        const alarmTime = new Date();
        const selectedTime = new Date(`2023-01-01T${alarmTimeInput.value}:00`);
        alarmTime.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0, 0);
        
        const now = new Date();

        const timeUntilAlarm = alarmTime - now;

        if (timeUntilAlarm > 0) {
            setTimeout(() => {
                alarmSound.play();
                alert("Alarm Çaldı!");
            }, timeUntilAlarm);
        } else {
            alert("Geçerli bir saat seçin.");
        }
    });
});