console.log("Hi dear friend, I am your client");

const app = document.getElementById("app");

// write a function to fetch all vinlys

async function fetchVinylsreview() {
  const rawData = await fetch(`https://goldenvinyl.onrender.com`);
  const vinylsreview = await rawData.json();
  return vinylsreview;
}

// display vinlys
async function displayVinylsreview() {
  app.innerHTML = "";
  const vinylsreview = await fetchVinylsreview();

  vinylsreview.forEach((vinylreview) => {
    const div = document.createElement("div");
    const nameButton = document.createElement("p");
    const countryButton = document.createElement("p");
    const albumButton = document.createElement("p");
    const commentButton = document.createElement("p");

    // set the content
    nameButton.innerText = vinylreview.name;
    countryButton.innerText = vinylreview.country;
    albumButton.innerText = vinylreview.album;
    commentButton.innerText = vinylreview.comment;

    div.className = "gridForInfo";

    nameButton.className = "nameButton";
    countryButton.className = "countryButton";
    albumButton.className = "albumButton";
    commentButton.className = "commentText";

    div.append(nameButton, countryButton, albumButton, commentButton);
    app.appendChild(div);
  });
}

displayVinylsreview();

// post the form data

// Get the form as DOM node

const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // setup form data object
  const formData = new FormData(form);
  const vinylsData = Object.fromEntries(formData);

  // fetch the data from the server
  const res = await fetch(`https://goldenvinyl.onrender.com`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vinylsData),
  });
  displayVinylsreview();
});
