(function (win) {
	win.onerror = function (message, url, line, column, errorObject) {

		// Create full error label from parameters in closure
		function composeLabel() {
			// Is the error anonimized by the browser because of CORS?
			if (message.indexOf('Script error.') > -1) {
				return "Error in external script. CORS prevents more info.";
			}

			// Does the browser support the extended ErrorEvent interface?
			if (errorObject && errorObject.stack) {
				return errorObject.stack;
			}

			// Create the full location of the error
			var location = url + ':' + line;
			if (column){
				location += ':' + column;
			}

			// Strip of the 'Uncaught' part of the message if it's there
			// to make the message resemble a stack trace
			var prefix = 'Uncaught ';
			if (message.indexOf(prefix) === 0) {
				message = message.substr(prefix.length);
			}

			// Combine with a line break and a tab to resemble a stack trace
			return message + "\n\tat " + location;
		}

		// Google Analytics not available?
		if (!win.ga) {
			return;
		}

		// Do the actual sending of events
		ga('send', 'event', 'error-ejector', 'error', composeLabel());
	};
})(window);
