<html>
<head><title>Результат замовлення</title></head>
<body>
<?php
$product = $_POST["product"];
$material = $_POST["material"];
$quantity = $_POST["quantity"];

echo "<h2>Ваше замовлення прийнято</h2>";
echo "Замовлено виріб: $product <br>";
echo "Матеріал: $material <br>";
echo "Кількість: $quantity <br>";
?>
<p><a href="order.html">Повернутися до форми</a></p>
</body>
</html>