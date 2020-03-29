<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
$host = "localhost";
$userName = "admin";
$password = "FleaFlicker!94";
$dbName = "slamatool"; 

//Did you install xampp for local apache and mysql environment? no where is the project that I sent you
//you don't have npm environment? no ive only been using visual code basics for phython
$_POST = json_decode(file_get_contents('php://input'), true);

$conn = new mysqli($host, $userName, $password, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO informationform (schoolSelect, nameInput, emailInput, vCheck, jvCheck, cCheck, vTimeClock, jvTimeClock, leagueStartSelect, gwCheck, otherCheck, otherNotes, tmDates, fdDates)
        VALUES ('".$_POST["schoolSelect"]."','".$_POST["nameInput"]."','".$_POST["emailInput"]."',".$_POST["vCheck"].", ".$_POST["jvCheck"].", ".$_POST["cCheck"].",'".$_POST["vTimeClock"]."','".$_POST["jvTimeClock"]."','".$_POST["leagueStartSelect"]."',".$_POST["gwCheck"].", ".$_POST["otherCheck"].", '".$_POST["otherNotes"]."','".$_POST["tmDates"]."','".$_POST["fdDates"]."')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
