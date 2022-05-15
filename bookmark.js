javascript: (function() {
    functioncallback() {
        (function($) {
            varjQuery = $;
            functioncallback() {
                getGpx()
            }
            vars = document.createElement("script");
            s.src = "https://mapstogpx.com/strava/mapstogpxstrava.js";
            if (s.addEventListener) {
                s.addEventListener("load", callback, false)
            }
            elseif(s.readyState) {
                s.onreadystatechange = callback
            }
            document.body.appendChild(s);
        })(jQuery.noConflict(true))
    }
    vars = document.createElement("script");
    s.src = "https://mapstogpx.com/strava/jquery.min.js";
    if (s.addEventListener) {
        s.addEventListener("load", callback, false)
    }
    elseif(s.readyState) {
        s.onreadystatechange = callback
    }
    document.body.appendChild(s);
})()
