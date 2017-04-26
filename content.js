/*
SOFTWARE DISCLAIMER
This Chrome extension is supplied "AS IS" without any warranties and support.
I assume no responsibility or liability for the use of the software.
*/

var altGraphPressed = false;

document.activeElement.onkeydown = function(){ getCharKeyDown(event) }; // detect pressed
document.activeElement.onkeyup = function(){ getCharKeyUp(event) }; // detect released

function getCharKeyUp(event){
	if ((event.key || event.keyIdentifier) == "AltGraph" && event.location == 2) {
		altGraphPressed = false;
	}	
}

function getCharKeyDown (event){
	var keyCode = ('which' in event) ? event.which : event.keyCode; 
	
	// check if AltGraph has been pressed
	// can't exit the function on this test because it returns both Control 1 and AltGraph 2
	if ((event.key || event.keyIdentifier) == "AltGraph" && event.location == 2) {
		altGraphPressed = true;
	} 

	// check if Shift has been pressed
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

// Credit for this function: http://jsfiddle.net/user/Znarkus/
function insertAtCursor(myField, myValue) {
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
    }
}
