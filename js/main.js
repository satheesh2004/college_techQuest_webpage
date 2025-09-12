(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});





$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
      },
      992:{
          items:1,
          nav:true
      },
      1200:{
          items:1,
      },
      1600:{
          items:1,
          nav:true
      }
  }
});



// review-active
var brand_active = $('.brand_active');
if(brand_active.length){
  brand_active.owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  center: false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:4
        },
        1500:{
            items:5
        }
    }
  });
}


// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'slide', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    easingType: 'linear',
    scrollText: '<i class="ti-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'slide'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $(document).ready(function() {
          $('select').niceSelect();
        });


        


        const tilt = $('.js-tilt').tilt({
          maxTilt:        20,
          // perspective:    10,   // Transform perspective, the lower the more extreme the tilt gets.
          // easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
          // scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
          // speed:          500,    // Speed of the enter/exit transition.
          // transition:     true,   // Set a transition on enter/exit.
          // disableAxis:    null,   // What axis should be disabled. Can be X or Y.
          // reset:          true,   // If the tilt effect has to be reset on exit.
          // glare:          true,  // Enables glare effect
          // maxGlare:       1       // From 0 - 1.
      });


      var cursor = document.getElementById('cursor');
      document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
      })

})(jQuery);	



// changes maded

// Close the SlickNav menu when a link is clicked
$('.slicknav_nav a').on('click', function() {
  $('.slicknav_btn').trigger('click'); // Simulates clicking the menu button to close it
});


 const allEvents = [
      "COLLOQUIUM (2 M/E)",
      "QUAESTIUM (1 M/E)",
      "ALGOTIUM (1 M/E)",
      "INNOVARIUM (Team)",
      "DESIGNIUM (1 M/E)",
      "BLENDARIUM (1 M/E)",
      "PHOTOGRAPHY (1 M/E)",
      "POSTER CREATION (1 M/E)"
    ];

    const dropdowns = document.querySelectorAll('.event-dropdown');

    function populateDropdowns() {
      dropdowns.forEach(dropdown => {
        dropdown.innerHTML = '<option value="">Select</option>';
        allEvents.forEach(event => {
          const option = document.createElement('option');
          option.value = event;
          option.text = event;
          dropdown.appendChild(option);
        });
      });
    }

    function updateEventOptions() {
      const selectedValues = Array.from(dropdowns).map(d => d.value);
      dropdowns.forEach(dropdown => {
        const currentValue = dropdown.value;
        dropdown.innerHTML = '<option value="">Select</option>';
        allEvents.forEach(event => {
          if (!selectedValues.includes(event) || event === currentValue) {
            const option = document.createElement('option');
            option.value = event;
            option.text = event;
            dropdown.appendChild(option);
          }
        });
        dropdown.value = currentValue;
      });
    }

    populateDropdowns();

    const membersDropdown = document.getElementById("members");
    const memberDetailsDiv = document.getElementById("memberDetails");
    const form = document.getElementById("registrationForm");

    function renderMemberFields(count) {
      memberDetailsDiv.innerHTML = "";
      for (let i = 1; i <= count; i++) {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member-section");
        let role = i === 1 ? "Team Leader" : `Member ${i}`;
        memberDiv.innerHTML = `
          <h4>${role}</h4>
          <label>${role} Name</label>
          <input type="text" class="member-name" placeholder="${role} Name" required>
          <label>${role} Email</label>
          <input type="email" class="member-email" placeholder="${role} Email" required>
        `;
        memberDetailsDiv.appendChild(memberDiv);
      }
    }

    renderMemberFields(1);

    membersDropdown.addEventListener("change", (e) => {
      renderMemberFields(parseInt(e.target.value));
    });

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateMobile(mobile) {
      return /^[0-9]{10}$/.test(mobile);
    }

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let valid = true;
      let errors = [];

      if (!document.getElementById("teamName").value.trim()) {
        valid = false;
        errors.push("Team Name is required.");
      }
      if (!document.getElementById("collegeName").value.trim()) {
        valid = false;
        errors.push("College Name is required.");
      }
      if (!membersDropdown.value) {
        valid = false;
        errors.push("Please select number of members.");
      }

      document.querySelectorAll(".member-name").forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          errors.push("All member names are required.");
        }
      });

      document.querySelectorAll(".member-email").forEach(input => {
        if (!validateEmail(input.value)) {
          valid = false;
          errors.push("All member emails must be valid.");
        }
      });

      const selectedEvents = Array.from(dropdowns).map(d => d.value).filter(v => v);
      if (selectedEvents.length < 3) {
        valid = false;
        errors.push("Please select 3 different events.");
      }
      if (new Set(selectedEvents).size !== 3) {
        valid = false;
        errors.push("Events must be unique.");
      }

      const mobile = document.getElementById("mobile").value;
      if (!validateMobile(mobile)) {
        valid = false;
        errors.push("Mobile number must be 10 digits.");
      }

      const file = document.getElementById("paymentScreenshot").files[0];
      if (!file) {
        valid = false;
        errors.push("Payment screenshot is required.");
      }

      if (valid) {
        alert("✅ Form submitted successfully!");
        form.reset();
        renderMemberFields(1);
        populateDropdowns();
      } else {
        alert("❌ Please fix the following:\n\n" + errors.join("\n"));
      }
    });
