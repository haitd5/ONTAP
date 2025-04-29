function showUserList() {
    const response = new XMLHttpRequest();
    response.onload = function () {
        if (response.status == 200 && response.readyState == 4) {
            const userRes = JSON.parse(response.responseText);
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
        }

        // console.log(userRes);
    };
    response.open("GET", "https://jsonplaceholder.typicode.com/users");
    response.send();
}

function showDetailUser(userID) {
    const response = new XMLHttpRequest();
    response.onload = function () {
        if (response.status == 200 && response.readyState == 4) {
            const userRes = JSON.parse(this.responseText);
            // console.log(userRes);
            $("#user-name").html(`Name: ${userRes.name} ${userRes.username}`);
            $("#user-email").html(`Email: ${userRes.email}`);
            $("#user-address").html(
                `Address: ${userRes.address.street}, ${userRes.address.suite}, ${userRes.address.city}, ${userRes.address.zipcode}, ${userRes.address.geo.lat}, ${userRes.address.geo.lng}`
            );
            $("#user-phone").html(`Phone: ${userRes.phone}`);
            $("#user-website").html(`Website: ${userRes.website}`);
            $("#user-company").html(
                `Company: ${userRes.company.name}, ${userRes.company.catchPhrase}, ${userRes.company.bs}`
            );
            $("#user-detail").modal("show");
        }
    };

    response.open("GET", `https://jsonplaceholder.typicode.com/users/${userID}`);
    response.send();
}
// JSON.stringify()    => convert object to json
// JSON.parse()        => convert json to object
