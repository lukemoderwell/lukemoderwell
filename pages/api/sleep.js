export default function handler(req, res) {
  const date = new Date();
  const monthStr = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth + 1}`;
  const dayStr = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const dateStr = `${date.getFullYear()}-${monthStr}-${dayStr - 1}`;
  const url = `https://api.ouraring.com/v1/sleep?start=${dateStr}&access_token=${
    process.env.OURA_ACCESS_TOKEN
  }`
  fetch(url, {

  })
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
}
