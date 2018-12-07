$(document).ready(function () {
    "use strict";

	/*
	 * ================================================================== 
	 * [ Focus input ]
	 */
    $('.input').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })

	/*
	 * ================================================================== 
	 * [ Validate ]
	 */
    var inputArr = $('.validate-input .input');

    for (var i = 0; i < inputArr.length; i++) {
        var input = $(inputArr[i]);
        if (input.val().trim() != '') {
            input.addClass('has-val');
        }
    }

    $('form').on('submit', function () {
        var check = true;

        for (var i = 0; i < inputArr.length; i++) {
            if (validate(inputArr[i]) == false) {
                showValidate(inputArr[i]);
                check = false;
            }
        }
        if (check == true) {
            // Eingabe auf Gültigkeit prüfen ...
            //alert("Hello! I am an alert box!!");

            //check = true;
        }
        return check;
    });

    $('.form .input').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate')
        $(".btn-show-pass").addClass('hidden')
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

	/*
	 * ==================================================================
	 * [ Show pass ]
	 */
    var showPass = 0;
    $('.btn-show-pass').on('click', function () {
        if (showPass == 0) {
            $(this).parent().find('input').attr('type', 'text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        } else {
            $(this).parent().find('input').attr('type', 'password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
    });


    /*
	 * ==================================================================
	 * [ Bild nach 5 Sekunden aktualisieren ]
	 */
    //$(function () {
    //    setTimeout(function () {
    //        $('.container-background').load(location.href + " .container-background*","");
    //    }, 5000);
    //});
});