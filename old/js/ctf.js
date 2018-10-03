var particleAnimsOn = true;

function isEmpty(data)
{
  if(data === "" || !data)
   return true;
  return false;
}

function startParticles(){
  particlesJS.load('particles-js', 'js/particles.json', function() {
  });
}

function stopParticles(){
  particlesJS.load('particles-js', 'js/stopparticles.json', function() {
  });
}

function runParticles(){
  if(particleAnimsOn){
    startParticles();
  }
}

function toggleParticles(){
  if(particleAnimsOn){
    particleAnimsOn = false;
    stopParticles();
  }
  else{
    particleAnimsOn = true;
    startParticles();
  }
}

function randxplox(){
  var xx = $('#ctf-action').width() - 100;
  var explode_coord = (Math.floor(Math.random() * xx) + 1);
  console.log(explode_coord);
  return explode_coord.toString();
}

function randxploy(){
  var yy = 500;
  var explode_coord = (Math.floor(Math.random() * yy) + 1);
  console.log(explode_coord);
  return explode_coord.toString();
}


jQuery.kaboom = function()
{
 <!--The visual of victory-->
  var g = $('<img class="bigbadaboom" style="position:fixed;z-index:100;top:' + randxploy() + 'px;left:' +  randxplox() + 'px;" src="static/img/bigbadaboom.gif"/>');
  $('#chall-container').append(g);
  var g = $('<img class="bigbadaboom" style="position:fixed;z-index:100;top:' + randxploy() + 'px;left:' +  randxplox() + 'px;" src="static/img/bigbadaboom.gif"/>');
  $('#chall-container').append(g);
    var g = $('<img class="bigbadaboom" style="position:fixed;z-index:100;top:' + randxploy() + 'px;left:' +  randxplox()  + 'px;" src="static/img/bigbadaboom.gif"/>');
  $('#chall-container').append(g);
  $(".bigbadaboom").show();
  $(".bigbadaboom").delay(3000).fadeOut(3000);
  setTimeout(function() {
  $(".bigbadaboom").remove();
  }, 3000);
}

jQuery.win = function()
{
 <!--The sound of victory-->
 var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'static/img/pew.mp3');
 audioElement.setAttribute('autoplay', 'autoplay');
 audioElement.addEventListener("load", function() {
     audioElement.play();
 }, true);
}

jQuery.set_team = function(){
   $.ajax({
    url: '/team_info',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-points').empty();
     $('#ctf-points').append(data.points);
     $('#ctf-team').empty();
     $('#ctf-team').append(data.team);
    },dataType:'json'});
}

jQuery.set_login = function(){
   $.ajax({
    url: '/get_login',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});
}

jQuery.set_register= function(){
   $.ajax({
    url: '/get_register',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});

}

jQuery.set_scoreboard= function(){
   $.ajax({
    url: '/get_scoreboard',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});
}

jQuery.set_challenges= function(){
   $.ajax({
    url: '/get_challenges',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});
}

jQuery.set_sponsors= function(){
   $.ajax({
    url: '/get_sponsors',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});
}

jQuery.set_info= function(){
   $.ajax({
    url: '/get_info',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});
}

jQuery.do_logout= function(){
  $.ajax({
   url: '/logout',
   type: 'GET',
   error: function(){
   },
   success: function(data){
    location.reload();
   },dataType:'json'});
}

jQuery.set_hints = function(){
   $.ajax({
    url: '/get_hints',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});
}

jQuery.set_achievements = function(){
   $.ajax({
    url: '/get_achievements',
    type: 'GET',
    error: function(){
    },
    success: function(data){
     $('#ctf-action').empty();
     $('#ctf-action').append(data.content);
    },dataType:'json'});
}

$(function() {
 $('#ctf-topbar').on('click', '#menu-chat', function(event){
   window.open('https://kiwiirc.com/client/irc.freenode.net:+6667/#securityfest-ctf', '_blank');
 });
});

$(function() {
   $('#ctf-topbar').on('click', '#toggle-animation', function(event){
     toggleParticles();
   });
});


$(function() {
	 $('#ctf-topbar').on('click', '#menu-login', function(event){
	   $.set_login();
	 });
});

$(function() {
	 $('#ctf-topbar').on('click', '#menu-register', function(event){
	   $.set_register();
	 });
});

$(function() {
	 $('#ctf-topbar').on('click', '#menu-scoreboard', function(event){
	   $.set_scoreboard();
	 });
});

$(function() {
	 $('#ctf-topbar').on('click', '#menu-challenges', function(event){
	   $.set_challenges();
	 });
});

$(function() {
  $('#ctf-topbar').on('click', '#menu-sponsors', function(event){
    $.set_sponsors();
  });
});


$(function() {
	$('#ctf-topbar').on('click', '#menu-logout', function(event){
	 	$.do_logout();
	});
});

$(function() {
  $('#ctf-topbar').on('click', '#menu-hints', function(event){
    $.set_hints();
  });
});

$(function() {
  $('#ctf-topbar').on('click', '#ctf-team', function(event){
    $.set_achievements();
  });
});

$(function() {
  $('#ctf-topbar').on('click', '#menu-info', function(event){
    $.set_info();
  });
});

$(document).on('click', '#login-button', function(event){
	if(isEmpty($('#login-team').val()) || isEmpty($('#login-password').val()))
	{
	 $('#login-msg').html("Credentials empty!");
	 $('#login-msg').fadeTo('medium', 100).delay("800");
	 $('#login-msg').fadeTo('medium', 0);
	 return;
	}

	$.ajax({
	 url: '/login',
	 type: 'POST',
	 data: "team="+$('#login-team').val()+"&password="+$('#login-password').val(),
	 error: function(){
	 },
	 success: function(data){
	  if(data.result == 'false')
	  {
	   $('#login-msg').html(data.msg);
	   $('#login-msg').fadeTo('medium', 100).delay("800");
	   $('#login-msg').fadeTo('medium', 0);
	  }
	  else{
	   location.reload();
	  }
	 },dataType:'json'});
});

$(document).on('click', '#register-button', function(event){
  if(isEmpty($('#reg-teamname').val()) || isEmpty($('#reg-password').val()))
  {
   $('#reg-msg').html("Credentials empty!");
   $('#reg-msg').fadeTo('medium', 100).delay("800");
   $('#reg-msg').fadeTo('medium', 0);
   return;
  }

  if($('#reg-country option:selected').text() === "")
  {
   $('#reg-msg').html("Pick a country!");
   $('#reg-msg').fadeTo('medium', 100).delay("800");
   $('#reg-msg').fadeTo('medium', 0);
   return;
  }

  if($('#reg-location option:selected').text() === "")
  {
   $('#reg-msg').html("Pick a location!");
   $('#reg-msg').fadeTo('medium', 100).delay("800");
   $('#reg-msg').fadeTo('medium', 0);
   return;
  }

   $.ajax({
    url: '/register',
    type: 'POST',
    data: "teamname="+$('#reg-teamname').val()+"&password="+$('#reg-password').val()+"&country="+$('#reg-country').val()+"&captcha="+$('.g-recaptcha-response').val()+"&location="+$('#reg-location').val(),
    error: function(){
    },
    success: function(data){
     if(data.result == 'false')
     {
      $('#reg-msg').html(data.msg);
      $('#reg-msg').fadeTo('medium', 100).delay("800");
      $('#reg-msg').fadeTo('medium', 0);
     }
     else{
      location.reload();
     }
    },dataType:'json'});
});

  $(document).on('click', '#flag-button', function(event){
  $.ajax({
   url: '/submit_flag',
   type: 'POST',
   data: "flag="+$('#flag-entry').val(),
   error: function(){
   },
   success: function(data){
    if(data.result == 'true')
    {
      $("#ctf-ship-" + data.id).addClass("ctf-ship-grey");
      $("#ctf-text-" + data.id).addClass("ctf-txt-done");
      $.win();
      $.kaboom();
      Materialize.toast('Achievement unlocked: ' + data.achievement, 5000, 'rounded')

      var cur_pts = $('#ctf-points').html();
      cur_pts = parseInt(cur_pts);
      cur_pts = cur_pts + parseInt(data.points);
      cur_pts = cur_pts.toString();
      $('#ctf-points').html(cur_pts);
    }

    $('#flag-msg').html(data.msg);
    $('#flag-msg').fadeTo('medium', 100).delay("800");
    $('#flag-msg').fadeTo('medium', 0);
   },dataType:'json'});

 });
