const express = require('express');
const save = require('instagram-save');
const app = express();

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    var myDir='/Users/kaikiat/Programming/youtube_dld';  //your_path
    var splitted_URL=URL.split("/");    ///returns an array
    var array_length=splitted_URL.length;
    insta_photo_id=splitted_URL[array_length-2]
    save(insta_photo_id, myDir).then(res => {
        console.log(res.file);
      });
});

app.listen(3000, () => {
	console.log('Server is running at port 3000');
});
