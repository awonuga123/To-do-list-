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
      

            QUESTION 2
// Create the first post object
const post1 = new InstagramPost("jane_smith", "Just another day at the beach ☀️🌊", "https://example.com/beach.jpg", 10000, 500);

// Create the second post object
const post2 = new InstagramPost("john_doe", "Had a great time at the concert last night! 🎶🤘", "https://example.com/concert.jpg", 8000, 400);
  

2
console.log(post1.authorHandle); // "jane_smith"
console.log(post1.content); // "Just another day at the beach ☀️🌊"
console.log(post1.imageLink); // "https://example.com/beach.jpg"
console.log(post1.views); // 10000
console.log(post1.likes); // 500

console.log(post2.authorHandle); // "john_doe"
console.log(post2.content); // "Had a great time at the concert last night! 🎶🤘"
console.log(post2.imageLink); // "https://example.com/concert.jpg"
console.log(post2.views); // 8000
console.log(post2.likes); // 400
   

     QUESTION 3
// Factory function to create a person object
function createPerson(name, age, location) {
  return {
    name,
    age,
    location
  };
}

// Factory function to create a JAMB scores object
function createJambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk
  };
}

// Create an object representing Musa using the createPerson factory function
const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

// Create an object representing Musa's JAMB scores using the createJambScores factory function
const musaJambScores = createJambScores(70, 85, 82, 94);

// Add the musaJambScores object as a property to the musa object
musa.jambScores = musaJambScores;


2
console.log(musa.name); // "Musa Dawodu"
console.log(musa.age); // 19
console.log(musa.location); // "Lekki, Lagos State"

console.log(musa.jambScores.ENG); // 70
console.log(musa.jambScores.GOVT); // 85
console.log(musa.jambScores.LIT); // 82
console.log(musa.jambScores.CRK); // 94

            QUESTION 4
const originalObj = { a: 1, b: 2, c: 3 };
const newObj = Object.assign({}, originalObj);
console.log(newObj); // { a: 1, b: 2, c: 3 }

2
const originalObj = { a: 1, b: 2, c: 3 };
const newObj = { ...originalObj };
console.log(newObj); // { a: 1, b: 2, c: 3 }

3
const originalObj = { a: 1, b: { c: 2 } };
const newObj = JSON.parse(JSON.stringify(originalObj));
console.log(newObj); // { a: 1, b: { c: 2 } }

4
const originalObj = { a: 1, b: 2, c: 3 };
const newObj = Object.create(originalObj);
console.log(newObj); // {}
console.log(newObj.a); // 1
console.log(newObj.b); // 2
console.log(newObj.c); // 3


        QUESTION 5
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
};

for (const party in presidentialCandidates) {
  console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
}

OUTPUT
Omoyele Sowore is the presidential candidate of AAC
Christopher Imumolen is the presidential candidate of ACCORD
Bola Ahmed Tinubu is the presidential candidate of APC
Peter Obi is the presidential candidate of LP
Rabiu Kwankwaso is the presidential candidate of NNPP
Atiku Abubakar is the presidential candidate of PDP

