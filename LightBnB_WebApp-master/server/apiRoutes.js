module.exports = function(router, database) {


  // ---- GET routes ---- //
  
  router.get('/properties', (req, res) => {
    database.getAllProperties(req.query, 20)
      .then(properties => res.send({properties}))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    database.getAllReservations(userId)
      .then(reservations => res.send({reservations}))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.get('/reservations/upcoming', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;      
    }
    database.getUpcomingReservations(userId)
    .then(reservations => res.send({ reservations }))
    .catch(e => {
      console.error(e);
      res.send(e);
    })
  })


  // ---- POST routes ---- //

  router.post('/properties', (req, res) => {
    const userId = req.session.userId;
    database.addProperty({...req.body, owner_id: userId})
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  /** post request to send the data object we've built out in our submit route to the back-end, where we can use the session data of the active user to complete the request */
  router.post('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (userId) {
      database.addReservation({...req.body, guest_id: userId})
        .then(reservation => {
          res.send(reservation);
        })
        .catch(e => {
          console.error(e);
          res.send(e);
        });
    }
  });

  return router;
};