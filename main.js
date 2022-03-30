function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    var classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ls3OnC8Iu/model.json',modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults)
}