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

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    monthArr[date.getMonth()],
    date.getFullYear(),
    dayArr[date.getDay()],
  ].join(" ");
};

const formatDay = (date) => {
  return `${date.split("-")[2]} ${monthArr[parseInt(date.split("-")[1], 10)]} ${
    date.split("-")[0]
  }`;
};

export { formatDate, formatDay, padTo2Digits };
