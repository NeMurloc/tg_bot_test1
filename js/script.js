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

tg.enableClosingConfirmation();


document.addEventListener('DOMContentLoaded', function() {
  var radioButtons = document.querySelectorAll('input[type="radio"][name="address"]');
  
  // Перебор всех радиокнопок и добавление обработчика событий
  radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function(event) {
          // Получаем значение выбранного адреса
          var selectedAddress = event.target.value;
          
          // В зависимости от выбранного адреса перенаправляем на новую страницу
          switch (selectedAddress) {
              case 'address1':
                  window.location.href = 'address1.html';
                  break;
              case 'address2':
                  window.location.href = 'address2.html';
                  break;
              // Добавьте обработку других адресов по мере необходимости
              default:
                  // Если выбран неизвестный адрес, не выполняем никаких действий
                  break;
          }
      });
  });
});

