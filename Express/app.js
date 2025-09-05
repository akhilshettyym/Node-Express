import express from 'express';
import { PORT } from './env.js';
import path from 'path';

const app = express();

app.get("/", (req, res) => res.send("Hello World !"));

app.get("/about", (req, res) => res.send("<h3>Welcome to about page.</h3>"));

app.get("/about/next", (req, res) => res.send("<h4>Welcome to the next page after about page.</h4>"));

app.get("/URL", (req, res) => {
  return res.send(` <div class="container">
      <h1>URL Shortner</h1>
      <form id="shorten-form">
        <div class="inputs">
          <label for="url">Enter URL : </label>
          <input type="url" name="url" id="url" required />
        </div>
        <div class="inputs">
          <label for="shortCode">Enter Short Code : </label>
          <input type="text" name="shortCode" id="shortCode" required />
        </div>
        <button type="submit">Shorten</button>
      </form>
      <h2>Shorten URL's</h2>
      <ul id="shortened-urls"></ul>
    </div>`);
});

app.get("/", (req, res) => {
  // console.log(__dirname);
  // console.log(__filename);
  // const __filename = new URL(import.meta.url).pathname
  // console.log(__filename);
  // console.log(import.meta.url)

//   res.send(` <div class="text-section">
//     <h1>Never console the logs</h1>
//     <p> Else logs will console you. </p>
//     <a href="#"> God Bless you </a>
// </div>
// <div class="img">
// </div>`);
// });
const homePagePath = path.join(import.meta.dirname, "public", "index.html");
res.sendFile(homePagePath);
});

// const PORT = process.env.PORT || 3000; // $env:VARIABLE_NAME="VALUE"
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});


/* 
app - this variable holds the created Express app, which we can use -
Define routes (app.get(), app.post(), etc)
Configure middleware (app.use())
Start the server (app.listen())
*/