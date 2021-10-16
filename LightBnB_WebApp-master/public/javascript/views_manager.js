$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item, data = '') {
    //clears out any existing views from the page with the detach() calls
    $newPropertyForm.detach();
    $propertyListings.detach();
    $searchPropertyForm.detach();
    $logInForm.detach();
    $signUpForm.detach();
    // ensures that when switching from the reservation form view, that the information is cleared out of the main-content div.
    $newReservationForm.detach();


    // switch-case determines which view to display and the view is appended to the div with id of main-content.
    switch (item) {
      case 'listings':
        $propertyListings.appendTo($main);
        break;
      case 'newProperty':
        $newPropertyForm.appendTo($main);
        break;
      case 'searchProperty':
        $searchPropertyForm.appendTo($main);
        break;
      case 'logIn':
        $logInForm.appendTo($main);
        break;
      case 'signUp':
        $signUpForm.appendTo($main);
        break;
      case 'newReservation':
        const dataTag = `<h4>${data}</h4>`;
        $newReservationForm.appendTo($main);
        // a hidden tag is created with the id value of datatag, this is used when the reservation is being added to the database
        $(dataTag).appendTo("#datatag");
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.show('listings');
        }, 2000);
        
        
        break;
      }
    }
  }
  
});