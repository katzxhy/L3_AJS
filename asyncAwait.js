async function getPostsSortedAsync(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data.sort((a, b)=>b.title.length - a.title.length);
    } catch (error){
        console.error(error);
    }
}
async function getCommentsSortedAsync(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        return data.sort((a, b)=>a.name.localeCompare(b.name));
    } catch (error){
        console.error(error);
    }
}
async function getUsersFilteredAsync(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data.map(user=>({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
    } catch (error){
        console.error(error);
    }
}
async function getTodosFilteredAsync(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data.filter(item=>!item.completed);
    } catch (error){
        console.error(error);
    }
}