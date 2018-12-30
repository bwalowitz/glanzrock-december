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

// transition page loader

$("nav a").on("click", function (event) {
  
    event.preventDefault()
    
    const href = $(this).attr("href")
    
    window.history.pushState(null, null, href)
    
    $("nav a").removeClass("active")
    $(this).addClass("active")
    
    $.ajax({
      url: href,
      success: function (data) {
        $("div").fadeOut(250, function () {
          const newPage = $(data).filter("div").html()
          
          $("div").html(newPage)
          
          $("div").fadeIn(250)
        })
      }
    })
    
  })