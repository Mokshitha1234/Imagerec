Webcam.attach("#camera")



console.log("ml5 version: ", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bLK79LtDy/model.json",modelLoaded)

function modelLoaded(){
    console.log("Message has loaded")
}

function loading(){
    img = document.getElementById("snap")
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
   if(error){
    console.error(error)
   }
  else{
console.log(results)
document.getElementById("objname").innerHTML = results[0].label
document.getElementById("accname").innerHTML = results[0].confidence.toFixed(3)
  }
}

function captured(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML = "<img id='snap' src='"+data_uri+"'></>"
        }
    
    )
}