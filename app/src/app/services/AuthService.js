class AuthService {
  constructor ($http) {
    this.$http = $http
  }
  login (user, pasword) {
    let data = {
      'grant_type': 'password',
      'client_id': '0a8a9af1-edb1-3d95-bcea-fad0a635dc75',
      'client_secret': '07cc46fe-5ca8-4c22-b382-6cb91a3bba30',
      'email': user,
      'password': pasword,
      'role': 'postulante',
      'provider': 'aptitus',
      'gcm': '',
      'operating_system': 'android'
    }
    this
      .$http
      .post(
        'https://api.dev4b.aptitus.com/oauth2/login', data)
      .then(response => data)
      .catch(response => response.data)
      // .then(data => this.data = data)
  }
}

AuthService.$inject = ['$http']
export default AuthService
