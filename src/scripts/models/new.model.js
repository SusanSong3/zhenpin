module.exports = {
    find(){
        return fetch('http://39.106.187.52:8080/ssh1fs/mock/new_products.json')
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}