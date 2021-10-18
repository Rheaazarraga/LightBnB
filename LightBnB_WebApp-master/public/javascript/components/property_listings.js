$(() => {

  const $propertyListings = $(`
  <section class="property-listings" id="property-listings">
      <p>Loading...</p>
    </section>
  `);
  window.$propertyListings = $propertyListings;

  window.propertyListings = {};

  function addListing(listing) {
    $propertyListings.append(listing);
  }
  function clearListings() {
    $propertyListings.empty();
  }
  window.propertyListings.clearListings = clearListings;

  function addProperties(properties, isReservation = false) {
    // if it's a reservation, do'nt clear listings
    if (!isReservation) {
      clearListings();
    }
    // check for user login
    getMyDetails()
      .then();
    for (const propertyId in properties) {
      const property = properties[propertyId];
      const listing = propertyListing.createListing(property, isReservation);
      addListing(listing);
    }

    if (isReservation) {
      /* add datatag in this update view to compare the start and end dates, and also appropriately render that information onto the page for the user to see */
      $('.update-button').on('click', function() {
        const idData = $(this).attr('id').substring(16);
        getIndividualReservation(idData).then(data => {
          views_manager.show("updateReservation", data);
          console.log(`update ${idData}`);
        });
      })
        $('.delete-button').on('click', function() {
          const idData = $(this).attr('id').substring(16);
          console.log(`delete ${idData}`);
        });
    }
  }
  window.propertyListings.addProperties = addProperties;

});