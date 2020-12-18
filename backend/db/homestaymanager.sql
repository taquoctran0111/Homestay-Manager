-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 15, 2020 lúc 09:40 AM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `homestaymanager`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `nameRoom` int(11) NOT NULL,
  `imageRoom` varchar(255) NOT NULL,
  `states` enum('unBooked','Booked') NOT NULL,
  `nameCustomer` varchar(255) DEFAULT NULL,
  `phoneCustomer` int(11) DEFAULT NULL,
  `timeRental` int(11) DEFAULT NULL,
  `totalMoney` int(11) DEFAULT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `rooms`
--

INSERT INTO `rooms` (`id`, `nameRoom`, `imageRoom`, `states`, `nameCustomer`, `phoneCustomer`, `timeRental`, `totalMoney`, `created_at`, `updated_at`) VALUES
(1, 101, 'https://i.pinimg.com/564x/dc/e1/b4/dce1b4f7e58b78ce8ddd967e7e1f7c4c.jpg', 'Booked', 'Tạ Quốc Trần', 329051143, 12, 1200000, '2020-12-10 09:14:05.487', '2020-12-10 13:26:15.917'),
(2, 102, 'https://i.pinimg.com/236x/7d/90/69/7d90695ca493a0a2e00b3e97db0e01c4.jpg', 'unBooked', NULL, NULL, NULL, NULL, '2020-12-10 09:14:10.250', '2020-12-10 09:20:06.069'),
(3, 103, 'https://i.pinimg.com/236x/64/81/99/6481993f2ffe61c8132ae8f46a3f6a44.jpg', 'unBooked', NULL, NULL, NULL, NULL, '2020-12-10 09:14:11.183', '2020-12-10 09:20:09.585'),
(4, 201, 'https://i.pinimg.com/236x/78/af/38/78af3871d9cce05211b77900116398f4.jpg', 'unBooked', NULL, NULL, NULL, NULL, '2020-12-10 09:14:11.833', '2020-12-10 09:20:12.446'),
(5, 202, 'https://i.pinimg.com/236x/1c/ac/07/1cac07e3fdaf10358d6441a7237ba190.jpg', 'unBooked', NULL, NULL, NULL, NULL, '2020-12-10 09:14:12.468', '2020-12-10 09:20:15.071'),
(6, 203, 'https://i.pinimg.com/236x/12/d0/8e/12d08ef2f9c2d4440648f10656cf20cf.jpg', 'unBooked', NULL, NULL, NULL, NULL, '2020-12-10 09:14:14.578', '2020-12-10 09:20:19.350');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('initRoom.js'),
('initUser.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('IQCD5x5xtH3mhPfoQrANMT1yqnUNFqyZ', 1607659447, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":2,\"email\":\"taquoctrantb2000@gmail.com\",\"username\":\"Tạ Quốc Trần \",\"password\":\"$2b$10$vJmtqkg6v/HEOT/kOtj/m.yvFRs9quqgw8SSWeXt1DwL8a5nLFU7S\",\"role\":\"customer\",\"created_at\":\"2020-12-10T03:33:09.000Z\",\"updated_at\":\"2020-12-10T03:33:09.000Z\"}}'),
('KOlCuTgOivN6S-jpiplOcPMp92dy2WzO', 1607668003, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":2,\"email\":\"taquoctrantb2000@gmail.com\",\"username\":\"Tạ Quốc Trần \",\"password\":\"$2b$10$vJmtqkg6v/HEOT/kOtj/m.yvFRs9quqgw8SSWeXt1DwL8a5nLFU7S\",\"role\":\"customer\",\"created_at\":\"2020-12-10T03:33:09.000Z\",\"updated_at\":\"2020-12-10T03:33:09.000Z\"}}'),
('llrGlxFz1i3KpcGPkUYmcyzyJPJ3OEOG', 1607779308, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":2,\"email\":\"taquoctrantb2000@gmail.com\",\"username\":\"Tạ Quốc Trần \",\"password\":\"$2b$10$vJmtqkg6v/HEOT/kOtj/m.yvFRs9quqgw8SSWeXt1DwL8a5nLFU7S\",\"role\":\"customer\",\"created_at\":\"2020-12-10T03:33:09.000Z\",\"updated_at\":\"2020-12-10T03:33:09.000Z\"}}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `role` enum('admin','customer') NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `role`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin@admin.com', 'Admin', 'admin', '$2b$10$T0gb/J1JeOvBZM8eNiHomO/0jANNVEt1Z/fX/yw5I9avyBB8rpqjK', '2020-12-10 03:31:57.000', '2020-12-10 03:31:57.000'),
(2, 'taquoctrantb2000@gmail.com', 'Tạ Quốc Trần ', 'customer', '$2b$10$vJmtqkg6v/HEOT/kOtj/m.yvFRs9quqgw8SSWeXt1DwL8a5nLFU7S', '2020-12-10 03:33:09.000', '2020-12-10 03:33:09.000');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rooms_id` (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
