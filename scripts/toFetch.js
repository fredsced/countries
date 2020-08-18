export default function toFetch(url, callback) {

    fetch(url)
        .then(response => response.json())
        .then(datas => callback(datas))
        .catch(er => {
            console.log(er)
            alert('Connection issue :'+er)
        })
        

}