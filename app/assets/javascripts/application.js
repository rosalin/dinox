// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .



$(document).ready(function() {
    
    $(".rslides").responsiveSlides({
        pager: true
    });
    
    var abas = 'ul#menu li';
    var id;
    var id_link;   
    
    $(abas + ' a').click(function (){       
        
        $(abas + '#' + id_link).removeClass('selected');       
        id_link = $(this).attr('id' );    
        $(abas + '#' + id_link).addClass('selected');       
    });
    
    $(abas + ' a').mouseover(function (){       
        id = $(this).attr('id');      
        $(abas + '#' + id).addClass('selected');       
    });
    
    $(abas + ' a').mouseout(function (){
        $(abas + '#' + id).removeClass('selected');  
        $(abas + '#' + id_link).addClass('selected');
    });
    
 
    
    /*
    var link_produto = '#li_produtos a';
    var span = '.span';
    
    $(link_produto).mouseover(function (){
        $('.span').addClass('display');
        
        $(link_produto).mouseout(function (){
            $('.li_pro').addClass('selected');
        });
    });
    
    $(span).mouseout(function (){
        $('.li_pro').removeClass('selected');
        $('.span').removeClass('display');
    });
    */
});