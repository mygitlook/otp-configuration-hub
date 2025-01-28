<?php

include ("../../../inc/includes.php");

$plugin = new Plugin();
if (!$plugin->isActivated("otpauth")) {
   Html::displayNotFoundError();
}

Html::header('OTP Authentication', $_SERVER["PHP_SELF"], "config", "plugins");
$config = new PluginOtpauthConfig();

if (isset($_POST["update"])) {
   $config->update($_POST);
   Html::back();
} else {
   $config->showConfigForm();
}

Html::footer();