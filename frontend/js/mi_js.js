



//-------------- slider proyectos -------------------------
function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});

/*---------------------------------------------*/
/*---- FIN SLIDER PROYECTOS----*/
/*-----------------------------------------*/






//--------------------------------------------------
//--- BOTON ARRIBA-
//--------------------------------------

$(document).ready(function(){
  $('.ir-arribaa').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 1000);
  });

        $(window).scroll(function(){
          if ($(this).scrollTop() > 0 ){
            $('.ir-arribaa').slideDown(300);
          } else {
            $('.ir-arribaa').slideUp(300);
          }
        });

});



//---------------------------- FORM


$('.toggle2').on('click', function() {
  $('.container2').stop().addClass('active');
});

$('.close2').on('click', function() {
  $('.container2').stop().removeClass('active');
});



// ------------------------------- MENU


			// Menu toggle-button

		$(document).ready(function() {
			$(".menu-icon").on("click", function() {
				$("nav ul").toggleClass("showing");

			});
		});


	/*	   // Scrolling effect

		 $(window).on("scroll", function() {

		 	if($(window).scrollTop()) {
		 		$('nav').addClass('black');
		 	}
		 	else {
		 		$('nav').removeClass('black');
		 	}


		 }) */


	// PRIMERA MANERA DIFERENTE DE ESCONDER EL SCROLL

		var prevScrollpos = window.pageYOffset;
		 	window.onscroll = function() {

		 		var currentScrollpos = window.pageYOffset;
		 			if(prevScrollpos > currentScrollpos) {
		 				document.getElementById("navbar9").style.top = "0";
		 			} else {
		 				document.getElementById("navbar9").style.top = "-100px";
		 			}

		 			prevScrollpos = currentScrollpos;
		 	} 

// SEGUNDA MANERA DIFERENTE DE ESCONDER EL SCROLL
/*
let prevScrollPosition = window.pageYOffset;

window.onscroll = function() {

    const currentScrollPosition = window.pageYOffset;
  
    if (prevScrollPosition > currentScrollPosition) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-75px";
    }
    
    prevScrollPosition = currentScrollPosition; 
}   */





 // -------------------------------- MODAL -------------------------------------------------
 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// FORM------------------------------------------------

$('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.email').click(
  function(){
    console.log("Something");
    $('.email-section').addClass("fold-up");
    $('.password-section').removeClass("folded");
  }
);

$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password').click(
  function(){
    console.log("Something");
    $('.password-section').addClass("fold-up");
    $('.repeat-password-section').removeClass("folded");
  }
);

$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);

$('.next-button.repeat-password').click(
  function(){
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);



//----------------------------------------- BOTON DE SUBIR ARCHIVO -------------


/*JS for input file
       //update file upload label with name of file
      //https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/*/
var inputs = $('.inputfile');

Array.prototype.forEach.call(inputs, function(input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;
  input.addEventListener('change', function(e) {
    var fileName = '';
    fileName = e.target.value.split('\\').pop();
    if (fileName)
      label.querySelector('span').innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});





//----------------------------------------------------------







/*---------------------------------------------*/
/*---- PROFESORES ----*/
/*-----------------------------------------*/
var timer = 3000;

var i = 0;
var max = $('#c > .holis').length;
 
	$("#c > .holis").eq(i).addClass('active').css('left','0');
	$("#c > .holis").eq(i + 1).addClass('active').css('left','25%');
	$("#c > .holis").eq(i + 2).addClass('active').css('left','50%');
	$("#c > .holis").eq(i + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$("#c > .holis").removeClass('active');

		$("#c > .holis").eq(i).css('transition-delay','0.25s');
		$("#c > .holis").eq(i + 1).css('transition-delay','0.5s');
		$("#c > .holis").eq(i + 2).css('transition-delay','0.75s');
		$("#c > .holis").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > .holis").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > .holis").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#c > .holis").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#c > .holis").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);


//-----------------------------------------------
//-----------------------------------------------
// BOTON PARA SUBIR ARCHIVO PORTADA PERFIL-------------------

function resetImage(input) {
  input.value = '';
  input.onchange();
}
function readImage(input) {
  var receiver = input.nextElementSibling.nextElementSibling;
  input.setAttribute('title', input.value.replace(/^.*[\\/]/, ''));
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      receiver.style.backgroundImage = 'url(' + e.target.result + ')';
    };
    reader.readAsDataURL(input.files[0]);
  }
  else receiver.style.backgroundImage = 'none';
}