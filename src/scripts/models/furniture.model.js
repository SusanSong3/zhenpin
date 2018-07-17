module.exports = {
    find(){
        return fetch('/api/furnitureList')
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}