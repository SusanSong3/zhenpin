
const userHomeTpl = require('../views/userhome.html')
// const userHomeTpl = require('../views/userhome.html')
const addressTpl = require('../views/address.html')
const centerTpl = require('../views/center.html')
const userController = {
    async render() {
        let html = template.render(userHomeTpl)
        return html
    },
    changepic() {
        let user_avatarfile = $('.user_avatarfile')
        user_avatarfile.on('change', function () {
            let img = user_avatarfile.val()
            // $('.user_avatar img').attr('src', img)

            let file = user_avatarfile[0].files[0];
            if (typeof FileReader === 'undefined') {
                alert('buzhichi')
            }
            if (window.FileReader) {
                var reader = new FileReader()
                reader.readAsDataURL(file)
                console.log(file)
                console.log(reader)
                console.log(reader.result)
                reader.onload = function (e) {
                    alert('文件读取完成');
                    imgFile = e.target.result;
                    console.log(imgFile);
                    $(".user_avatar img").attr('src', imgFile);
                };
            }
        })
    },
    homeRender({res,req,nect}){
        res.render(centerTpl) 
    },
    addressRender({res,req,nect}){
        res.render(addressTpl) 
    },

}

module.exports = userController