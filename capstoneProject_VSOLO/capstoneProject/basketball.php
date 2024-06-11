<!-- basketball.php -->

<?php
session_start();
include 'config.php'; 

$username = $_SESSION["username"] ?? ""; 

// Fetch high score from the database
try {
    $pdo = new PDO($attr, $user, $pass, $opts);

    // Prepare and execute SQL query to fetch high score
    $stmt = $pdo->prepare("SELECT high_score FROM users WHERE username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    // Fetch the high score
    $highScore = $stmt->fetchColumn();

    // Set default high score if not found
    if (!$highScore) {
        $highScore = 0;
    }
} catch (PDOException $e) {
    // Handle database connection error
    die("Connection failed: " . $e->getMessage());
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NBA Team Randomizer</title>
    <link rel="stylesheet" href="basketball.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style> -->
</head>
<body>
    <nav>
        <div class="navbar-left">
            <a href="index.php">Home Page</a>
            <a href="basketball.php">Basketball</a>
            <a href="cardLibrary.php">Card Library</a>
            <a href="hof.php">Hall Of Fame</a>
        </div>
        <div class="navbar-right">
            <h4 id="welcome-message">
                <?php 
                if (!empty($username)) {
                    $firstLetter = substr($username, 0, 1);
                    echo ucfirst($firstLetter);
                } else {
                    echo "Guest";
                }
                ?>
            </h4>
            <?php 
            if (!empty($username)) {
                echo '<a href="logout.php" class="logout">Log Out</a>';
            }
            ?>
        </div>
    </nav>

    <div class="container" id="basketball-container">
        <div class="user-actions">
            <div class="team-selection">
                <img id="team-logo" src="images/nbaLogos/nba.svg" alt="NBA Team Logo" />
                <button id="randomize-team-btn">Randomize NBA Team</button>
            </div>
            <div class="position-selection">
                <button class="position-button" data-position="PG">Select PG</button>
                <button class="position-button" data-position="SG">Select SG</button>
                <button class="position-button" data-position="SF">Select SF</button>
                <button class="position-button" data-position="PF">Select PF</button>
                <button class="position-button" data-position="C">Select C</button>
            </div>
            <div id="players" class="players">
                <!-- This is where player cards will be appended -->

                <div class="player-container">
                    <div class="line-top"></div>
                    <div class="player-background">
                       <div class="player-image" src="" alt=""> 
                    </div>
                    <div class="line-bottom"></div>
                </div>
            </div>         
        </div>
        <div id="highscore"></div>
    </div>

    <input type="hidden" id="current-high-score" value="<?php echo $highScore; ?>">

    <script src="basketball.js"></script>
</body>
</html>

