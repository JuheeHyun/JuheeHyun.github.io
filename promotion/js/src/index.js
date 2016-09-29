// $('button').on('click',function(){
// 	$('popup_box').slideDown();
// 	$('').on('click',function(){
// 		%('popup_box').slideUp();
// 	})
// });

// $('button').on('click',function(){
// 	$('.popup_box').show();
// 	$('label').on('click',function(){
// 		$('.popup_box').hide();
// 	})
// });

$('button').on('click', function(){
	$(this).next('.popup_box').show();
 $('label').on('click',function(){
 	$('.popup_box').hide();
 })
});
