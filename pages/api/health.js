export default function handler(req, res) {
  fetch(
    `https://api.ouraring.com/v1/userinfo?access_token=${process.env.OURA_ACCESS_TOKEN}`,
    {}
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
}
