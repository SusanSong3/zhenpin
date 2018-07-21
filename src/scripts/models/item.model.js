module.exports = {
    find(pid){
        // console.log(pid)
        // return fetch('/api/furnitureList')
        // .then(response => response.json())
        // .then(result => {
        //     return result
        // })

        return $.ajax({
            url:'/ssh1fs/api/findbyid',
            type:'get',
            data:{
                id:pid
            },
            success:(result) => {
                return result
            }
        })
    }
}