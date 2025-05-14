const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));




const favoriteData = []
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post("/api/add_favorite", (req, res) => {
  console.log("result", req.body)
  const favdata = {
    "id": favoriteData.length + 1,
    "name": req.body.cityname,
    "country": req.body.countryname,
    "region": req.body.regionname,
  }

  favoriteData.push(favdata);

  console.log("Final", favdata);

  res.status(200).send({
    "status": 200,
    "message": "Added to favorite",
    "data": favdata
  });


})

app.get("/api/get_favorite", (req, res) => {
  if (favoriteData.length > 0) {
    res.status(200).send({
      "status": 200,
      "favorite": favoriteData
    });
  } else {
res.status(200).send({
      "status": 200,
      "favorite": []
    });
  }
}
)
