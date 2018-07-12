
const headerTpl = require("../views/header.html")
const userModel = require('../models/userLR.model')

const wsCache = new WebStorageCache();

//用户登录注册token获取存储
const userLRController = {
    LogRes(){
        $('.res_btn').on('click',async() => {
            event.preventDefault()
            let {telephone, password} = {
                telephone: $('#reg_usn').val(),
                password: $('#reg_pwd').val()
            }
            let option = {
                telephone,
                password,
            }
            let result = await userModel.sign(option,'register')
            if(result.ret){
                alert('注册成功！切换到登录窗口。')
                // $(".lr").find('input').val('');
                // $('#')
            }else{
                alert(result.errmsg)
            }
        })

        $('.login_btn').on('click', async function(){
            event.preventDefault()
            let {telephone, password} = {
                telephone: $('#log_usn').val(),
                password: $('#log_pwd').val()
            }
            console.log({telephone, password})
            // let result = await userModel.sign({telephone, password},'login')
            let stuts = true
            wsCache.set('telephone', {telephone,stuts})
            location.reload()
            // userLRController.renderHeader({telephone,stuts})
            // $(".layer input").val('');
            // $(".layer").hide();


            // if(result.ret){
            //     alert(result.data.msg)
            //     let stuts = result.ret
            //     // wsCache.set('token', result.data.token)
            //     // renderHeader({telephone,stuts})
            // }else{
            //     alert(result.errmsg)
            // }
        }.bind(this))
    },

    //登录判定
    async usersAuthentication(){
        var storage = window.localStorage;
        if(storage.telephone){
            console.log('storage',)
            var header = await template.render(headerTpl, wsCache.get('telephone'))
            $("#header").html(header)
            userLRController.userLaunch()
            // $('.launch').on('click', function(){
            //     console.log('123')
            //     wsCache.delete('telephone');
            //     window.location.replace("/index.html");
            //     // var header = template.render(headerTpl, {telephone: '', stuts:false})
            //     // $("#header").html(header)
            // })

        }else{
            console.log('NOTstorage')
            var header = template.render(headerTpl, {telephone: '', stuts:false})
            $("#header").html(header)
        }


    },

    //----------头部渲染----------//
    renderHeader({telephone, stuts}) {
        console.log('555')
        let header = template.render(headerTpl, {
            telephone,
            stuts
        })
        console.log(header)
        $("#header").html(header)
    },
    //----------退出登录----------//
    userLaunch(){
        $('.launch').on('click', function(){
            console.log('123')
            wsCache.delete('telephone');
            location.replace('/index.html');
            // var header = template.render(headerTpl, {telephone: '', stuts:false})
            // $("#header").html(header)
        }.bind(this))
    }

}



module.exports = userLRController




