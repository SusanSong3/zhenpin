module.exports = {

    sign(data,url){
        // console.log(JSON.stringify(data))
        return $.ajax({
            url: '/qqq/api/user/' + url,

            contentType: "application/json",
            type: 'post',
            data: JSON.stringify(data),

            success: (result) => {
                return result
            }
        })
    }
}