<?php

class PluginOtpauthConfig extends CommonDBTM {
   static private $_instance = null;
   
   static function getConfig() {
      if (is_null(self::$_instance)) {
         self::$_instance = new self();
      }
      return self::$_instance;
   }
   
   static function getTypeName($nb = 0) {
      return __('OTP Authentication', 'otpauth');
   }
}