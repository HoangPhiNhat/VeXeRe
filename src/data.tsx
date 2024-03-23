export const transportOptions = [
  {
    iconSrc: "./svg/coach.svg",
    text: "Xe khách",
    isActive: true,
    discount: undefined,
    isNew: false,
  },
  {
    iconSrc: "./svg/plane.svg",
    text: "Máy bay",
    isActive: false,
    discount: "-20K",
    isNew: false,
  },
  {
    iconSrc: "./svg/train.svg",
    text: "Tàu hỏa",
    isActive: false,
    discount: undefined,
    isNew: true,
  },
  {
    iconSrc: "./svg/carRental.svg",
    text: "Thuê xe",
    isActive: false,
    discount: undefined,
    isNew: true,
  },
];
export const features = [
  {
    iconSrc: "./svg/features/verified.svg",
    text: "Chắc chắn có chỗ",
  },
  {
    iconSrc: "./svg/features/headset_mic.svg",
    text: "Hỗ trợ 24/7",
  },
  {
    iconSrc: "./svg/features/discount.svg",
    text: "Nhiều ưu đãi",
  },
  {
    iconSrc: "./svg/features/monetization.svg",
    text: "Thanh toán đa dạng",
  },
];
export const tours = [
  {
    distance: "Sài Gòn - Nha Trang",
    price: 250000,
    newPrice: 200000,
    thumbnailUrl: "../public/images/tours/tour_image_1.png",
  },
  {
    distance: "Sài Gòn - Nha Trang 1",
    price: 250000,
    thumbnailUrl: "../public/images/tours/tour_image_1.png",
    newPrice: 200000,
  },
  {
    distance: "Sài Gòn - Nha Trang",
    price: 250000,
    newPrice: 200000,
    thumbnailUrl: "../public/images/tours/tour_image_1.png",
  },
  {
    distance: "Sài Gòn - Nha Trang",
    price: 250000,
    newPrice: 200000,
    thumbnailUrl: "../public/images/tours/tour_image_1.png",
  },
];

export const routes = [
  {
    start_end: "ve_xe_tu_buon_me_thuot_den_sai_gon",
    value: "Xe đi Buôn Mê Thuột từ Sài Gòn",
  },
  {
    start_end: "ve_xe_tu_vung_tau_den_sai_gon",
    value: "Xe đi Vũng Tàu từ Sài Gòn",
  },
  {
    start_end: "ve_xe_tu_nha_trang_den_sai_gon",
    value: "Xe đi Nha Trang từ Sài Gòn",
  },
  {
    start_end: "ve_xe_tu_da_lat_den_sai_gon",
    value: "Xe đi Đà Lạt từ Sài Gòn",
  },
  {
    start_end: "ve_xe_tu_sapa_den_ha_noi",
    value: "Xe đi Sapa từ Hà Nội",
  },
  {
    start_end: "ve_xe_tu_hai_phong_den_ha_noi",
    value: "Xe đi Hải Phòng từ Hà Nôi",
  },
  {
    start_end: "ve_xe_tu_vinh_den_ha_noi",
    value: "Xe đi Vinh từ Hà Nội",
  },
];

console.log(routes);
