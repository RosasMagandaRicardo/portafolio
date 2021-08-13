jQuery(document).ready(function () {
  /* ---------------------------------------------------------------------- */
  /*	Custom Functions
	/* ---------------------------------------------------------------------- */

  // Logo
  var $logo = $("#logo");

  if (location.href.indexOf("#") != -1) {
    $logo.show();
  }
  // Show logo
  $(".menu .tabs a").click(function () {
    $logo.fadeIn("slow");
  });
  // Hide logo
  $(".tab-profile").click(function () {
    $logo.fadeOut("slow");
  });

  /* ---------------------------------------------------------------------- */
  /*	Rueda Colores
	/* ---------------------------------------------------------------------- */
  $("#yellow-color").click(function () {
    $(".main-wrapper-resumen").attr("id", "yellow");
  });
  
  $("#red-color").click(function () {
    $(".main-wrapper-resumen").attr("id", "red");
  });
  
  $("#blue-color").click(function () {
    $(".main-wrapper-resumen").attr("id", "blue");
  });
  
  $("#green-color").click(function () {
    $(".main-wrapper-resumen").attr("id", "green");
  });

  $("#setting-icon").click(function () {
    $(".color-box").toggleClass("main");
  });

  /* ---------------------------------------------------------------------- */
  /*	Menu
	/* ---------------------------------------------------------------------- */

  // Needed variables
  var $content = $('#content');

  // Run easytabs
  $content.easytabs({
    animate: true,
    updateHash: false,
    transitionIn: 'slideDown',
    transitionOut: 'slideUp',
    animationSpeed: 600,
    tabs: '.tmenu',
    tabActiveClass: 'active',
  });

  // Hover menu effect
  $content.find('.menu .tabs li a').hover(
    function () {
      $(this).stop().animate({ marginTop: "-7px" }, 200);
    },
    function () {
      $(this).stop().animate({ marginTop: "0px" }, 300);
    }
  );
});
