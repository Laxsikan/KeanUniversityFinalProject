<!-- hof.php -->

<?php
session_start();
include 'config.php';

// Fetch username from session
$username = $_SESSION["username"] ?? "";

try {
    $pdo = new PDO($attr, $user, $pass, $opts);

    $sql = "SELECT * FROM users ORDER BY high_score DESC LIMIT 10"; // Limiting to top 10 users
    $stmt = $pdo->query($sql);
    $rank = 1;
    ?>

    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>High Scores</title>
        <link rel="stylesheet" type="text/css" href="hof.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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
                <h5 id="welcome-message">
                    <?php
                    if (!empty($_SESSION["username"])) {
                        $firstLetter = substr($_SESSION["username"], 0, 1);
                        echo ucfirst($firstLetter);
                    } else {
                        echo "Guest";
                    }
                    ?>
                </h5>
                <?php
                if (!empty($_SESSION["username"])) {
                    echo '<a href="logout.php" class="logout">Log Out</a>';
                }
                ?>
            </div>
        </nav>

        <h1>High Scores</h1>
        <table>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            <?php while ($row = $stmt->fetch()) { ?>
                <tr>
                    <td><?php echo $rank++; ?></td>
                    <td><?php echo $row["username"]; ?></td>
                    <td><?php echo $row["high_score"]; ?></td>
                </tr>
            <?php } ?>
        </table>
    </body>

    </html>

    <?php
    $pdo = null;
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>