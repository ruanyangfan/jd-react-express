function jsonp(url,callback){
    let script = document.createElement('script')
    let cbName = 'cb' + jsonp.count++
    let callbackName = 'window.jsonp.' + cbName
    script.src = url + '/callback=' + callbackName
    window.jsonp[cbName] = function(jsonpData){
        try {
            callback(jsonpData)
        }
        finally {
            script.parentNode.removeChild(script)
            jsonp[cbName] = null
        }
    }
    document.body.appendChild(script)
}
jsonp.count = 0
window.jsonp = jsonp

export default jsonp