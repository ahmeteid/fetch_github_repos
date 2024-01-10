// my github api link (https://api.github.com/users/ahmeteid/repos)

// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function() {
    getRepos();
}

// Get Repos Function
function getRepos() {
    if (theInput.value === "") {

        // if Value is Empty
        // Swal.fire("Please Write GitHub userName!"); // Sweet alert
        reposData.innerHTML = "<span>Please Write GitHub userName</span>";

    } else {

        fetch('https://api.github.com/users/ahmeteid/repos')
        .then(response => response.json())
        .then(linkReposData => console.log(linkReposData))
        // .catch(error => console.error('Error:', error));

        // Empty the Container
        reposData.innerHTML = "";
    }
}