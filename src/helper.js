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

  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
    dayArr[date.getDay()],
  ].join(" ");
};

export { formatDate };
