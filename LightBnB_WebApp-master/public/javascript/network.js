function getMyDetails() {
  console.log("getMyDetails");
  return $.ajax({
    url: "/users/me",
  });
};

function logOut() {
  return $.ajax({
    method: "POST",
    url: "/users/logout",
  });
};

function logIn(data) {
  return $.ajax({
    method: "POST",
    url: "/users/login",
    data
  });
};

function signUp(data) {
  return $.ajax({
    method: "POST",
    url: "/users",
    data
  });
};

function getAllListings(params) {
  let url = "/api/properties";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
};

function getAllReservations() {
  let url = "/api/reservations";
  return $.ajax({
    url,
  });
};

const submitProperty = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/properties",
    data,
  });
};

/**This function will send the data object we've built out in our submit route 
 * to the back-end, where we can use the session data of the active user to complete the request */
const submitReservation = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/reservations",
    data,
  });
};