// api/monday-webhook.js
export default async function handler(req, res) {
  const body = req.body;

  // Handle the challenge
  if (body.challenge) {
    return res.status(200).json({ challenge: body.challenge });
  }

  // Forward to Clay
  await fetch("https://api.clay.com/v3/sources/webhook/YOUR-CLAY-ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  res.status(200).send("OK");
}
