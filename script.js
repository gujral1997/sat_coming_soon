function myFunction(x) {
    x.classList.toggle("change");
}






jQuery(document).ready(function(){
    jQuery(".titleWrapper").addClass("ready");
    
jQuery(".titleWrapper h1").each(function(){
    var fullString;
    var characters = jQuery(this).text().split("");
    
    var $this = jQuery(this);
    $this.empty();
    $.each(characters, function (i, el) {
        if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
    });
        
});
    
});