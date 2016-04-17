$(document).ready(function () {


$(".loader").show();
$(window).load(function(){
$(".loader").fadeOut();
})


	var window_width = $(window).innerWidth();
	var p = $(".logo img").position();

	$(document).mousemove(function (event) {

		if (event.pageX >= (window_width / 2)) {
			$(".night").css({
				"width": "45%"
			})

			$(".logo img ").css({
				'left': p.left - 15

			})
			$(".logo .logo-1 ").css({
				'left': p.left - 21

			})
			$(".logo .logo-3 ").css({
				'left': p.left - 18

			})
			$(".logo .logo-4 ").css({
				'left': p.left - 25

			})
			$(".logo .logo-5 ").css({
				'left': p.left - 30

			})
			$(".logo .logo-6 ").css({
				'left': p.left - 20

			})
			$(".logo .logo-7 ").css({
				'left': p.left - 20

			})
			$(".logo .logo-8 ").css({
				'left': p.left - 20

			})

			$(".moon ").css({
				'left': -40,
				'top': 80

			})
			$(".sun ").css({
				'right': 20,
				'top': 80
			})

		} else {
			$(".night").css({
				"width": "49%"
			})

			$(".logo img ").css({
				'left': p.left + 15
			})
			$(".logo .logo-1 ").css({
				'left': p.left + 21

			})
			$(".logo .logo-3 ").css({
				'left': p.left + 18

			})
			$(".logo .logo-4 ").css({
				'left': p.left + 25

			})
			$(".logo .logo-5 ").css({
				'left': p.left + 30

			})
			$(".logo .logo-6 ").css({
				'left': p.left + 20

			})
			$(".logo .logo-7 ").css({
				'left': p.left + 18

			})
			$(".logo .logo-8 ").css({
				'left': p.left + 25

			})

			$(".moon ").css({
				'left': 40,
				'top': 80

			})
			$(".sun ").css({
				'right': -200,
				'top': 80

			})
		}

	});

	$(document).mouseout(function () {
		$(".night").css({
			"width": "47%"
		})
		$(".logo img,logo .logo-1,.logo .logo-3,.logo .logo-4,.logo .logo-5 ,.logo .logo-6,.logo .logo-7,.logo .logo-7 ").css({
			'left': '0',
			'right': '0'
		})

		$(".moon ").css({
			'left': -40,
			'top': 80

		})
		$(".sun ").css({
			'right': -200,
			'top': 80

		})
		$(".popeye img").css({
			'margin-right': 'auto',
			'margin-left': 'auto',
			'left': '0',
			'right': '0'
		})
	})



	//	event click===============

	$(".event-1").css({
		'opacity': '0'
	})
	$(".cross,.cross-icon,.cross-3,.cross-icon-3").hide();



	$("header .main-header li .event-link ").click(function () {

		setTimeout(function () {
				$(".cross,.cross-icon").fadeIn();

			}, 1000)



		$(".base").css({
			'left': '-40vw',
			'transition': 'all 0.9s ease-in-out'
		})

		$(".events").css({
			'left': '-10vw',
			'transition': 'all 0.6s ease-in-out'
		})

		setTimeout(function () {
			$(".event-1").css({
				'opacity': '1'
			})
		}, 800)

	})


	//	click cross
	$(".events .cross ").click(function () {
		


		$(".base").css({
				'left': '0vw',
				'transition': 'all 0.5s ease-in-out'
			})
			// alert("")
		$(".events").css({
			'left': '100vw',
			'transition': 'all 0.6s ease-in-out'
		})
		$(".event-1").css({
			'opacity': '0'
		})
		$(".cross,.cross-icon").hide();
	
	});


	//events open =======

	$(".event-list").click(function () {
		$(this).css({
			'cursor': 'auto'
		})
	})

	$(".event-1").click(function () {

		$(".char-1").css({
			'left': '-100%'
		})

		$(".event-1").css({
			'width': '100%'
		})
		$(".event-2,.event-3,.event-4,.event-5,.event-6").css({
			'width': '0'
		});
		$(".cross,.cross-icon").hide();
		$(".cross-3,.cross-icon-3").fadeIn();

		$(".event-1 .coderz").fadeOut(200);
		$(".coderz-details").fadeIn();




	})
	$(".event-2").click(function () {
		$(".event-1,.event-3,.event-4,.event-5,.event-6").css({
			'width': '0'
		});
		$(this).css({
			'width': '100%'
		});
		$(".cross,.cross-icon").hide();
		$(".cross-3,.cross-icon-3").fadeIn();
		$(".event-2 .play").fadeOut(200);
		$(".pio-details").fadeIn();

	})

	$(".event-3").click(function () {
		$(".event-1,.event-2,.event-4,.event-5,.event-6").css({
			'width': '0'
		});
		$(this).css({
			'width': '100%'
		});
		$(".event-1,.event-2").css({
			'width': '0'
		});
		$(".cross,.cross-icon").hide();
		$(".cross-3,.cross-icon-3").fadeIn();
			$(".event-3 .mech").fadeOut(200);
		$(".mech-details").fadeIn();

	})

	$(".event-4").click(function () {
		$(".event-1,.event-3,.event-2,.event-5,.event-6").css({
			'width': '0'
		});
		$(this).css({
			'width': '100%'
		});
		$(".event-1,.event-2,.event-3").css({
			'width': '0'
		});
		$(".cross,.cross-icon").hide();
		$(".cross-3,.cross-icon-3").fadeIn();
		$(".event-4 .robo").fadeOut(200);
		$(".robo-details").fadeIn();

	})

	$(".event-5").click(function () {
		$(".event-1,.event-3,.event-4,.event-2,.event-6").css({
			'width': '0'
		});
		$(this).css({
			'width': '100%'
		});
		$(".event-1,.event-2,.event-3,.event-4").css({
			'width': '0'
		});
		$(".cross,.cross-icon").hide();
		$(".cross-3,.cross-icon-3").fadeIn();
		$(".event-5 .colo").fadeOut(200);
		$(".colo-details").fadeIn();

	})

	$(".event-6").click(function () {
		$(this).css({
			'width': '100%'
		});
		$(".event-1,.event-2,.event-3,.event-4,.event-5").css({
			'width': '0'
		});
		$(".cross,.cross-icon").hide();
		$(".cross-3,.cross-icon-3").fadeIn();
		$(".event-6 .zr").fadeOut(200);
		$(".zr-details").fadeIn();

	})

	$(".cross-3,.cross-icon-3").click(function () {
		$(".char-1").css({
			'left': '-28%'
		})
		$(".event-list").css({
			'cursor': 'pointer'
		});

		$(".cross,.cross-icon").fadeIn();
		$(".cross-3,.cross-icon-3").hide();
		$(".event-2,.event-3,.event-4,.event-5").css({
			'width': '14%'
		})
		$(".event-1,.event-6").css({
			'width': '22%'
		})
		setTimeout(function(){
			$(".event-list .coderz,.event-list .play,.event-list .mech,.event-list .robo,.event-list .zr,.event-list .colo").fadeIn(200);
		},200)
		
		$(".detail").fadeOut();
	});



	//	team page

	$("header .main-header li .team-link").click(function () {

		$(".team").css({
			'left': '0px'
		})
		setTimeout(function () {
			$(".cross-2,cross-icon-2").fadeIn();

		}, 800)
		$(".base").css({
			'left': '-40vw',
			'transition': 'all 0.9s ease-in-out'
		})

	})

	$(".cross-2,.cross-icon-2").click(function () {

		$(".cross-2,.cross-icon-2").hide();

		$(".base").css({
			'left': '0vw',
			'transition': 'all 0.5s ease-in-out'
		})

		$(".team").css({
			'left': '100vw'

		})
	})

	//	team page

	$("header .main-header li .team-link").click(function () {

		$(".team").css({
			'left': '0px'
		})
		setTimeout(function () {
			$(".cross-2,.cross-icon-2").fadeIn();

		}, 800)
		$(".base").css({
			'left': '-40vw',
			'transition': 'all 0.9s ease-in-out'
		})

	})

	$(".cross-2,.cross-icon-2").click(function () {

		$(".cross-2,.cross-icon-2").hide();

		$(".base").css({
			'left': '0vw',
			'transition': 'all 0.5s ease-in-out'
		})

		$(".team").css({
			'left': '100vw'

		})
	})
	
	//     reachpage
	
	$("header .main-header li .reach-link").click(function () {

		$(".reach").css({
			'left': '0px'
		})
		setTimeout(function () {
			$(".cross-2,.cross-icon-2").fadeIn();

		}, 800)
		$(".base").css({
			'left': '-40vw',
			'transition': 'all 0.9s ease-in-out'
		})

	})

	$(".cross-2,.cross-icon-2").click(function () {

		$(".cross-2,.cross-icon-2").hide();

		$(".base").css({
			'left': '0vw',
			'transition': 'all 0.5s ease-in-out'
		})

		$(".reach,.about").css({
			'left': '100vw'

		})
	})


	// events-details pages==================

	$(".detail").hide();


	//about page
	
		$("header .main-header li .about-link").click(function () {

		$(".about").css({
			'left': '0px'
		})
		setTimeout(function () {
			$(".cross-2,.cross-icon-2").fadeIn();

		}, 800)
		$(".base").css({
			'left': '-40vw',
			'transition': 'all 0.9s ease-in-out'
		})

	})




// team slider

$(".slider-arrow").hide();


	$(".team-link").click(function(){
		setTimeout(function(){
	$(".slider-arrow").fadeIn();
},500)
})


$(".cross-2").click(function(){
	$(".slider-arrow").hide();
})

$(".right").click(function(){
	// alert("k")
	$(".team-slider").animate({
            scrollLeft: "+=330"
        }, 400);
})
$(".left").click(function(){
	// alert("k")
	$(".team-slider").animate({
            scrollLeft: "-=330"
        }, 400);
})


//register page===================

		
	$("header .main-header li .register-link").click(function () {

		$(".register").css({
			'left': '0px'
		})
		setTimeout(function () {
			$(".cross-2,.cross-icon-2").fadeIn();

		}, 800)
		$(".base").css({
			'left': '-40vw',
			'transition': 'all 0.9s ease-in-out'
		})

	})

	$(".cross-2,.cross-icon-2").click(function () {

		$(".cross-2,.cross-icon-2").hide();

		$(".base").css({
			'left': '0vw',
			'transition': 'all 0.5s ease-in-out'
		})

		$(".register").css({
			'left': '100vw'

		})
	})
		

		// video
		$(".vid").hide();
		$(".video-link").click(function(){
			$(".vid").fadeIn();
			
			$(".vid-cross").click(function(){
				$(".vid").fadeOut();
				

			})


		})

// sponsor

	//sponsor
				
	$("header .main-header li .sponsor-link").click(function () {

		$(".sponsor").css({
			'left': '0px'
		})
		setTimeout(function () {
			$(".cross-2,.cross-icon-2").fadeIn();

		}, 800)
		$(".base").css({
			'left': '-40vw',
			'transition': 'all 0.9s ease-in-out'
		})

	})

	$(".cross-2,.cross-icon-2").click(function () {

		$(".cross-2,.cross-icon-2").hide();

		$(".base").css({
			'left': '0vw',
			'transition': 'all 0.5s ease-in-out'
		})

		$(".sponsor").css({
			'left': '100vw'

		})
	})



// ajax

		
	$('#register_btn').on('click', function() {
			event.preventDefault();
			create_post();
		});

		function create_post() {

			// var name = $("input#name").val();
			var name = $("#name").val(),
			 email = $("#email").val(),
			 college = $("#college").val(),
			 contact = $("#contact").val(),
			 branch= $("#branch").val(),
			 course= $("#course").val(),
			 year= $("#year").val(),
			 dataString = '';

			if(name==null || email==null || college==null || contact == null || branch == "" || year == "" || course == ""){
				$(".warn-msg").html("PLease fill all the enteries").hide().fadeIn(500);
				
			}
			else if ( contact.length!=10 ) {

				$(".warn-msg").html("PLease check your contact number").hide().fadeIn(500);
				
		
			}
				else if(isNaN(contact)==true){
				$(".warn-msg").html("PLease check your contact number").hide().fadeIn(500);
				
			} 
			else if(validateEmail(email)==false){
				$(".warn-msg").html("PLease check your email address").hide().fadeIn(500);
				
			}
			else  {
				// $("form").css({
				// 	'opacity': '0.1'
				// });
				
				$("form").html("SENDING...");
				$.ajax({
					url: "abcdjfb", // the endpoint
					type: "POST", // http method
					data: {
						
					}, // data sent with the post request

					// handle a successful response
					success: function(json) {
						
						$("form").css({
							'opacity': '1'
						})
						name= name.toUpperCase();
						console.log('SS');
						if(json.length<=15){
						$('form').html("<div id='message'>HI'"+ name +"'!<br> WE HAVE RECIEVED YOUR REQUEST.<br>PLEASE NOTE DOWN YOUR ZEALICON ID</div>");
						}
						else{
							$('form').html("<div id='message'>:( ERRORRRRRR...!<br> IT SEEMS THAT YOU HAVE ALREADY REGISTERED WITH YOUR EMAIL ID.<br>PLEASE RELOAD THE PAGE AND TRY AGAIN<br>THANKS</div>");
						}
					},

					// handle a non-successful response
					error: function(xhr, errmsg, err) {
						$("form").html("LOOKS LIKE SOMETHING WENT WRONG :(")
					}
				});
			} 
			function validateEmail(email) {
				var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,10}$/;

				if (filter.test(email)) {
					return true;
				} else {
					return false;
				}
			}
		}

});
