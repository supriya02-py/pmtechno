<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "supriyakamble0219@gmail.com"; // Replace with your email address
    $emailSubject = "New Inquiry from $firstName $lastName";
    $emailBody = "You have received a new inquiry:\n\n" .
                 "Name: $firstName $lastName\n" .
                 "Email: $email\n" .
                 "Subject: $subject\n\n" .
                 "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?><?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "varshitha.gowda@pragvera.com"; // Replace with your email address
    $emailSubject = "New Inquiry from $firstName $lastName";
    $emailBody = "You have received a new inquiry:\n\n" .
                 "Name: $firstName $lastName\n" .
                 "Email: $email\n" .
                 "Subject: $subject\n\n" .
                 "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>