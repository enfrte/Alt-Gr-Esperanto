
var altGrEsperanto = (function() {

function setChangeUpListener (el, listener) {
    el.addEventListener("keyup", listener);
}

function setChangeDownListener (el, listener) {
	el.addEventListener("keydown", listener);
}

var el = document.activeElement;

setChangeUpListener(el, function(event){
	getCharKeyUp(event)
});

setChangeDownListener(el, function(event){
	getCharKeyDown(event);
});

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
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u0108');
				}
				else if(altGraphPressed) { 
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u0109'); 
				}
				break;		
			case 71: // g 
				if(shiftPressed && altGraphPressed) {
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u011C');
				}
				else if(altGraphPressed) { 
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u011D'); 
				}
				break;		
			case 72: // h
				if(shiftPressed && altGraphPressed) {
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u0124');
				}
				else if(altGraphPressed) { 
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u0125'); 
				}
				break;
			case 74: // j
				if(shiftPressed && altGraphPressed) {
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u0134');
				}
				else if(altGraphPressed) { 
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u0135'); 
				}
				break;
			case 83: // s
				if(shiftPressed && altGraphPressed) {
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u015C');
				}
				else if(altGraphPressed) { 
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u015D'); 
				}
				break;
			case 85: // u
				if(shiftPressed && altGraphPressed) {
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u016C');
				}
				else if(altGraphPressed) { 
					event.preventDefault();
					insertAtCursor(document.activeElement, '\u016D'); 
				}
				break;
			default: 
				// no esperanto keys pressed
				return;
		}
	}

}

function insertAtCursor(myField, myValue) {
	document.execCommand('insertHTML', false, myValue);
}

})();