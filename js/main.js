// Current Page Link Color
$(document).ready(function() {
    $("header nav a").each(function()
    {
        if(this.href==window.location.href)
        {
            $(this).addClass('current');
            $(this).removeAttr('href');
        }
    });
});