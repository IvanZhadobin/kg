function drawEllipseArc(color, thickness, startAngle, endAngle, duration) {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var radiusX = 100;
  var radiusY = 50;

  var startAngleRad = startAngle * Math.PI / 180;
  var endAngleRad = endAngle * Math.PI / 180;

  var currentAngle = startAngleRad;
  var increment = Math.PI / 180; // Шаг изменения угла (1 градус в радианах)

  var animationInterval = setInterval(function() {
    // Очистка холста
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисование дуги с текущим углом
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, 0, startAngleRad, currentAngle);
    ctx.stroke();

    // Увеличение текущего угла
    currentAngle += increment;

    // Остановка анимации, когда достигнут конечный угол
    if (currentAngle >= endAngleRad) {
      clearInterval(animationInterval);
    }
  }, duration / (endAngle - startAngle)); // Расчет интервала анимации
}

// Пример использования функции с анимацией
drawEllipseArc("blue", 2, 0, 180, 3000); // Рисование анимированной дуги эллипса за 3 секунды
