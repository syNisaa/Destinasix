-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jun 2024 pada 11.56
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_travel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_bookings`
--

CREATE TABLE `tb_bookings` (
  `id_booking` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `type` enum('destination','hotel','flight','bus') NOT NULL,
  `id_reference` int(11) NOT NULL,
  `booking_date` datetime NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_bookings`
--

INSERT INTO `tb_bookings` (`id_booking`, `id_user`, `type`, `id_reference`, `booking_date`, `start_date`, `end_date`, `status`) VALUES
(1, 1, 'hotel', 1, '2024-06-01 10:00:00', '2024-06-10', '2024-06-15', 'Confirmed'),
(2, 2, 'flight', 2, '2024-06-02 11:00:00', '2024-06-11', '2024-06-12', 'Confirmed'),
(3, 3, 'bus', 3, '2024-06-03 12:00:00', '2024-06-12', '2024-06-13', 'Confirmed'),
(4, 4, 'hotel', 4, '2024-06-04 13:00:00', '2024-06-13', '2024-06-18', 'Confirmed'),
(5, 5, 'flight', 5, '2024-06-05 14:00:00', '2024-06-14', '2024-06-15', 'Confirmed');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_booking_history`
--

CREATE TABLE `tb_booking_history` (
  `id_history` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_booking` int(11) NOT NULL,
  `action` varchar(50) NOT NULL,
  `action_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_booking_history`
--

INSERT INTO `tb_booking_history` (`id_history`, `id_user`, `id_booking`, `action`, `action_date`) VALUES
(1, 1, 1, 'Booked', '2024-06-01 10:00:00'),
(2, 2, 2, 'Booked', '2024-06-02 11:00:00'),
(3, 3, 3, 'Booked', '2024-06-03 12:00:00'),
(4, 4, 4, 'Booked', '2024-06-04 13:00:00'),
(5, 5, 5, 'Booked', '2024-06-05 14:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_bus`
--

CREATE TABLE `tb_bus` (
  `id_bus` int(11) NOT NULL,
  `bus_name` varchar(100) NOT NULL,
  `bus_type` varchar(50) NOT NULL,
  `capacity` int(11) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_bus`
--

INSERT INTO `tb_bus` (`id_bus`, `bus_name`, `bus_type`, `capacity`, `description`, `price`) VALUES
(1, 'Bus Pahala Kencana', 'AC', 40, 'Bus dengan fasilitas AC dan tempat duduk yang nyaman', '500000.00'),
(2, 'Bus Lorena', 'Non-AC', 50, 'Bus tanpa AC dengan kapasitas besar', '400000.00'),
(3, 'Bus Harapan Jaya', 'AC', 45, 'Bus dengan AC dan fasilitas hiburan', '550000.00'),
(4, 'Bus Sinar Jaya', 'Non-AC', 60, 'Bus ekonomis tanpa AC', '450000.00'),
(5, 'Bus Primajasa', 'AC', 35, 'Bus dengan fasilitas AC dan tempat duduk ergonomis', '600000.00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_destinations`
--

CREATE TABLE `tb_destinations` (
  `id_destinations` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(100) NOT NULL,
  `popular_attractions` text NOT NULL,
  `price_tiket` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_destinations`
--

INSERT INTO `tb_destinations` (`id_destinations`, `name`, `description`, `location`, `popular_attractions`, `price_tiket`) VALUES
(1, 'Bali', 'Pulau dengan pantai yang indah dan budaya yang kaya', 'Indonesia', 'Pantai Kuta, Ubud, Tanah Lot', '50000.00'),
(2, 'Yogyakarta', 'Kota dengan warisan budaya dan sejarah yang kaya', 'Indonesia', 'Candi Borobudur, Keraton Yogyakarta, Malioboro', '30000.00'),
(3, 'Lombok', 'Pulau dengan pantai yang memukau dan Gunung Rinjani', 'Indonesia', 'Pantai Senggigi, Gili Trawangan, Gunung Rinjani', '45000.00'),
(4, 'Jakarta', 'Ibu kota Indonesia dengan berbagai atraksi modern', 'Indonesia', 'Monas, Ancol, Taman Mini Indonesia Indah', '25000.00'),
(5, 'Bandung', 'Kota dengan udara sejuk dan pusat mode serta kuliner', 'Indonesia', 'Kawah Putih, Tangkuban Perahu, Braga', '20000.00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_flights`
--

CREATE TABLE `tb_flights` (
  `id_flights` int(11) NOT NULL,
  `airline` varchar(100) NOT NULL,
  `flight_number` varchar(50) NOT NULL,
  `departure_airport` varchar(100) NOT NULL,
  `arrival_airport` varchar(100) NOT NULL,
  `departure_time` datetime NOT NULL,
  `arrival_time` datetime NOT NULL,
  `price_tiket` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_flights`
--

INSERT INTO `tb_flights` (`id_flights`, `airline`, `flight_number`, `departure_airport`, `arrival_airport`, `departure_time`, `arrival_time`, `price_tiket`) VALUES
(1, 'Garuda Indonesia', 'GA123', 'Soekarno-Hatta', 'Ngurah Rai', '2024-06-01 10:00:00', '2024-06-01 12:00:00', '1500000.00'),
(2, 'Lion Air', 'JT456', 'Juanda', 'Hasanuddin', '2024-06-02 11:00:00', '2024-06-02 13:00:00', '800000.00'),
(3, 'Batik Air', 'ID789', 'Halim Perdanakusuma', 'Adisutjipto', '2024-06-03 12:00:00', '2024-06-03 14:00:00', '900000.00'),
(4, 'AirAsia', 'QZ123', 'Soekarno-Hatta', 'Penang', '2024-06-04 13:00:00', '2024-06-04 15:00:00', '1200000.00'),
(5, 'Citilink', 'QG456', 'Ngurah Rai', 'Soekarno-Hatta', '2024-06-05 14:00:00', '2024-06-05 16:00:00', '1000000.00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_hotels`
--

CREATE TABLE `tb_hotels` (
  `id_hotel` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `amenities` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_hotels`
--

INSERT INTO `tb_hotels` (`id_hotel`, `name`, `location`, `description`, `price`, `amenities`) VALUES
(1, 'Hotel Indonesia Kempinski', 'Jakarta', 'Hotel mewah di pusat kota Jakarta', '2000000.00', 'WiFi, Kolam Renang, Spa'),
(2, 'The Ritz-Carlton', 'Bali', 'Hotel dengan pemandangan pantai yang menakjubkan', '2500000.00', 'WiFi, Kolam Renang, Gym, Restoran'),
(3, 'JW Marriott', 'Surabaya', 'Hotel bisnis modern di jantung kota Surabaya', '1800000.00', 'WiFi, Kolam Renang, Restoran, Parkir Gratis'),
(4, 'Shangri-La Hotel', 'Jakarta', 'Hotel bintang lima dengan layanan terbaik', '2200000.00', 'WiFi, Kolam Renang, Spa, Restoran'),
(5, 'Hilton Bandung', 'Bandung', 'Hotel nyaman dengan fasilitas lengkap di Bandung', '1500000.00', 'WiFi, Kolam Renang, Gym, Restoran');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_payment`
--

CREATE TABLE `tb_payment` (
  `id_payment` int(11) NOT NULL,
  `id_booking` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_date` datetime NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_payment`
--

INSERT INTO `tb_payment` (`id_payment`, `id_booking`, `amount`, `payment_date`, `payment_method`, `status`) VALUES
(1, 1, '500000.00', '2024-06-01 11:00:00', 'Credit Card', 'Paid'),
(2, 2, '750000.00', '2024-06-02 12:00:00', 'Credit Card', 'Paid'),
(3, 3, '600000.00', '2024-06-03 13:00:00', 'Credit Card', 'Paid'),
(4, 4, '550000.00', '2024-06-04 14:00:00', 'Credit Card', 'Paid'),
(5, 5, '650000.00', '2024-06-05 15:00:00', 'Credit Card', 'Paid');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_user`
--

CREATE TABLE `tb_user` (
  `id_user` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirm_password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `registration_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tb_user`
--

INSERT INTO `tb_user` (`id_user`, `first_name`, `last_name`, `username`, `password`, `confirm_password`, `email`, `registration_date`) VALUES
(1, '', '', 'johndoe', 'password1', '', 'johndoe@example.com', '2024-06-01 10:00:00'),
(2, '', '', 'janedoe', 'password2', '', 'janedoe@example.com', '2024-06-02 11:00:00'),
(3, '', '', 'alicesmith', 'password3', '', 'alicesmith@example.com', '2024-06-03 12:00:00'),
(4, '', '', 'bobwilliams', 'password4', '', 'bobwilliams@example.com', '2024-06-04 13:00:00'),
(5, '', '', 'charliebrown', 'password5', '', 'charliebrown@example.com', '2024-06-05 14:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_bookings`
--
ALTER TABLE `tb_bookings`
  ADD PRIMARY KEY (`id_booking`);

--
-- Indeks untuk tabel `tb_booking_history`
--
ALTER TABLE `tb_booking_history`
  ADD PRIMARY KEY (`id_history`);

--
-- Indeks untuk tabel `tb_bus`
--
ALTER TABLE `tb_bus`
  ADD PRIMARY KEY (`id_bus`);

--
-- Indeks untuk tabel `tb_destinations`
--
ALTER TABLE `tb_destinations`
  ADD PRIMARY KEY (`id_destinations`);

--
-- Indeks untuk tabel `tb_flights`
--
ALTER TABLE `tb_flights`
  ADD PRIMARY KEY (`id_flights`);

--
-- Indeks untuk tabel `tb_hotels`
--
ALTER TABLE `tb_hotels`
  ADD PRIMARY KEY (`id_hotel`);

--
-- Indeks untuk tabel `tb_payment`
--
ALTER TABLE `tb_payment`
  ADD PRIMARY KEY (`id_payment`);

--
-- Indeks untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_bookings`
--
ALTER TABLE `tb_bookings`
  MODIFY `id_booking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tb_booking_history`
--
ALTER TABLE `tb_booking_history`
  MODIFY `id_history` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tb_bus`
--
ALTER TABLE `tb_bus`
  MODIFY `id_bus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tb_destinations`
--
ALTER TABLE `tb_destinations`
  MODIFY `id_destinations` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tb_flights`
--
ALTER TABLE `tb_flights`
  MODIFY `id_flights` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tb_hotels`
--
ALTER TABLE `tb_hotels`
  MODIFY `id_hotel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tb_payment`
--
ALTER TABLE `tb_payment`
  MODIFY `id_payment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
