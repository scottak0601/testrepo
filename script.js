jQuery(document).ready(function($) {

    //Function to move icon
    $('#circles div').click(function(){
        if($(this).closest('#circles').length > 0){
            $(this).prependTo("#squares");
        }
        else{
            $(this).prependTo("#circles");
        }
    })
    
});