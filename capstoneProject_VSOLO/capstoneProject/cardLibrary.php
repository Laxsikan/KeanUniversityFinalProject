<!-- cardLibrary.php -->

<?php
session_start();
include 'config.php'; 

$username = $_SESSION["username"] ?? ""; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NBA Team Randomizer</title>
    <link rel="stylesheet" href="cardLibrary.css">
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

    <div class="search-container">
      <input type="text" id="search-input" placeholder="Search">
       <!--Search by team/player name or position-->
    </div>

    <div id="player-library"></div>

    <script src="cardLibrary.js"></script>
</body>
</html>
