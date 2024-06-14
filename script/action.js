/* 페이드 */
setInterval(function(){
    $('.fade li').eq(0).fadeIn(500).delay(2000).fadeOut(500).delay(6000)

    $('.fade li').eq(1).delay(3000).fadeIn(500).delay(2000).fadeOut(500).delay(3000)

    $('.fade li').eq(2).delay(6000).fadeIn(500).delay(2000).fadeOut(500)
})

/* 공지사항, 갤러리 */
$('.title_box h2').eq(1).click(function(){
    $('.gallery').show()
    $('.notice').hide()

    $('.title_box h2').removeClass()
    $('.title_box h2').eq(1).addClass('on')
})

$('.title_box h2').eq(0).click(function(){
    $('.gallery').hide()
    $('.notice').show()

    $('.title_box h2').removeClass()
    $('.title_box h2').eq(0).addClass('on')
})

/* 팝업 */
$('.notice li').eq(0).click(function(){
    $('.popup').show()
})
$('.popup a').click(function(){
    $('.popup').hide()
})