function showUserList() {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (userRes) {
            let htmls = userRes.map(
                (user) =>
                    `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.address.street}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                        <td>${user.company.name}</td>
                        <td>
                            <button class ="btn btn-sm btn-dark" onclick = "showDetailUser(${user.id})">
                                View
                            </button>
                        </td>
                    </tr>`
            );
            document.getElementById("userList").innerHTML = htmls.join("");
        });
}

// function showDetailUser(userID) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
//         method: "GET",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (userRes) {
//             $("#user-name").html(`Name: ${userRes.name} ${userRes.username}`);
//             $("#user-email").html(`Email: ${userRes.email}`);
//             $("#user-address").html(
//                 `Address: ${userRes.address.street}, ${userRes.address.suite}, ${userRes.address.city}, ${userRes.address.zipcode}, ${userRes.address.geo.lat}, ${userRes.address.geo.lng}`
//             );
//             $("#user-phone").html(`Phone: ${userRes.phone}`);
//             $("#user-website").html(`Website: ${userRes.website}`);
//             $("#user-company").html(
//                 `Company: ${userRes.company.name}, ${userRes.company.catchPhrase}, ${userRes.company.bs}`
//             );
//             $("#user-detail").modal("show");
//         })
//         .catch(function (error) {
//             alert(error);
//         });
// }

async function showDetailUser(userID) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
        method: "GET",
    });

    let userRes = await response.json();
    $("#user-name").html(`Name: ${userRes.name} ${userRes.username}`);
    $("#user-email").html(`Email: ${userRes.email}`);
    $("#user-address").html(
        `Address: ${userRes.address.street}, ${userRes.address.suite}, ${userRes.address.city}, ${userRes.address.zipcode}, ${userRes.address.geo.lat}, ${userRes.address.geo.lng}`
    );
    $("#user-phone").html(`Phone: ${userRes.phone}`);
    $("#user-website").html(`Website: ${userRes.website}`);
    $("#user-company").html(`Company: ${userRes.company.name}, ${userRes.company.catchPhrase}, ${userRes.company.bs}`);
    $("#user-detail").modal("show");
}
