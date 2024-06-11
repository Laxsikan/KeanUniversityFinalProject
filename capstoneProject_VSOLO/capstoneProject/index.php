<!-- index.php -->

<?php
include "config.php";
session_start();

// Fetch username from session
$username = $_SESSION["username"] ?? "";

$message = ""; // Initialize message variable

try {
    $conn = new PDO($attr, $user, $pass, $opts);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["create-account"])) {
        // Creating an account
        $username = $_POST["username"];
        $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

        try {
            $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':password', $password);

            if ($stmt->execute()) {
                $message = "Account created successfully";
            } else {
                $message = "Error: Unable to create account";
            }
        } catch (PDOException $e) {
            if ($e->errorInfo[1] === 1062) {
                // Duplicate entry error code
                $message = "User account already taken";
            } else {
                $message = "Error: " . $e->getMessage();
            }
        }
    } elseif (isset($_POST["login"])) {
        // Logging in
        $username = $_POST["username"];
        $password = $_POST["password"];

        $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION["username"] = $username;
            header("Location: basketball.php");
            exit();
        } else {
            $message = "Invalid username or password";
        }
    }
}

$conn = null; // Close the connection
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body id="index-body">

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

<div class="container">
    <!-- <div>
        <h1>Welcome to the Website</h1>
        <p>Please create your account or sign in below.</p>
    </div> -->

    <div id="toggle-container">
        <button id="signup-btn" class="signup">Create Account</button>
        <button id="signin-btn" class="signin">Sign In</button>
    </div>

    <div class="form-container">
        <!-- Signup Form -->
        <div class="create-account form-section">
            <h2>Create Account</h2>
            <p><?php echo $message; ?></p>
            <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <label for="username">Username:</label><br>
                <input type="text" id="username" name="username" required><br>
                <label for="password">Password:</label><br>
                <input type="password" id="password" name="password" required><br>
                <input type="submit" value="Create Account" name="create-account">
                <div class="continue-guest">
                    <a href="basketball.php" class="continue-guest-btn">Continue as Guest</a>
                </div>
            </form>
        </div>

        <!-- Login Form -->
        <div class="login form-section">
            <h2>Login</h2>
            <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <label for="username">Username:</label><br>
                <input type="text" id="username" name="username" required><br>
                <label for="password">Password:</label><br>
                <input type="password" id="password" name="password" required><br>
                <input type="submit" value="Login" name="login">
            </form>
        </div>
    </div>

    

</div>

<script>
    document.getElementById("signup-btn").addEventListener("click", function () {
        document.querySelector(".create-account").style.display = "block";
        document.querySelector(".login").style.display = "none";
    });

    document.getElementById("signin-btn").addEventListener("click", function () {
        document.querySelector(".create-account").style.display = "none";
        document.querySelector(".login").style.display = "block";
    });

    // Set the initial state to "Create Account"
    document.querySelector(".create-account").style.display = "block";
    document.querySelector(".login").style.display = "none";
</script>

</body>
</html>