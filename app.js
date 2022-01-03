const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req, res) => {
    console.log(__dirname);
    res.render("home.hbs", {
        css: ["home.css"],
    });

})

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        css: ["about.css"],
    });
})

app.get("/work", (req, res) => {
    const works = [
        {
            name: "View at Rouelles",
            year: 1858,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Monet_Veduta_di_Rouelles.jpg/300px-Monet_Veduta_di_Rouelles.jpg",
        },
        {
            name: "A Cart on the Snowy Road at Honfleur",
            year: 1865,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Monet%2C_A_Cart_on_the_Snowy_Road_at_Honfleur_%281865_or_1867%29.jpg/300px-Monet%2C_A_Cart_on_the_Snowy_Road_at_Honfleur_%281865_or_1867%29.jpg",
        },
        {
            name: "Garden of the Princess",
            year: 1867,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Monet_-_Garten_der_Infantin.jpg/300px-Monet_-_Garten_der_Infantin.jpg",
        },
        {
            name: "Regatta at Sainte-Adresse",
            year: 1867,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Monet_-_Garten_der_Infantin.jpg/300px-Monet_-_Garten_der_Infantin.jpg",
        }
    ];

    res.render("work.hbs", {
        works,
        css: ["work.css"],
    });
})

app.get("/photos", (req, res) => {

    const pictures = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/260px-Claude_Monet_1899_Nadar_crop.jpg",
        "https://cdn.radiofrance.fr/s3/cruiser-production/2020/09/15a20cdc-df71-47e8-8efc-ed32c8cbd1cd/838_gettyimages-545350263.jpg",
        "https://lh3.googleusercontent.com/proxy/2Jjkmug4OYrWlvm2dJNYXmhPOacrA_Dh_-KYLE1jbIeRA8dDj-5gBZ80TCEU2cI2_Fb-EFk1wnu466u5uCpUrQ",
        "data:image/jpeg;base64,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",
    ]

    res.render("photos.hbs", {
        pictures,
    });
})
app.listen(4000);