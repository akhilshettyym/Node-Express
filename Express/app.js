import express from 'express';

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

const PORT = process.env.PORT || 3000; // $env:VARIABLE_NAME="VALUE"
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});


/* 
app - this variable holds the created Express app, which we can use -
Define routes (app.get(), app.post(), etc)
Configure middleware (app.use())
Start the server (app.listen())
*/