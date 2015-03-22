package com.power_6.baseball_native_card_calculation;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class CardCalculation extends CordovaPlugin {

  	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
	 	if (action.equals("getCardBatter")) {
	 		callbackContext.success("it works");
	 	} else {
	 		callbackContext.error("it failed");
	 		return false;
	 	}

		return true;
	}
}