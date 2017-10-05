fs = require('fs')
fs.readFile('/Users/ahrumhan/Desktop/new-proj/assign-01/posts/post_one.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
