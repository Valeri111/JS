first_btn.onclick= function() {
 firstWindow = window.open("","firstWindow",
 "width=200, height=200, toolbar=no, menubar=no, status=yes, location=no, scrollbars=yes");
}

second_btn.onclick= function() { 
    firstWindow = window.open("","secondWindow",
    "width=400, height=400, toolbar=yes, menubar=yes, status=yes, location=no, scrollbars=no");     
}