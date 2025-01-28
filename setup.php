<?php
/**
 * Plugin setup information
 */

/**
 * Define plugin's configuration
 *
 * @return array
 */
function plugin_version_otpauth() {
   return [
      'name'           => 'OTP Authentication',
      'version'        => OTP_AUTH_VERSION,
      'author'         => 'Your Name',
      'license'        => 'GPLv3+',
      'homepage'       => 'https://github.com/yourusername/glpi-otpauth',
      'requirements'   => [
         'glpi'   => [
            'min' => '10.0.0',
            'max' => '11.0.0',
         ],
         'php'    => [
            'min' => '7.4.0'
         ]
      ]
   ];
}

/**
 * Check prerequisites before install
 *
 * @return boolean
 */
function plugin_otpauth_check_prerequisites() {
   // Check PHP version
   if (version_compare(PHP_VERSION, '7.4.0', '<')) {
      echo "This plugin requires PHP 7.4 or higher.";
      return false;
   }
   
   return true;
}

/**
 * Check configuration
 *
 * @return boolean
 */
function plugin_otpauth_check_config() {
   return true;
}