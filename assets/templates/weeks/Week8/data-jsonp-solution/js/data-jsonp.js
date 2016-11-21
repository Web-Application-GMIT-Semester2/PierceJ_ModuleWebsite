$(document).ready(function(){
  var $newContent="";
  $.ajax({
    url: 'http://htmlandcssbook.com/js/jsonp.js?callback=showEvents',
    dataType: 'jsonp',
    success: function(dataWeGotViaJsonp){
      var text = '';
      var len = dataWeGotViaJsonp.length;
      for(var i=0;i<len;i++){
        twitterEntry = dataWeGotViaJsonp[i];
        text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
      }
      $('#content').html(text);
    }
  });
})
/*function showEvents(data) {                           // Callback when JSON loads
  var newContent = '';                                // Variable to hold HTML

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation - see ajax lab 3 - js/data-xml-alt.js - for an example)
    for (var i = 0; i < data.events.length; i++) {    // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />';
      newContent += '<p><b>' + data.events[i].location + '</b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}*/
