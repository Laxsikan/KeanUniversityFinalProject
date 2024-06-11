<!-- fetch_high_score.php -->
<?php
session_start();
include 'config.php';

// Fetch current high score from session
$highScore = $_SESSION['high_score'] ?? 0;
echo $highScore;
?>