module.exports = {
    changeClass(){
        $('.nav ul li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
    }
}