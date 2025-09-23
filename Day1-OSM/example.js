const locationName = "Pune";
const url = `https://nominatim.openstreetmap.org/search?q=${locationName}&format=json`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      console.log(`Location: ${locationName}`);
      console.log(`Latitude: ${data[0].lat}`);
      console.log(`Longitude: ${data[0].lon}`);
    } else {
      console.log("Location not found.");
    }
  })
  .catch(error => console.log("Error:", error));

/*
Output :
Location: Pune
Latitude: 18.5213738
Longitude: 73.8545071
*/
