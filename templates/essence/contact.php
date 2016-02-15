<?php

// config for mail
define("__TOEMAIL__", "__your-email__");
define("__FROMEMAIL__", "__your-email__");

// return json app
header('Content-Type: application/json');

if ($_SERVER['HTTP_X_REQUESTED_WITH'] !== "XMLHttpRequest") {
	echo json_encode(
		array (
			'data' => 'Invalid access method',
			'POST' => $_POST,
			'SERVER' => $_SERVER,
			'status' => 403,
			'time' => time(),
		)
	);
	exit();
}

// contact post info
$client_email 	= @$_POST['email'];
$client_subject = strlen($_POST['subject']) > 3 ? $_POST['subject'] : 'New contact message from essence.pearlhq.com';
$client_message = @$_POST['message'];

$errors = array( 'errors' => array() );

if ( !$client_email ) { 
	$errors['errors']['email'] = 'Email address is incorrect'; 
}
if ( !$client_message ) { 
	$errors['errors']['message'] = 'Message must be specified'; 
}

if ( count($errors['errors']) > 0 ) {
	echo json_encode(
		array (
			'data' => $errors,
			'status' => 403,
			'time' => time(),
		)
	);
	exit();
}

$random_hash = md5(date('r', time())); 
$headers = "From: ".__FROMEMAIL__."\r\nReply-To: ".__FROMEMAIL__; 
$headers .= "\r\nContent-Type: multipart/mixed; message_id=$random_hash";
$mail_sent = @mail( __TOEMAIL__, $client_subject, $client_message, $headers);

echo json_encode(
	array (
		'data' => array(
			'message_id' => $random_hash,
			'status' => $mail_sent
		),
		'status' => 200,
		'time' => time(),
	)
);
exit();

?>
