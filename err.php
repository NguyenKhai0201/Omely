<?php
    $error_name=$error_email=$error_phone=$error_mes="";
    if($_SERVER["PHP_SELF"]=="POST") {
        if (trim($_POST["your-name"]) == "" && trim($_POST["your-email"]) == "" && trim($_POST["your-mes"]) == "") {
            $error_name = "Username không được để trống";
            $error_email = "Email không được để trống";
            $error_mes = "Mes không được để trống";
            $error_phone = "Phone không được để trống";
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Email không đúng định dạng";
        }
    }
?>