const express = require("express");
const { jokes, albums } = require("./data"); // Импортируем данные из модуля
const app = express();
const PORT = 3002;

const path = require("path");
const {randomize} = require("./helper");


app.get("/", (req, res)=>{
    res.send("Welcome to your new home API");

})

// Route for a joke
app.get("/jokes", (req, res) => {
    // const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    const randomJoke = (randomize(jokes));
    res.send(randomJoke);
});

// Route for an album
app.get("/albums", (req, res) => {
    // const randomAlbum = albums[Math.floor(Math.random() * albums.length)];
    const randomAlbum = (randomize(albums));
    res.json(randomAlbum);
});

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname, "error.html"));
})

// // Catch-all for another URL
// app.get("*", (req, res) => {
//     res.send(`
//     <html>
//       <body>
//         <h1>Error: Page not found</h1>
//         <ul>
//           Try to access the following:
//           <li><a href="/jokes">Jokes</a></li>
//           <li><a href="/albums">Albums</a></li>
//         </ul>
//       </body>
//     </html>
//   `);
// });

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
