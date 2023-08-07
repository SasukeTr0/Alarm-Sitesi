# Alarm-Sitesi

Alarm Kurabildiğiniz bir site

fixed an issue where no alarm sounded. [BagaturBey](https://github.com/BagaturBey)
Alarm Sitesi klasörü dışında bulunan dosyaları güncelledim ve tekrar yükledim.

* Güncellenen kodlar *
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

![1](https://github.com/BagaturBey/Alarm-Sitesi/assets/107503923/5b39c489-653a-4585-9639-691b23f44bf2)
