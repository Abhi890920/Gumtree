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



	// Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
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
	$("#rangeSlider").find('.highlight').width(initialRange)

});







