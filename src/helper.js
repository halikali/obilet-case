const formatDate = (date) => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  const dayArr = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const monthArr = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  return [
    padTo2Digits(date.getDate()),
    monthArr[date.getMonth()],
    date.getFullYear(),
    dayArr[date.getDay()],
  ].join(" ");
};

export { formatDate };
