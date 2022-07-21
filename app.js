//Enter your code here..
async function fetchdata(){
    try {
        let result= await fetch("https://jsonplaceholder.typicode.com/users");
        let result2= await result.json();
        console.log(result2);
        var player='<h2>Lists of Users</h2>';
        result2.forEach(function(user) {
            player+=
            `<div class="player">
            <div class="strength">Name : ${user.name}</div>
            <div>Email   : ${user.email}</div>
            <div>Phone   : ${user.phone}</div>
            <div>Website : ${user.website}</div>
            <div>Company : ${user.company.name}</div>
            <div>City    : ${user.address.city}</div>
            <div>Zipcode : ${user.address.zipcode}</div>
            </div>`
        })
        document.getElementById("message").innerHTML+=player;
    }                
    catch (error) {
        console.log('Promise rejected.');
        console.log(error.message);
    }
}