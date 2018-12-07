$(document).ready(function () {

    /*
	 * ================================================================== 
	 * [ Select Image ]
	 */

    $("ul#erste_wahl").on('click', 'input[type="checkbox"]', function () {
        $("input:checkbox.erste_wahl").not(this).prop('checked', false);
    });

    $("ul#zweite_wahl").on('click', 'input[type="checkbox"]', function () {
        $("input:checkbox.zweite_wahl").not(this).prop('checked', false);
    });

    /*
	 * ================================================================== 
	 * [ Show value in Dropdown ]
	 */

    $(".dropdown-menu li a").click(function () {
        $(this).parents(".btn-dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".btn-dropdown").find('.btn').val($(this).data('value'));
    });

    /*
	 * ================================================================== 
	 * [ Beispeil Chart ]
	 */
    $("#chart").kendoChart({
        title: {
            text: "Kendo Chart Example"
        },
        series: [
            { name: "Example Series", data: [200, 450, 300, 125] }
        ],
        categoryAxis: {
            categories: [2000, 2001, 2002, 2003]
        }
    });
});