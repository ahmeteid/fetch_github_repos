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
        Swal.fire("Please Write GitHub userName!"); // Sweet alert
        // reposData.innerHTML = "<span>Please Write GitHub userName</span>";

    } else {
        // array.forEach(element => {
            
        // });

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => response.json())
        .then((repositories) => {
            // Empty the Container
        reposData.innerHTML = "";

        // Loop On Repositories
    
        repositories.forEach(repo => {
            
            // create Main Div Element
            let mainDiv = document.createElement("div");

            // Create Repo Repo text
            let repoName = document.createTextNode(repo.name);

            // Append the text to main Div
            mainDiv.appendChild(repoName);

            // Create Repo Url
            let theUrl = document.createElement("a");

            // Create Repo Url text
            let theUrlText = document.createTextNode("visit");

            // Append the Repo Url text to Anchor tag
            theUrl.appendChild(theUrlText);

            // Add the hypertext refrence ("href")
            theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

            // Set attreibute blank
            theUrl.setAttribute("target", "_blank");

            // Append Url anchor to Main Div
            mainDiv.appendChild(theUrl);

            // Create Stars count Span
            let starsSpan = document.createElement("span");

            // Create the stars count text
            let starsText = document.createTextNode(`Star ${repo.stargazers_count}`);

            // Append stars count text to stars span
            starsSpan.appendChild(starsText);

            // Append Stars count span to Main Div
            mainDiv.appendChild(starsSpan);

            // Add class on Main Div
            mainDiv.className = "repo-box";

            // Append the Main Div to continer
            reposData.appendChild(mainDiv);
        });
        // .catch(error => console.error('Error:', error));

        
        });
    }
}