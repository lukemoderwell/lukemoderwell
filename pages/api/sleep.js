export default function handler(req, res) {
  // const url =
  //   process.env.NODE_ENV === 'production'
  //     ? siteConfig.siteUrl
  //     : 'http://localhost:3000'
  // const getSleep = async () => {
  //   await fetch(`${url}/api/sleep`, {})
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const result = data.sleep
  //       const totalDuration = result[result.length - 1].total
  //       const sleepHours = totalDuration / 60 / 60
  //       setSleep(sleepHours.toFixed(2))
  //     })
  // }
  const url = `https://api.ouraring.com/v1/sleep?access_token=${process.env.OURA_TOKEN}`
  fetch(url, {})
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
}
