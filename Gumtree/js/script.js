(function() {
	"use strict";
  
	/** Easy selector helper function **/
	const select = (el, all = false) => {
	  el = el.trim()
	  if (all) {
		return [...document.querySelectorAll(el)]
	  } else {
		return document.querySelector(el)
	  }
	}
  
	/** Easy event listener function **/
	const on = (type, el, listener, all = false) => {
	  if (all) {
		select(el, all).forEach(e => e.addEventListener(type, listener))
	  } else {
		select(el, all).addEventListener(type, listener)
	  }
	}
  
	/** Mobile nav toggle **/
	 on('click', '.navbar-toggler', function(e) {
		select('body').classList.toggle('navbarShow')
	  })


	  const aboutSlider = new Swiper('#aboutSlider', {
		loop: true,	  
		slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          600: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
	  });

	  const planSlider = new Swiper('#planSlider', {
		loop: false,	  
		slidesPerView: 1,
        spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
        breakpoints: {
          600: {
            slidesPerView: 1,
            spaceBetween:0,
          },
		  700: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
	  });

	  const testiSlider = new Swiper('#testiSlider', {
		loop: false,	  
		slidesPerView: 1,
        spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	  });


	  on('click', '#playPauseBtn', function(e) {
		  let video = select('#myVideo');
		  let playPauseBtm = select('#playPauseBtn');
		  if (video.paused) {
			video.play();
			playPauseBtm.innerHTML = "Pause";
		    select('#playPauseBtn').classList.add('play')
		  } else {
			video.pause();
			playPauseBtm.innerHTML = "Play";
		    select('#playPauseBtn').classList.remove('play')
		  }
	  })
  
  })();



  $( document ).ready(function() {

	var uiValue = $('<div class="uiValue"><span class="val">70</span> hours</div>');
	var rangeSlider = $("#rangeSlider").slider({
		value: 70,
		min: 0,
		max: 200,
		step: 1,
		create: startSlide,
		slide: startSlide,
		change: startSlide
	})
	rangeSlider.append('<div class="highlight"></div>');
	rangeSlider.find(".ui-slider-handle").append(uiValue);

	function startSlide(event, ui){
		let range = $(this).find('.ui-slider-handle').css("left");
		$(this).find('.highlight').width(range);
		uiValue.find('.val').text(ui.value);
	}
	let initialRange = $("#rangeSlider").find('.ui-slider-handle').css("left");
	$("#rangeSlider").find('.highlight').width(initialRange);
	  
	
	// Start Form Validation

	let userName =  $("#userName"),
		userCheck = $("#userCheck"),
		usernameError = true,
		email =  $("#email"),
		emailCheck = $("#emailCheck"),
		emailError = true,
		phoneNumber = $("#phoneNumber"),
		phoneNumberCheck = $("#phoneNumberCheck"),
		phoneNumberError = true;

	userCheck.hide();
	emailCheck.hide();
	phoneNumberCheck.hide();

	// on Key Press
	userName.keyup(function () {
		validateUsername();
	});

	email.keyup(function(){
		validateEmail()
	})

    phoneNumber.keyup(function () {
		validatePhoneNumber();
	});

	// Validate Username
	function validateUsername() {
		let usernameValue = userName.val();
		if (usernameValue.length == "") {
			userCheck.show();
			usernameError = false;
			userName.addClass("is-invalid");
			return false;
		} else if (usernameValue.length < 3 || usernameValue.length > 10) {
			userCheck.show().html("Length of username must be between 3 and 10");
			usernameError = false;
			return false;
		} else {
			userCheck.hide();
			userName.removeClass("is-invalid");
		}
	}

	// Validate Email
	function validateEmail(){
		let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
		let emailValue = email.val();

		if (emailValue.length == "") {
			email.addClass("is-invalid");
			emailCheck.show();
			emailError = true;
			return false;
		}else if (!regex.test(emailValue)) {
			email.addClass("is-invalid");
			emailCheck.show().html("Email must be a valid email");
			emailError = true;
			return false;
		} else {
			email.removeClass("is-invalid");
			emailCheck.hide();
			emailError = false;
		}
	}

	// Validate Phone number
	function validatePhoneNumber() {
		let phoneNumberValue = phoneNumber.val();
		if (phoneNumberValue.length == "") {
			phoneNumberCheck.show();
			phoneNumberError = false;
			return false;
		}else if ( phoneNumberValue.length > 10 || phoneNumberValue.length < 10) {
			phoneNumberCheck.show().html("Your number must be 10 digit");
			phoneNumberError = false;
			return false;
		} else {
			phoneNumberCheck.hide();
		}
	}

	// Submit button
	$("#submitBtn").click(function () {

		validateUsername();
		validateEmail();
		validatePhoneNumber();
		
		if (usernameError == true  && emailError == true && validatePhone == true ){
			return true;
		} else { 
			return false;
		}
	});	  

});







