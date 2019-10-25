const express = require('express');
const app = express();
const PORT = 3000;


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname)); //it uses the folder which contains this index.js file

app.get('/', (req, res) => {
  res.render('home', { pictureList });
});

//this should be in another home.js file because that would be more front-end
const pictureList = [
  {url: "uj1.jpg", title: "The first version", description: "it is really long"},
]
// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});