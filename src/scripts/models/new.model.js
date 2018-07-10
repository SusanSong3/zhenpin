module.exports = {
    find(){
        return fetch('/api/newProductsList')
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}