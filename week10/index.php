<html>

<head>
    <title>PHP Test</title>
</head>

<body>
    <?php echo '<h1>Hello World</h1>';
    echo 'Hello' . $_GET["name"];
    echo 'Your Age is'. $_GET["age"];
    ?>

    <form action="form.php" method="GET">
        <input type="text" name="input1"/>
        <button type="submit" name="submit" value="Submit">Submit</button>
        
    </form>
</body>

</html>