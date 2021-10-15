-- ADD DATA TO USERS

INSERT INTO users (name, email, password)
VALUES ('Alex King', 'alexdaking@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO users (name, email, password)
VALUES ('Bita Bean', 'bitabean@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO users (name, email, password)
VALUES ('Justine Lamb', 'justalamb@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO users (name, email, password)
VALUES ('Nikocado Avocado', 'nikocado.avocado@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

--ADD DATA TO PROPERTIES 

INSERT INTO properties
VALUES(1, 1, 'Downtown', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 1025, 1, 1, 1, 'Canada', 'streetXYZ', 'Vancouver', 'British Columbia', '54321', TRUE);

INSERT INTO properties
VALUES(2, 2, 'Bitaland', 'description', 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg', 1250, 2, 3, 4, 'Canada', '420 Woodland Drive', 'Nanaimo', 'British Columbia', '420365', TRUE);


INSERT INTO properties
VALUES(3, 3, 'StardooVallee', 'description', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://mages.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 980, 3, 2, 3, 'Canada', '647 Steelecase St', 'Scarborough', 'Ontario', '126578', TRUE);

INSERT INTO properties
VALUES(4, 4, 'Hippity Hoppity', 'description', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg', 840, 2, 2, 2, 'Canada', 'Mukkbang Rd', 'Montreal', 'Quebec', '9753', TRUE);

-- ADD DATA TO RESERVATIONS

INSERT INTO reservations (property_id, guest_id, start_date, end_date)
VALUES (1, 1, '2020-09-10', '2020-09-25'),
(2, 2, '2021-01-04', '2021-02-01'),
(3, 3, '2021-10-01', '2021-10-14'),
(4, 4, '2021-10-10', '2021-10-31');

-- INSERT DATA INTO PROPERTY REVIEWS

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 1, 1, 4, 'messages'),
(2, 2, 2, 5, 'messages'),
(3, 3, 3, 4, 'messages'),
(4, 4, 4, 3, 'messages');