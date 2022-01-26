export default function handler(req, res) {
  const url = `https://api.ouraring.com/v1/sleep?access_token=${process.env.OURA_TOKEN}`
  fetch(url, {})
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
}
