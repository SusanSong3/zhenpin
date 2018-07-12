module.exports = {
    find(){
        return fetch('/api/collectionsList')
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}