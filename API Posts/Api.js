function myData() {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => displayPOST(data));
}
myData();

function displayPOST(posts) {
    const postContainer = document.getElementById("post_container");
    for (const post of posts) {
        const { userId, id, title } = post;
        const postDIV = document.createElement("div");
        postDIV.classList.add("post");
        postDIV.innerHTML = `
        <h4 class='post-uid'>Post UID:${userId}</h4>
        <h5>Post ID:${id}</h5>
        <h5>Post Title:${title}</h5>
   ` }
}