module.exports = {
    find(){
        return fetch('/api/decorationList')
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}