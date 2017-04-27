
var altGrEsperanto = (function() {

'use strict';

(function(){
    document.activeElement.addEventListener("keyup", function(event){
		getCharKeyUp(event);
	});
})();

(function(){
    document.activeElement.addEventListener("keydown", function(event){
		getCharKeyDown(event);
	});
})();

var altGraphPressed = false;

function getCharKeyUp(event){
	if ((event.key || event.keyIdentifier) == "AltGraph" && event.location == 2) {
		altGraphPressed = false;
	}	
}

function getCharKeyDown (event){
	
	var keyCode = ('which' in event) ? event.which : event.keyCode; 

	if ((event.key || event.keyIdentifier) == "AltGraph" && event.location == 2) {
		altGraphPressed = true;
	} 

	if (event.shiftKey) { 
		var shiftPressed = true;
	}

	if(altGraphPressed === true){
		switch (keyCode) {
			case 67: // c
				if(shiftPressed && altGraphPressed) {
					insertAtCursor('\u0108');
				}
				else if(altGraphPressed) { 
					insertAtCursor('\u0109'); 
				}
				break;		
			case 71: // g 
				if(shiftPressed && altGraphPressed) {
					insertAtCursor('\u011C');
				}
				else if(altGraphPressed) { 
					insertAtCursor('\u011D'); 
				}
				break;		
			case 72: // h
				if(shiftPressed && altGraphPressed) {
					insertAtCursor('\u0124');
				}
				else if(altGraphPressed) { 
					insertAtCursor('\u0125'); 
				}
				break;
			case 74: // j
				if(shiftPressed && altGraphPressed) {
					insertAtCursor('\u0134');
				}
				else if(altGraphPressed) { 
					insertAtCursor('\u0135'); 
				}
				break;
			case 83: // s
				if(shiftPressed && altGraphPressed) {
					insertAtCursor('\u015C');
				}
				else if(altGraphPressed) { 
					insertAtCursor('\u015D'); 
				}
				break;
			case 85: // u
				if(shiftPressed && altGraphPressed) {
					insertAtCursor('\u016C');
				}
				else if(altGraphPressed) { 
					insertAtCursor('\u016D'); 
				}
				break;
			default: 
				// no esperanto + altgr keys pressed
				return;
		}
	}

}

function insertAtCursor(myValue) {
	event.preventDefault();
	document.execCommand('insertHTML', false, myValue);
}

})();