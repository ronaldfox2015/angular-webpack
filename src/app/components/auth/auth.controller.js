class AuthCtrl {
  constructor (AuthService) {
    this.AuthService = AuthService
    this.hidden = 'invisible'
    this.response = {
      status: false,
      message: 'Correo invalido'
    }
  }

  login () {
    let response = this.AuthService.login(this.new.user, this.new.pasword)
    this.hidden = ''
    if (response) {
      this.response = response
      this.location.url('www.google.com/')
    }
  }
}

AuthCtrl.$inject = ['AuthService']
export default AuthCtrl
