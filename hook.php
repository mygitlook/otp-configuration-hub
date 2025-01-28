<?php
/**
 * Hook functions for OTP Authentication plugin
 */

/**
 * Plugin installation process
 *
 * @return boolean
 */
function plugin_otpauth_install() {
   global $DB;

   if (!$DB->tableExists("glpi_plugin_otpauth_config")) {
      $query = "CREATE TABLE `glpi_plugin_otpauth_config` (
         `id` int(11) NOT NULL AUTO_INCREMENT,
         `smtp_host` varchar(255) NOT NULL,
         `smtp_port` int(11) NOT NULL,
         `smtp_username` varchar(255) NOT NULL,
         `smtp_password` varchar(255) NOT NULL,
         `otp_receiver_email` varchar(255) NOT NULL,
         PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
      
      $DB->query($query) or die("Error creating OTP config table");
   }
   
   return true;
}

/**
 * Plugin uninstallation process
 *
 * @return boolean
 */
function plugin_otpauth_uninstall() {
   global $DB;

   $tables = ['glpi_plugin_otpauth_config'];
   
   foreach($tables as $table) {
      $DB->query("DROP TABLE IF EXISTS `$table`");
   }
   
   return true;
}