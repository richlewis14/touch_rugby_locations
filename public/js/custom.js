// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 800;
var section_show_time = 800;

/* First CSS File */
function loadStyleSheet(src){
  if (document.createStyleSheet) document.createStyleSheet(src);
  else {
    var stylesheet = document.createElement('link');
    stylesheet.href = src;
    stylesheet.rel = 'stylesheet';
    stylesheet.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(stylesheet);
  }
}

// jQuery stuff
$(document).ready(function($) {
  // Render CSS
  loadStyleSheet('/css/home_page.min.css');
  // FOUC
  $('.no-fouc').removeClass('no-fouc');

	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if($(this).attr('href') == '/touchmap') {
			return true;
		}
		else if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});