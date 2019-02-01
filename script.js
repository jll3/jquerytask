$( document ).ready(function() {

	//add row
	$row = $(".template_row");
	$(".list_add").click(function(event) {
	
		$(".template_row").show();
		$("tbody").append($row.clone());
		$('.label').css('background-color', 'white');
		$(".no_entries_row").hide();
		$(".popup").hide();
	});

	//delete row
	$(".controls").click(function(event) {
		$('table tr:last').remove();
		$(".popup").hide();
		$tablelength = $('table>tbody>tr').length;
		if($tablelength==0){
			$(".no_entries_row").show();
		}
	});

	//save
	$(".action_btn.submit").click(function(event) {
		$(".popup").show();

	});

	//change colour
	$(document).on('change','.label',function(){
    	switch($(".label option:selected").val()){
    		case 'green':
    			$(this).css('background-color', 'green');
    		break;
    		case'orange':
    			$(this).css('background-color', 'orange');
    		break;
    		case 'red':
    			$(this).css('background-color', 'red');
    		break;
    		case '':
    		default:
    			$(this).css('background-color', 'white');
    		break;
    	}
	});

});