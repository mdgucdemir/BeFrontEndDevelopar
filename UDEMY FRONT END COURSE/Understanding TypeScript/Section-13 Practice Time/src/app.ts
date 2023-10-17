import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCaf0Qzofb7VaY4CvQncX0_j653fFVP_nY";

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULT";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetck location!");
      }
      const coordinates = response.data.results[0].geometry.location;
    
      async function initMap(): Promise<void> {       
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: coordinates,
          zoom: 16,
        });

        new google.maps.Marker({position: coordinates, map: map});
      }

      initMap();
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
