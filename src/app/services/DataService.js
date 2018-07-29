class DataService {
  constructor ($http) {
    this.$http = $http
  }

  getPhotos () {
    this.$http
      .get('/data/photos.json')
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }

  institution () {
    this.$http
      .get('https://api.dev4b.aptitus.com/institutions?q=idad')
      .then(console)
  }
}

DataService.$inject = ['$http']

export default DataService
