
$(document).ready(function(){

	/* footer */
	var m_footer =

'		<ul class="footer_awards_slider">' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award01.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award02.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award03.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award04.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award05.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award06.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award07.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award08.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award09.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award10.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award11.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award12.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award13.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award14.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award15.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award16.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award17.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award18.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award19.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award20.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award21.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award22.jpg"></a></li>' +
'		</ul>';

	var w_footer =
'		<ul class="footer_awards_slider">' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award01.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award02.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award03.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award04.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award05.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award06.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award07.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award08.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award09.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award10.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award11.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award12.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award13.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award14.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award15.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award16.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award17.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award18.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award19.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award20.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award21.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="" src="//image.istarbucks.co.kr/common/img/footer/footer_award22.jpg"></a></li>' +
'		</ul>';

	if (myWindow < 640) {
		$('.footer_awards_wrap_inner').prepend(m_footer);
		//$('.footer_awards_slider').hide();
		
	
	} else {
		$('.footer_awards_wrap_inner').prepend(w_footer);
	}

	$('.footer_awards_wrap_inner p.footer_award_btn').click(function(){
		console.log('d');
		$('ul.footer_awards_slider').slideToggle();
		$(this).children().children().toggleClass('footer_arrow_up');
	});
	
	$(".mob_gnb_search_btn").unbind("click").on("click", function(){

		if(pattern_check("#search_text" ,   	  "검색어를  입력하세요." , "허용되지 않은 문자입니다."	, getPattern('BASIC3') )==false){return;}
		var search_word = encodeURI(encodeURIComponent( $("#search_text").val() ));
		
		location.href="/search/search.do?search="+search_word;	
		
		
		console.log("######################");
	});	

});

