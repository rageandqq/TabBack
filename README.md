#TabBack
##Description
A simple solution to a painful problem.  
Unlike in Google Chrome, where Command+Shift+T reopens the last closed tab(s), there is no such utility in Safari.  
You can only open the last tab you closed with Command+Z, but not more than that.  

TabBack allows you open multiple closed tabs, using the key-sequence Alt+Shift+T.  
(Command+Shift+T is reserved for showing the tabs bar).  

No dependencies, no bulky features, and no managers required.  
Just JavaScript.  

##Under the Hood
[tabBackListener.js](TabBack.safariextension/tabBackListener.js) is inserted at the end of every page loaded by Safari.  
[global.html](TabBack.safariextension/global.html) is used as a global event handler by the extension.  

When a listener on a page detects the Alt+Shift+T sequence, it fires an event to the global page.  
At this point, if there is a previously closed tab that can be opened, that tab is re-opened in the active window.

##Installation
To install, simply download the [TabBack.safariextz](https://github.com/rageandqq/TabBack/blob/master/TabBack.safariextz?raw=true) file and open it with Safari, accept the permissions, and restart the browser.  
After that, you're good to go!  

##Contribution
Pull requests are welcomed, especially those that increase the efficiency of the implementation!  

##License
Licensed under the Apache License, v2.0.  

##Author
Created by Sameer Chitley  
