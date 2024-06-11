<!-- update_high_score.php -->

<?php
session_start();
include 'config.php';

if (isset($_POST['high_score'])) {
    $highScore = $_POST['high_score'];
    // Fetch current high score for comparison
    $currentHighScore = $_SESSION['high_score'] ?? 0;

    if ($highScore > $currentHighScore) {
        // Update high score only if the new score is greater
        try {
            $pdo = new PDO($attr, $user, $pass, $opts);

            $stmt = $pdo->prepare("UPDATE users SET high_score = :high_score WHERE username = :username");
            $stmt->bindParam(':high_score', $highScore);
            $stmt->bindParam(':username', $_SESSION['username']);
            $stmt->execute();

            echo "High score updated successfully"; // Debugging message
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    } else {
        echo "New score is not greater than current high score";
    }
}
?>



