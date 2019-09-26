CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255),
  `address` varchar(255),
  `ph_no` varchar(255),
  `type` enum('ADMIN', 'USER'),
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `services` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `hotel_services` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `service_id` int,
  `hotel_id` int,
  `price` double
);

CREATE TABLE `hotels` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `city_id` int,
  `address` varchar(255),
  `active` tinyint DEFAULT 1,
  `contact` varchar(255)
);

CREATE TABLE `rooms` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type_id` int,
  `hotel_id` int,
  `price` double,
  `accomodation` varchar(255)
);

CREATE TABLE `cities` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `payments` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mode` varchar(255),
  `amount` double,
  `booking_id` int,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `bookings` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `hotel_id` int,
  `room_id` int,
  `check_in` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `check_out` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_id` int,
  `amount` double,
  `type` enum('BOOKED', 'PAID', 'CANCELLED', 'REFUND'),
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `types` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255),
  `desc` varchar(255)
);

CREATE TABLE `booking_hotel_sevice` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `booking_id` int,
  `hotel_service_id` int,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `medias` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `hotel_id` int,
  `name` varchar(255),
  `mime_type` varchar(255),
  `active` tinyint DEFAULT 1
);

CREATE TABLE `testimonials` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(255),
  `occupation` varchar(255),
  `media` varchar(255),
  `active` tinyint DEFAULT 1
);

ALTER TABLE `hotel_services` ADD FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);

ALTER TABLE `hotel_services` ADD FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`);

ALTER TABLE `hotels` ADD FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);

ALTER TABLE `rooms` ADD FOREIGN KEY (`type_id`) REFERENCES `types` (`id`);

ALTER TABLE `rooms` ADD FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`);

ALTER TABLE `payments` ADD FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);

ALTER TABLE `bookings` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `bookings` ADD FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`);

ALTER TABLE `bookings` ADD FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`);

ALTER TABLE `bookings` ADD FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`);

ALTER TABLE `booking_hotel_sevice` ADD FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);

ALTER TABLE `booking_hotel_sevice` ADD FOREIGN KEY (`hotel_service_id`) REFERENCES `hotel_services` (`id`);

ALTER TABLE `medias` ADD FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`);
