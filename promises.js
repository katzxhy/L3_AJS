function getUsersFiltered(){
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>data.map(user=>({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        })))
        .catch(error=>console.error(error));
}
function getTodosFiltered(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(data=>data.filter(item => !item.completed))
        .catch(error=>console.error(error));
}