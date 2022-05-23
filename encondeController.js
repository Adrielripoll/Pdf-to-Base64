const pdf = require('pdf-to-base64')

module.exports = async function(request, response){
    const { url } = request.body
    try{
        const encoded = await pdf(url)
        return response.response(200).send(url)
    }catch(error){
        if(error) return response.status(400).send(error)
    }
}