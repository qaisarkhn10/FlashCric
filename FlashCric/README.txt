FLASHCRIC — PURPLE / BLACK CRICKET DASHBOARD
============================================

WHAT'S INCLUDED
- Responsive website: index.html
- Scores, fixtures, results, and watch sections
- Clearly labelled illustrative demo scores until a real API is connected
- CricketData currentMatches API integration
- Netlify Function proxy to keep the public site's API key server-side
- Manual refresh only; no automatic polling
- Add official/authorized broadcaster links and optional embed URLs
- No frontend build step or third-party JavaScript libraries required

RUN ON YOUR PC (DEMO)
1. Extract the FlashCric folder.
2. Double-click index.html to open it in Chrome or Edge.
3. It opens in Demo mode. Demo scores/results are illustrative examples, NOT live data.

OPTION A — LOCAL TESTING WITH YOUR OWN API KEY
1. Go to https://cricketdata.org/ and create an account/get a key.
2. Open index.html, click the gear icon, paste the key under CricketData API key, and Save.
3. Click Refresh in the match centre.
4. If direct requests fail when opened as file://, deploy the site or test on a local web server. Browser CORS rules may prevent local-file API calls.

OPTION B — DEPLOY PUBLICLY ON NETLIFY (RECOMMENDED)
1. Open https://app.netlify.com/drop and sign in/create a free account if prompted.
2. Upload the extracted FlashCric project folder (it includes index.html, netlify.toml, and netlify/functions/current-matches.js). Netlify Drop also accepts a ZIP; use the folder if possible.
3. After the first deploy, open your Netlify site's dashboard.
4. Go to Site configuration / Environment variables (wording can vary) and add:
   Key:   CRICKETDATA_API_KEY
   Value: paste your CricketData API key
5. Save the variable, then trigger a new deploy/redeploy so the function receives it.
6. Open your published netlify.app URL, click Refresh on the scoreboard, and verify real data loads.
7. Share the site URL. Visitors do not need to enter their own API key when the Netlify environment variable is configured.

Important deployment notes:
- Do NOT paste the API key into index.html, commit it to GitHub, or share it in screenshots/messages.
- If you previously stored a key in Settings, it is stored in that browser's local storage. For the public deployment, use the server-side Netlify environment variable instead.
- For future updates, upload the updated project folder in the Netlify dashboard's deploy area or connect a Git repository for continuous deployment.

STREAMS
1. In FlashCric click Watch, then Add a stream, or click the gear icon.
2. Enter an official broadcaster name and official stream page URL.
3. Optionally enter the broadcaster's official embed URL only when embedding is permitted.
4. Save settings. The source appears under Available sources. Use Play embed or Open source.
5. Some broadcasters block embeds; use Open source in that case. Only use streams you are authorized to access or embed. FlashCric does not host or rebroadcast footage.

DATA LIMITS
CricketData's current pricing page lists the lifetime-free tier at 100 API hits/day and says free data may be a few minutes behind real time. Plans/terms can change; check https://cricketdata.org/pricing/ before relying on the API. FlashCric does not auto-refresh; use the Refresh button when needed.

TROUBLESHOOTING
- If it shows Demo mode after deployment: confirm CRICKETDATA_API_KEY is set correctly in Netlify and redeploy.
- If the API returns a failure or empty list: verify the key and usage quota on CricketData.
- If scores load but appear delayed: the provider's free tier may be behind live broadcast timing.
- If a stream won't display: the broadcaster may block iframe embeds; click Open source instead.

FILE LIST
index.html
netlify.toml
netlify/functions/current-matches.js
README.txt
