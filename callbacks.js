function fetchData(url, callback){
    fetch(url)
        .then(response=>response.json())
        .then(data=>callback(null, data))
        .catch(error=>callback(error, null));
}
function getPostsSorted(callback){
    fetchData('https://jsonplaceholder.typicode.com/posts', (err, data)=>{
        if (err) return console.error(err);
        const sorted = data.sort((a,b)=>b.title.length - a.title.length);
        callback(sorted);
    });
}
function getCommentsSorted(callback){
    fetchData('https://jsonplaceholder.typicode.com/comments', (err, data)=>{
        if (err) return console.error(err);
        const sorted = data.sort((a,b)=>a.name.localeCompare(b.name));
        callback(sorted);
    });
}