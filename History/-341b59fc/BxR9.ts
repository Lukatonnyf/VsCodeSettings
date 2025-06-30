export default async function feedbackHandler(req, res){
  const response = await fetch('https://www.youtube.com/watch?v=e4H_KIrCilY')
  const data = await response.text()

  res.status(200.json({data}))
}
