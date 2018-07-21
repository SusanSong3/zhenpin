module.exports = {
    find(){
        return $.ajax({
            url:'/ssh1fs/api/list',
            data:{
                c_id:1
            },
            contentType: "application/json",
            type: 'get',

            success: (result) => {
                return result
            }
        })
    }

}