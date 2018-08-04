class EventService {
  constructor () {

  }

  buttonNavbar () {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
      })
    })
  }
}

export default EventService
