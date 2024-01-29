let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#50A0FF";
tg.MainButton.text = "Выбрать точку";

var radioButtons = document.querySelectorAll('input[type="radio"][name="address"]');

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    
    if (this.checked) {

      if (this.value == "address1") {
        tg.MainButton.show();
      }
    }
  });
});


