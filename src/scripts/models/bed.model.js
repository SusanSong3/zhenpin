module.exports = {
    find(){
        return fetch('/api/bedList')
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}