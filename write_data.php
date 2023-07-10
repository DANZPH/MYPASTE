<?php
$latitude = $_POST["latitude"];
$longitude = $_POST["longitude"];
$time = $_POST["time"];
$ipAddress = $_POST["ipAddress"];
$file = fopen("cookie_data.txt", "a");
fwrite($file, "Latitude: " . $latitude . ", Longitude: " . $longitude . ", Time: " . $time . ", IP Address: " . $ipAddress . "\n");
fclose($file);
echo "Data written to file.";
?>