export const apiURL = `http://127.0.0.1:8888`;

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString(`default`, {
    year: `numeric`,
    month: "long",
    day: "numeric",
  });
};

export const getStringMonth = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monthNumber];
};
