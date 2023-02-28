var Cow = 0;
var Cat = 0;
var Dog = 0;
var Tiger_Lion = 0;

function start() {
    navigator.mediaDevices.getUserMedia({audio:true}) 
    classifier  = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/36F1kERQN/model.json', modelReady);
    
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
    
random_number_r = Math.floor(Math.random()*255)+1;
random_number_g = Math.floor(Math.random()*255)+1;
random_number_b = Math.floor(Math.random()*255)+1;


document.getElementById("detected_voice").innerHTML='Detected voice is that of a ' + results[0].label;

document.getElementById("detected_animal").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("detected_voice").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img = document.getElementById("ear_img");


if(results[0].label == "Dog (Woof)"){ 
img.src = 'Dog.jpeg';
Dog = Dog + 1;
}
else if(results[0].label == "Cat (Meow)"){
img.src = 'Cat.webp';
Cat = Cat + 1;
}
else if(results[0].label == "Cow (Moo)"){
img.src = 'Cow.jpeg';
Cow = Cow + 1;
}
else {
    img.src = 'hi.jpeg';
Tiger_Lion = Tiger_Lion + 1;
}
}
}