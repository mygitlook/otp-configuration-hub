<?php
/**
 * Init the OTP Authentication plugin.
 */

define('PLUGIN_OTPAUTH_VERSION', '1.0.0');

// Check if GLPI is initialized
if (!defined('GLPI_ROOT')) {
   die("Sorry. You can't access this file directly");
}

/**
 * Init the plugin - Loaded at GLPI initialization
 * Must return true if plugin is active
 *
 * @return boolean
 */
function plugin_init_otpauth() {
   global $PLUGIN_HOOKS;
   
   // Register classes for autoloading
   foreach (glob(dirname(__FILE__) . '/inc/*.php') as $file) {
      include_once($file);
   }
   
   // Add OTP configuration menu
   Plugin::registerClass('PluginOtpauthConfig');
   $PLUGIN_HOOKS['config_page']['otpauth'] = 'front/config.form.php';
   
   // Add OTP verification hook during login
   $PLUGIN_HOOKS['pre_login_authenticated']['otpauth'] = 'plugin_otpauth_check_otp';
   
   return true;
}