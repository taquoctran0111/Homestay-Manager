-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 23, 2020 lúc 02:52 PM
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
-- Cơ sở dữ liệu: `homestay_manager`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbadmin`
--

CREATE TABLE `tbadmin` (
  `id` int(11) NOT NULL,
  `usernameAdmin` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `passwordAdmin` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbadmin`
--

INSERT INTO `tbadmin` (`id`, `usernameAdmin`, `passwordAdmin`) VALUES
(1, 'admin', '123456'),
(2, 'admin1', 'admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbcustomer`
--

CREATE TABLE `tbcustomer` (
  `id` int(11) NOT NULL,
  `customername` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rentaltime` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbcustomer`
--

INSERT INTO `tbcustomer` (`id`, `customername`, `phone`, `rentaltime`) VALUES
(1, 'Nguyễn Văn Nam', '0329051143', '10'),
(2, 'Lê Văn Luyện', '0123456789', '15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbroom`
--

CREATE TABLE `tbroom` (
  `id` int(11) NOT NULL,
  `nameRoom` int(255) DEFAULT NULL,
  `nameCustomer` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phoneCustomer` int(255) DEFAULT NULL,
  `timeRental` int(11) DEFAULT NULL,
  `totalMoney` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbroom`
--

INSERT INTO `tbroom` (`id`, `nameRoom`, `nameCustomer`, `phoneCustomer`, `timeRental`, `totalMoney`) VALUES
(1, 101, 'Nguyễn Văn A', 12345678, 10, 1000000),
(2, 102, 'Đỗ Văn B', 45678910, 5, 500000),
(3, 103, 'Lê Thị C', 344363663, 9, 900000),
(4, 104, 'Con Gà Con', 4885832, 5, 500000),
(5, 105, 'Vịt con lon ton', 24252642, 8, 800000),
(6, 201, 'Uzumaki Naruto', 242948294, 15, 1500000),
(7, 202, 'Uchiha Sasuke', 29424245, 12, 1200000),
(8, 203, 'Songoku', 23235235, 11, 1100000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbuser`
--

CREATE TABLE `tbuser` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbuser`
--

INSERT INTO `tbuser` (`id`, `username`, `password`, `role`) VALUES
(1, 'nguyenvanA', '123456', 'user'),
(2, 'lethiB', '123456', 'user'),
(80, 'User1', 'User1', 'user'),
(81, 'Sjkcjc', 'Sjkcjc', 'user');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbadmin`
--
ALTER TABLE `tbadmin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbcustomer`
--
ALTER TABLE `tbcustomer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbroom`
--
ALTER TABLE `tbroom`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbuser`
--
ALTER TABLE `tbuser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbadmin`
--
ALTER TABLE `tbadmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tbcustomer`
--
ALTER TABLE `tbcustomer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `tbroom`
--
ALTER TABLE `tbroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `tbuser`
--
ALTER TABLE `tbuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
