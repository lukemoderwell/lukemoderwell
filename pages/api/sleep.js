export default function handler(req, res) {
  // const date = new Date()
  // // Months in JS Date are 0-11 for some reason
  // const monthStr =
  //   date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth + 1}`
  // // Day minus one to get last night's sleep numbers
  // const dayStr = () => {
  //   const day = date.getDate();
  //   if (day === 1) {
  //     return '01';
  //   } else if (day < 10) {
  //     return `0${day - 1}`
  //   } else {
  //     return `${day - 1}`;
  //   }
  // }
  // const dateStr = `${date.getFullYear()}-${monthStr}-${dayStr}`
  const url = `https://api.ouraring.com/v1/sleep?access_token=${process.env.OURA_TOKEN}`
  fetch(url, {})
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
}
