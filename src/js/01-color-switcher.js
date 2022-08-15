const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
btnStopRef.disabled = true; //убрал подсветку кнопки Stop при парезагрузки
let timerId = null;
//рандомные генератор цветов
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//типа интерлок,кнопка Stert-подсвечиваетса Stop-выключена стр 11-12
btnStartRef.addEventListener('click', () => {
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;
  //задержка + включения перключателя между переключениями цветов
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});
//типа интерлок,кнопка Start-выключена Stop- подсвечиваетса стр 21-22
btnStopRef.addEventListener('click', () => {
  clearInterval(timerId); //остановка переключателя цветов
  btnStartRef.disabled = false;
  btnStopRef.disabled = true;
});
