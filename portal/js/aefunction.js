/*global define*/
(function (global, undefined) {
	"use strict";

	var document = global.document,
	    AEFunction;
	
	
	
	var AEFunction = function(){
		
		var _aef = {},
			$id;

		var conta = 0;	
			
		$id = function (id) {
			return document.getElementById(id);
		};
		
		_aef = {
		  
			alerta : function (obj,message) {
				conta++;
				alert(obj.innerHTML + message);
				obj.innerHTML = "Ya ha sido pulsado  " + conta;
				//alertify.alert(message +' '+ conta);
			},
			sumatorio: function (operador1, operador2){
				alert(operador1+operador2);
			}
			  
		};
		return{
			alerta : function (obj, message) { _aef.alerta(obj,message);},
			sumatorio: function (operador1, operador2){_aef.sumatorio(operador1, operador2);}
		};
	};
	
	// AMD and window support
	if (typeof define === "function") {
		define([], function () { return new AEFunction(); });
	} else {
		if (typeof global.aef === "undefined") {
			global.aef = new AEFunction();
		}
	}

	
})(this);



 