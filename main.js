function preload() {

}
function setup() {
    canvas = createCanvas(397, 298);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(397, 298);
    video.hide();
}
function draw() {
    canvas.center();
    image(video, 0, 0, 397, 298);
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Qm84XOLj-/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded');
}