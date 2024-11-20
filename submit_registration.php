<?php
// Database connection settings
$host = "localhost";
$dbname = "game_registration";
$username = "root"; // Default for XAMPP/WAMP
$password = "";

// Connect to the database
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gameName = $_POST['gameName'];
    $playerName = $_POST['playerName'];
    $playerEmail = $_POST['playerEmail'];
    $playerAge = $_POST['playerAge'];
    $gameType = $_POST['gameType'];

    // Validate form data (basic validation)
    if (empty($gameName) || empty($playerName) || empty($playerEmail) || empty($playerAge) || empty($gameType)) {
        echo "All fields are required!";
        exit;
    }

    // Insert data into the database
    try {
        $sql = "INSERT INTO registrations (game_name, player_name, player_email, player_age, game_type)
                VALUES (:game_name, :player_name, :player_email, :player_age, :game_type)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':game_name', $gameName);
        $stmt->bindParam(':player_name', $playerName);
        $stmt->bindParam(':player_email', $playerEmail);
        $stmt->bindParam(':player_age', $playerAge);
        $stmt->bindParam(':game_type', $gameType);
        $stmt->execute();
        echo "Registration completed successfully!";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
