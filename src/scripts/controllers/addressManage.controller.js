// const userModel = require('../models/userMain.model')
const addressManageTpl = require('../views/addressManage.html')
const addManageController = {
    async render(){
        // let result = await userModel.find()
        // console.log(result);
        // let fresult = result.data.Category
        // console.log(fresult);
        // let html = template.render(addressManageTpl,fresult)
        let html = template.render(addressManageTpl)
        // console.log(html);
        return html
    },
    changepic() {
        let user_avatarfile = $('.user_avatarfile')
        user_avatarfile.on('change',function(){
            let img = user_avatarfile.val()
           // $('.user_avatar img').attr('src', img)

            let file = user_avatarfile[0].files[0];
            if(typeof FileReader === 'undefined'){
                alert('buzhichi')
            }
            if ( window.FileReader ) {
                var reader = new FileReader()
                reader.readAsDataURL(file)
                console.log( file)
                console.log( reader )
                console.log(  reader.result)
                 reader.onload=function(e) {
                    alert('文件读取完成');
                    imgFile = e.target.result;
                    console.log(imgFile);
                    $(".user_avatar img").attr('src', imgFile);
                };
            }


        })


    }

}

module.exports = addManageController