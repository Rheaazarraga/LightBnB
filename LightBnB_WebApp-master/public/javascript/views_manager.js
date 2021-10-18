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
    $newReservationForm.detach();
    $updateReservationForm.detach();


    let dataTag = "";

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
      dataTag = `<h4>${data}</h4>`;
      $newReservationForm.appendTo($main);
      // a hidden tag is created with the id value of datatag, this is used when the reservation is being added to the database
      $(dataTag).appendTo("#datatag");
      break;
    case 'updateReservation':
    // extend dataTag with additional information
      dataTag = `
        <span id="datatag-reservation-id">${data.id}</span>
        <span id="datatag-start-date">${data.start_date}</span>
        <span id="datatag-end-date">${data.end_date}</span>
        <span id="datatag-property-id">${data.property_id}</span>
  `;
      const reservationDetails = `
        <div id="reservation-details">
          <h3>Reservation Details</h3>
          <h4>Start date: ${moment(data.start_date).format("MMMM DD, YYYY")}</h4>
          <h4>End date: ${moment(data.end_date).format("MMMM DD, YYYY")}</h4>
        </div>
      `;
      // display errors
      const errorMessage = data.error_message ? `<h4>${data.error_message}</h4>` : ``;
      $(reservationDetails).appendTo($main);
      $updateReservationForm.appendTo($main);
      $(dataTag).appendTo("#datatag");
      $(errorMessage).appendTo('#error-message');
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
  };
  
});