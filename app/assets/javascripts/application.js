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
    
    var abas = '.menu_li';
    var id;
    var id_link;
    
    $(abas + ' a').click(function (){
        $('ul#menu li#li_produtos').removeClass('selected');
        $(abas + '#' + id_link).removeClass('selected');       
        id_link = $(this).attr('id' );    
        $(abas + '#' + id_link).addClass('selected');       
    });
    
    $('.li_menu').mouseover(function (){       
        id = $(this).attr('id');      
        $(abas + '#' + id).addClass('selected');       
    });
    
    $('.li_menu').mouseout(function (){
        $(abas + '#' + id).removeClass('selected');  
        $(abas + '#' + id_link).addClass('selected');        
    });
    
    if($("#caixa-comunicado").length){
    	$(function() {
			/* caixa-comunicado representa a id onde o caixa de comunicado deve ser criada no html */
			$( "#caixa-comunicado" ).dialog({
			  dialogClass: 'comunicado-dialog',
			  resizable: false,
			  width: "75%",
			  modal: true
			});
			$("#background_opacity").css("display","block");
		});
	    
	    $("div.close").click(function (){
	    	$("#caixa-comunicado").dialog("close");
	    	$("#background_opacity").css("display","none");
	    });
    };
    
});