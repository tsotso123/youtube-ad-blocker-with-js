this is a simple script that can be used to detect ads, and simply put them at an end.
the way i used it was with my own browser that i built using android WebView, 
by overriding the onLoadResource function, and executing the script there, we almost have an ad free experience.
the only exception is an occasional small skip button with a timer, that i didn't bother automating (messy iframe handling). 

