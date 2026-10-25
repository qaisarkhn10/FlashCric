// Netlify serverless proxy. Keep CRICKETDATA_API_KEY in Netlify's environment
// variable settings; never hard-code the key in this source file.
exports.handler = async function () {
  const key = process.env.CRICKETDATA_API_KEY;
  if (!key) {
    return {
      statusCode: 503,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ status: 'failure', message: 'CRICKETDATA_API_KEY is not configured in Netlify environment variables.' })
    };
  }
  try {
    const endpoint = 'https://api.cricapi.com/v1/currentMatches?apikey=' + encodeURIComponent(key) + '&offset=0';
    const upstream = await fetch(endpoint, { headers: { Accept: 'application/json' } });
    const body = await upstream.text();
    return {
      statusCode: upstream.status,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=45, s-maxage=45',
        'X-Content-Type-Options': 'nosniff'
      },
      body
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ status: 'failure', message: 'Could not reach CricketData provider.' })
    };
  }
};
