'use strict';
var jQuery = jQuery !== undefined ? jQuery : {};

(function( $ ) {
 	// Detect if mobile browser
 	$.fn.isMobile = function() {
		if( navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			return true;
		} else {
			return false;
		}
 	};

 	// Buttons Ripple Effect on: click or touch
    $.fn.rippleEffect = function(options) {
 		var defaults = {
 			ripple: true
		}
		
		$.extend(defaults, options);

		if (!defaults.ripple) { return this; }

		$(document).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', '.e-ripple-wrapper', function () {
	    	endRippleEffect(this);
		});

		var startRippleEffect = function(element, e) {
			var bgColor = $(element).css("color").replace("rgb", "rgba").replace(")", ", 0.5)"),
				distance = Math.max($(element).outerWidth(), $(element).outerHeight()),
				positionX = e.clientX - $(element).offset().left - distance/2 + $(window).scrollLeft(),
				positionY = e.clientY - $(element).offset().top - distance/2 + $(window).scrollTop(),
				setRipple = null;
			
			$(element).append('<div class="e-ripple-wrapper isActive"></div>');
			setRipple = $(element).find('.isActive');
			setRipple.removeClass('isActive');
			setRipple.css({'width': distance, 'height': distance});

			setRipple.css({'top': positionY+'px', 'left': positionX+'px', 'backgroundColor': bgColor}).addClass('animating');
		},
		endRippleEffect = function($element) { $element.remove(); }

		$(this).addClass('e-ripple');
		$(this).bind('click touch', function(e){ startRippleEffect(this, e); });
 
        return this;
    };

    // Dialogs open/close
    $.fn.dialog = function(options) {
		var defaults = {
 			id: this.attr("id"),
 			action: null
		},
		dialogModal = $('body .e-modal-bg');
		
		$.extend(defaults, options);

		if (!defaults.action) {
			$(document).delegate('[data-action]', 'click touch', function () {
				var action = $(this).attr('data-action'),
					target = $(this).attr('data-target');

				defaults.action = action.replace('Dialog', '');
				defaults.id = target.replace('#', '');

				switch(defaults.action){
					case 'open':
						openDialog();
						break;
					case 'close':
						closeDialog();
						break;
				}
			});
		}

		var openDialog = function() {
			$('body').addClass('e-modal-open');
			$('#'+defaults.id).removeClass('transparent');

			if (!dialogModal.length) {
				$('body').append('<div style="display:none;" class="e-modal-bg"></div>');
			}

			$('body .e-modal-bg').show();
		},
		closeDialog = function() {
			$('body').removeClass('e-modal-open');
			$('#'+defaults.id).addClass('transparent');

			$('body .e-modal-bg').hide().remove();
		}

		switch(defaults.action){
			case 'open':
				openDialog();
				break;
			case 'close':
				closeDialog();
				break;
		}

		$('body').delegate('.e-modal-bg', 'click touch', function () {
	    	closeDialog();
		});

        return this;
    };

    // BottomSheets open/close
    $.fn.bottomsheets = function(options) {
		var defaults = {
 			id: this.attr("id"),
 			action: null
		},
		dialogSheet = $('body .e-modal-bg');
		
		$.extend(defaults, options);

		if (!defaults.action) {
			$(document).delegate('[data-action]', 'click touch', function () {
				var action = $(this).attr('data-action'),
					target = $(this).attr('data-target');

				defaults.action = action.replace('BottomSheet', '');
				defaults.id = target.replace('#', '');

				switch(defaults.action){
					case 'open':
						openSheet();
						break;
					case 'close':
						closeSheet();
						break;
				}
			});
		}

		var openSheet = function() {
			$('body').addClass('e-modal-open');
			$('#'+defaults.id).removeClass('transparent').addClass('animate');

			if (!dialogSheet.length) {
				$('body').append('<div style="display:none;" class="e-modal-bg"></div>');
			}

			$('body .e-modal-bg').show();
		},
		closeSheet = function() {
			$('body').removeClass('e-modal-open');
			$('#'+defaults.id).addClass('transparent').removeClass('animate');

			$('body .e-modal-bg').hide().remove();
		}

		switch(defaults.action){
			case 'open':
				openSheet();
				break;
			case 'close':
				closeSheet();
				break;
		}

		$('body').delegate('.e-modal-bg', 'click touch', function () {
	    	closeSheet();
		});

        return this;
    };

    // Input effect
	$.fn.input = function(options) {
		var defaults = {
				effect: $(this).attr('data-effect') === 'true' || false,
				counter: $(this).attr('data-counter') || 0,
				label: ($(this).attr('placeholder') && $(this).attr('placeholder').length > 0) ? $(this).attr('placeholder') : false,
				hint: ($(this).attr('data-hint') && $(this).attr('data-hint').length > 0) ? $(this).attr('data-hint') : false
			},
			self = $(this),
			value = self.val();

		$.extend(defaults, options);

		if (value.length < 1) { 
			self.addClass('empty')
		}

		if (self.parent('div.e-input-group').length < 1) {
			self.wrap('<div class="e-input-group"></div>');
		}
		if (defaults.effect) {
			// add effect highlighter
			self.after('<span class="e-input-efects"></span>');
		}
		if (defaults.counter) {
			// add counter limit
			self.attr('maxlength', parseInt(defaults.counter));
			self.after('<span class="e-count"><span>'+value.length+'</span><span>/</span><span>'+defaults.counter+'</span></span>');
		}
		if (defaults.label) {
			// add floating label with placeholder text
			self.after('<span class="floating-label">'+defaults.label+'</span>');
		}
		if (defaults.hint) {
			// add hint label
			self.after('<span class="e-hint">'+defaults.hint+'</span>');
		}

		$(this).delegate('', 'change keyup', function() {   
			value = $(this).val();

			if (value.length > 0) { 
				self.removeClass('empty') 
			} else { 
				self.addClass('empty')
			}

			if (defaults.counter) {
				if (value.length >= defaults.counter) {
					self.parent().find('.e-count span:first').text(parseInt(defaults.counter));
					self.val(value.substr(0, 50));
				} else {
					self.parent().find('.e-count span:first').text(parseInt(value.length));
				}
			}
		});
		
        return this;
	};

	// SnackBar
	$.fn.snackbar = function(options) {
		var defaults = {
 			id: this.attr("id"),
 			action: null
		};

		$.extend(defaults, options);

		if (!defaults.action) {
			$(document).delegate('[data-action]', 'click touch', function () {
				var action = $(this).attr('data-action'),
					target = $(this).attr('data-target');

				if (action.indexOf('SnackBar') >= 0) {
					defaults.action = action.replace('SnackBar', '');
					defaults.id = target.replace('#', '');

					switch(defaults.action){
						case 'open':
							openSnackBar();
							break;
						case 'close':
							closeSnackBar();
							break;
					}
				}
			});
		}

		var openSnackBar = function() {
			$('#'+defaults.id).css({bottom: '0px', opacity: 1, zIndex: 1});
		},
		closeSnackBar = function() {
			$('#'+defaults.id).css({bottom: '', opacity: '', zIndex: ''});
		}

		switch(defaults.action){
			case 'open':
				openSnackBar();
				break;
			case 'close':
				closeSnackBar();
				break;
		}

		$('body').delegate('.snackbar', 'click touch', function () {
			closeSnackBar();
		});

        return this;
	};

	// Toasts
	$.fn.toast = function(options) {
		var defaults = {
	 			id: this.attr("id"),
	 			action: null
			};

		$.extend(defaults, options);

		if (!defaults.action) {
			$(document).delegate('[data-action]', 'click touch', function () {
				var action = $(this).attr('data-action'),
					target = $(this).attr('data-target');

				if (action.indexOf('Toast') >= 0) {
					defaults.action = action.replace('Toast', '');
					defaults.id = target.replace('#', '');

					switch(defaults.action){
						case 'open':
							openToast();
							break;
						case 'close':
							closeToast();
							break;
					}
				}
			});
		}

		var openToast = function() {
			$('#'+defaults.id).css({bottom: '0px', opacity: 1, zIndex: 1});
		},
		closeToast = function() {
			$('#'+defaults.id).css({bottom: '', opacity: '', zIndex: ''});
		}

		switch(defaults.action){
			case 'open':
				openToast();
				break;
			case 'close':
				closeToast();
				break;
		}

		$('body').delegate('.toast', 'click touch', function () {
			closeToast();
		});

        return this;
	};

	// Slider
	$.fn.slider = function(options) {
		var defaults = {
				isMobile: $(document).isMobile(),
				startDrag: false,
				progress: $(this).find('input'),
				cursor: $(this).find('.e-slider-handle'),
				disabled: $(this).hasClass('disabled'),
				fill: $(this).find('.e-fill'),
				hasDiscrete: $(this).hasClass('discrete'),
				discrete: $(this).find('.e-discrete-value'),
				steps: $(this).find('.e-steps').length
			},
			self = $(this);

		$.extend(defaults, options);
		
		var getHorizontal = function(event) {
			var clientX = event ? defaults.isMobile ? event.originalEvent.touches[0].clientX : event.clientX : false,
			sliderParent = self.parent(),
			offset = (clientX ? clientX - sliderParent.offset().left : sliderParent.offset().left),
			horizontal = ((offset / sliderParent.width() ) * 100).toFixed(0);

			return (event ? horizontal : defaults.progress.val());
		};

		if (defaults.fill) {
			if (!defaults.disabled) { defaults.fill.css({width: getHorizontal() + "%"}); }
			if (defaults.hasDiscrete) { defaults.discrete.css({marginLeft: getHorizontal() + "%"}).html(getHorizontal()); }
			defaults.cursor.css({left: getHorizontal() + "%"});
		}

		$(this).on('mouseleave', function() {
			defaults.startDrag = false;
			self.css({cursor: 'default'});
		});

        $(this).on('mousedown touchstart', function() {
        	defaults.startDrag = true;
			self.css({cursor: 'pointer'});
        });

        $(this).on('mouseup touchend', function() {
        	defaults.startDrag = false;
			self.css({cursor: 'default'});
			if (defaults.hasDiscrete) { defaults.discrete.css({transform: 'scale(0)'}); }
        });

        $(this).on('mousemove touchmove click', function(event) {
			if (defaults.startDrag) {
				var progressValue = getHorizontal(event);

				if (defaults.hasDiscrete && defaults.steps) { progressValue = (Math.round((progressValue / 20)) * 20); }
				if (progressValue < 1) { self.addClass('zero') } else { self.removeClass('zero')  }

	        	defaults.cursor.css({left: progressValue + "%"});
	        	if (defaults.fill && !defaults.disabled) { defaults.fill.css({width: progressValue + "%"}); }
				if (defaults.hasDiscrete) { defaults.discrete.css({marginLeft: progressValue + "%", transform: 'scale(1)'}).html(progressValue); }
				defaults.progress.val(progressValue);
        	}
        });

        return this;
	};

	// Navigation
	$.fn.navigation = function(options) {
		var defaults = {
				isMobile: $(document).isMobile()
			};

		$.extend(defaults, options);

		$('.e-nav-drawer .e-list-navigation li').on('click', function() {
			if ($(this).hasClass('active')) { 
				$(this).removeClass('active'); 
			} else {
				$('.e-nav-drawer .e-list-navigation li').removeClass('active');
				$(this).addClass('active'); 
			}
		});
        return this;
	};

	// Menu
	$.fn.menu = function(options) {
		var defaults = {
				isMobile: $(document).isMobile()
			};

		$.extend(defaults, options);

		$('.e-nav-menu span:first').on('click', function(event) {
			$(this).next('.e-nav').toggleClass("hide");
			event.preventDefault();
		});

		$('.e-nav-menu .e-nav li').on('click', function(event) {
			var hasLink = $(this).find('a');
			
			$(this).parent().toggleClass("hide");
			
			if (!hasLink.length) {
				event.preventDefault();
			}
		});

        return this;
	};

	// Chips
	$.fn.chips = function(options) {
		var defaults = {
				isMobile: $(document).isMobile(),
				action: false
			},
			self = $(this);

		$.extend(defaults, options);

		if (!defaults.action) {
			$(document).delegate('[data-action]', 'click touch', function () {
				var action = $(this).attr('data-action'),
					target = $(this).attr('data-target');

				defaults.action = action.replace('Chip', '');
				defaults.id = target.replace('#', '');

				switch(defaults.action){
					case 'open':
						openChip();
						break;
					case 'close':
						closeChip();
						break;
				}
			});
		}

		var openChip = function (elem) {
			var chip = $(elem),
				chips = self.find('.e-chip');
			
			chips.addClass("open").removeClass("active first").parent().show();
			chip.addClass('first active');

		}, closeChip = function () {
			self.find('.e-chip.active').removeClass("active");
			self.find('.e-chip').removeClass('open').parent().hide();
			self.find('.e-chip.first').parent().show();
		}

		$(this).find('.e-chip').on('click', function(event) {
			openChip(this);
			event.preventDefault();
		});
		
		switch(defaults.action){
			case 'open':
				openChip();
				break;
			case 'close':
				closeChip();
				break;
		}

        return this;
	};

	// Tabs
	$.fn.tabs = function(options) {
		var defaults = {
				isMobile: $(document).isMobile(),
				action: false,
				id: false,
				styles: { 
					left: 0, 
					right: 0
				}
			},
			self = $(this);

		$.extend(defaults, options);

		if (!defaults.action) {
			$(document).delegate('[data-action]', 'click touch', function (event) {
				var action = $(this).attr('data-action'),
					target = $(this).attr('data-target');

				defaults.action = action.replace('Tab', '');
				defaults.id = target;

				switch(defaults.action){
					case 'open':
						openTab();
						break;
				}

				event.preventDefault();
			});
		}

		var highlighter = function() {
			var tabLink = self.find("[data-target='"+defaults.id+"']"),
				tabsContainer = self.find('.e-tabs-list'),
				tabLinkLeft = parseInt( tabLink.offsetParent().position().left ),
				tabLinkRight = parseInt( tabsContainer.outerWidth() - (tabLinkLeft + tabLink.offsetParent().outerWidth()) ),
				styles = { 
					left: tabLinkLeft + "px", 
					right: tabLinkRight + "px"
				};

			self.find(".e-tabs-highlighter").removeClass("to-right to-left");

			if (tabLinkRight > defaults.styles.right) {
				self.find(".e-tabs-highlighter").addClass("to-left")
			} else {
				self.find(".e-tabs-highlighter").addClass("to-right")
			}

			self.find(".e-tabs-highlighter").css(styles)

			defaults.styles = {
				left: tabLinkLeft, 
				right: tabLinkRight
			};
		},
		openTab = function () {
			var tabLinks = self.find("[data-target]").parent(),
				tabLink = self.find("[data-target='"+defaults.id+"']"),
				tabContents = self.find(".e-tabs-container .e-tab-content"),
				tabContent = self.find(defaults.id);

			tabLinks.removeClass("active");
			tabContents.removeClass("active");
			tabContent.addClass("active");
			tabLink.parent().addClass("active");
			highlighter();
		}

		switch(defaults.action){
			case 'open':
				openTab();
				break;
		}

        return this;
	};

}( jQuery ));