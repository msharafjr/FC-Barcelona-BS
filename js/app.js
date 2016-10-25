/*global $*/
$(function () {
    'use strict';

    $(".store-kit").on('click', '.get', function () {

        var storKit = $(this).closest(".store-kit"),
            amount = storKit.data('price'),
            price = $('<p class="price center-block">' + amount + '</p>'),
            buyNow = $('<a href="#" class="buy-store btn btn-danger">buy now</a>');

        $(this).fadeOut(function () {

            storKit.append(price);
            storKit.append(buyNow);
            $(this).remove();
        });
    });


    $(".store-kit").on('click', '.buy-store', function (event) {

        event.preventDefault();
    });


    $(".on-sale").on('click', function () {

        $(".highlighted").removeClass("highlighted");
        $(".store-kit").filter(".onsale").addClass("highlighted");
    });


    $(".expiring").on('click', function () {

        $(".highlighted").removeClass("highlighted");
        $(".store-kit").filter(".expirings").addClass("highlighted");
    });


    $(".info").on('click', function () {

        $(".get-tickets").stop(false, false).slideToggle(150);
    });


    $(".get-tickets").on('keyup', '.ticket-num', function () {

        var numTickets = +$(this).closest(".get-tickets").data('price'),
            cost = +$(this).val();

        if (isNaN(cost)){

            $(".total").text('Number Only');
            $(this).val('');

        } else if (cost > 10){

            $(".total").text('Maximum number of tickets is 10');
            $(this).val('0');
            
        } else {

            $(".total").text('€' + numTickets * cost);
        }
        
    });


    $(".get-tickets").on('click', '.buy-tickets', function (event) {
        event.preventDefault();
    });


    //  check control function to add/remove 
    //  classes to/from controls
    function checkControls () {
        if ($(".match-body-child .active").is(":last-child")) {

        $(".next-arr").addClass("controls-false");
        
    
        } else if ($(".match-body-child .active").is(":first-child")) {

            $(".next-arr").removeClass("controls-false");
            $(".prev-arr").addClass("controls-false");
            
        } else {

            $(".next-arr").removeClass("controls-false");
            $(".prev-arr").removeClass("controls-false");
        }
    }

    //  Schedule controls
    $(".match-body").on('click', '.next-arr', function (ev) {


        if ($(".match-body-child .active").is(':last-child')){

            ev.preventDefault();

        } else{
            
        $(".match-body-child .active").stop(false,false).fadeOut('slow', function(){

            $(this).next().fadeIn('slow');
            $(this).removeClass("active");
            $(this).next().addClass("active");
            
            checkControls();
        })
        }
    })

    $(".match-body").on('click', '.prev-arr', function (ev) {

        

        if ($(".match-body-child .active").is(':first-child')){
            ev.preventDefault();

        } else{
            
        $(".match-body-child .active").stop(false,false).fadeOut('slow', function(){
            
            $(this).prev().fadeIn('slow');
            $(this).removeClass("active");
            $(this).prev().addClass("active");
            
            checkControls();
        })
        }
    })
});