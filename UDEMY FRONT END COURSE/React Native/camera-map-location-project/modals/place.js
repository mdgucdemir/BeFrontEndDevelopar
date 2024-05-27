export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // { lat: 2.32134, lng: 123,123 } gibi olmalidir
    this.id = new Date().toString() + Math.random().toString();
  }
}
