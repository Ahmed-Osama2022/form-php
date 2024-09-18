<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  echo "Your username: " . $username . '<br>' . "Password: " . $password;
}
