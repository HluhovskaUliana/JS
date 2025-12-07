let styleStr = "background-color: #00ffff; color: #ff00ff; font-size: 24pt; font-family: 'Times New Roman'";
let naim = 'Мережа магазинів "ВСЕ ДЛЯ ДОМУ"';
let da = new Date();
let d = da.getDate() + "." + (da.getMonth() + 1) + "." + da.getFullYear();

document.write('<p align="center" style="' + styleStr + '">' + naim + '</p>');
document.write('<p>Сьогодні: ' + d + '</p>');