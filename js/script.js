let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#50A0FF";
// tg.MainButton.text = "Выбрать точку";




document.addEventListener("DOMContentLoaded", function () {

    var radioButtons = document.querySelectorAll('input[type="radio"][name="address"]');
    
    radioButtons.forEach(function (radioButton) {

    radioButton.addEventListener("change", function () {
      if (this.checked) {
        tg.MainButton.text = "Вы выбрали " + this.value;
        tg.MainButton.show();
          
      }
    });
  });
});


if (!tg.isClosingConfirmationEnabled) {
    tg.enableClosingConfirmation();
}
