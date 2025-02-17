<?php
/**
 * Plugin setup information
 */

if (!defined('PLUGIN_OTPAUTH_VERSION')) {
   die("Please initialize the plugin first");
}

/**
 * Define plugin's configuration
 *
 * @return array
 */
function plugin_version_otpauth() {
   return [
      'name'           => 'OTP Authentication',
      'version'        => PLUGIN_OTPAUTH_VERSION,
      'author'         => 'Your Name',
      'license'        => 'GPLv3+',
      'homepage'       => 'https://github.com/yourusername/glpi-otpauth',
      'requirements'   => [
         'glpi'   => [
            'min' => '10.0.0',
            'max' => '11.0.0',
         ],
         'php'    => [
            'min' => '7.4.0',
            'max' => '8.3.0'
         ]
      ],
      'minGlpiVersion' => '10.0.0'
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