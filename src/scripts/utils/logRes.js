const loginAndResgister = {
    lr(data){
        // console.log(data)
        $("#login").on('click',()=>{
            console.log('1')
            $(".lr_logbtn button").addClass("lr_activ")
            $(".lr_resbtn button").removeClass("lr_activ")
            $(".layer").show();
            $(".lr_res").hide();
            $(".lr_login").show();
        })
        $("#register").on('click',()=>{
            $(".lr_resbtn button").addClass("lr_activ")
            $(".lr_logbtn button").removeClass("lr_activ")
            $(".layer").show();
            $(".lr_res").show();
            $(".lr_login").hide();
        })

        $(".lr_logbtn button").on('click',()=>{
            $(".lr_logbtn button").addClass("lr_activ")
            $(".lr_resbtn button").removeClass("lr_activ")
            $(".lr_login").show();
            $(".lr_res").hide();
        })
        $(".lr_resbtn button").on('click',()=>{
            $(".lr_resbtn button").addClass("lr_activ")
            $(".lr_logbtn button").removeClass("lr_activ")
            $(".lr_res").show();
            $(".lr_login").hide();
        })
        $(".lr_close").on('click',()=>{
            $(".layer").hide();
        })
    },

}

module.exports = loginAndResgister