var total_time_in_seconds=0;

var text;
var time;

var hr, mins, sec=0;

for (let i = 0; i < document.querySelectorAll("ytd-playlist-video-renderer").length; i++) {
    // get the time
    text = document.querySelectorAll("ytd-playlist-video-renderer")[i].querySelector("#text").textContent;
    text.slice(3,text.length-1);
    var colon_index;
    for (let j = 0; j < text.length; j++) {
        if(text[j]==':')
        {
            colon_index = j;
            break;
        }
    }

    mins=parseInt(text.slice(0,colon_index));
    sec=parseInt(text.slice(colon_index+1, text.length));

    
    // add time to total
    total_time_in_seconds = total_time_in_seconds+mins*60+sec;
    
}
sec=total_time_in_seconds;


hr=parseInt(sec/(60*60));
sec=parseInt(sec%(60*60));

mins=parseInt(sec/60);
sec=parseInt(sec%60);

alert("total time is: "+hr+" hrs: "+mins+" min: "+sec+" sec.");
