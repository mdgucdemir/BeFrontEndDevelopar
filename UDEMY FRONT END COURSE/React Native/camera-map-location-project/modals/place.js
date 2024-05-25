class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 2.32134, lng: 123,123 } gibi olmalidir
    this.id = new Date().toString() + Math.random().toString();
  }
}
