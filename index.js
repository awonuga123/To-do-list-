1
function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}

2
const post1 = new InstagramPost("john_doe", "Check out my new ride!", "https://example.com/car.jpg", 5000, 200);

3
console.log(post1.authorHandle); // "john_doe"
console.log(post1.content); // "Check out my new ride!"
console.log(post1.imageLink); // "https://example.com/car.jpg"
console.log(post1.views); // 5000
console.log(post1.likes); // 200
