
## Made with [Gridsome](https://gridsome.org/docs), [Airtable](https://airtable.com/), and [Netlify](https://www.netlify.com/)

[Demo Site](https://starwarsgridsome.netlify.com/)

run ```npm install```

Next, to get this running you need to create an airtable base with a table entitled "Movies" with the data from [this google sheet](https://docs.google.com/spreadsheets/d/1cwLHUPc6RL_raj7m71vt0IrhJ3vQgvUKRZSaFVG49LY/edit?usp=sharing). Then you will need to create a .env file at the root of the project that looks like:

<pre>NODE_ENV=development
PORT=8080
# Set your database/API connection information here
AIRTABLE_API_KEY=YOUR_API_KEY
AIRTABLE_BASE=YOUR_APP_BASE</pre>

You will also need to copy these same environment variables to your netlify site under settings >> Build & Deploy >> Environment

take a looke in ```gridsome.server.js``` to modify your data and calls

run ```gridsome develop``` and enjoy!
