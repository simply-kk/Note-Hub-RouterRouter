// const useCreateDate = () => {
//   const dateObj = new Date();
//   const month = dateObj.getMonth();
//   let monthName;
//   switch (month) {
//     case 0:
//       monthName = "January";
//       break;
//     case 1:
//       monthName = "February";
//       break;
//     case 2:
//       monthName = "March";
//       break;
//     case 3:
//       monthName = "April";
//       break;
//     case 4:
//       monthName = "May";
//       break;
//     case 5:
//       monthName = "June";
//       break;
//     case 6:
//       monthName = "July";
//       break;
//     case 7:
//       monthName = "August";
//       break;
//     case 8:
//       monthName = "September";
//       break;
//     case 9:
//       monthName = "October";
//       break;
//     case 10:
//       monthName = "November";
//       break;
//     case 11:
//       monthName = "December";
//       break;
//   }

//   const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} at ${dateObj.getHours()}:${dateObj.getMinutes()}.`;

//   return date;
// };

// export default useCreateDate;

// **************************

const useCreateDate = () => {
  const dateObj = new Date();
  const month = dateObj.getMonth();
  let monthName;
  switch (month) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
  }

  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} at ${hours}:${minutes}.`;
  return date;
};

export default useCreateDate;
