(function(global, $) {

	var Greetr = function(firstname, lastname, language) {
		return new Greetr.init(firstname, lastname, language);
	};

	var supportedLangs = ['en', 'es'];

	var greeting = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreeting = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	Greetr.prototype = {

		fullName: function() {
			return this.firstname + ' ' + this.lastname;
		},

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},

		greeting: function() {
			return greeting[this.language] + ' ' + this.firstname + '!';
		},

		formalGreeting: function() {
			return formalGreeting[this.language] + ', ' + this.fullName();
		},

		greet: function(formal) {
			var msg;

			// if undefined or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}

			// 'this' refers to the calling object at execution time
			// makes the method chainable
			return this;
		},

		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;
		},

		setLang: function(lang) {
			this.language = lang;

			this.validate();

			return this;
		}
	};

	Greetr.init = function(firstname, lastname, language) {

		var self = this;
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en';

		self.validate();
	};

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

}(window, jQuery));
