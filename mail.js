
function startclassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('//teachablemachine.withgoogle.com/models/deSBCnAzS//model.json', modelReady);
}
function modelReady()
{
    classifier.classify( gotResults);
}
function gotResults(error, results)
{
    if (error) 
    {
      console.error(error);  
    }
    else 
    {
       console.log(results) 
       random_number_r = Math.floor(Math.random() * 255) + 1;
       random_number_g = Math.floor(Math.random() * 255) + 1;
       random_number_b = Math.floor(Math.random() * 255) + 1;
       
       document.getElementById("result_label").innerHTML = "i can hear - "+ results[0].label;
       document.getElementById("result_confidence").innerHTML = "accuracy - " + (results[0].confidence * 100).toFixed(2) +"%";
       document.getElementById("result_label").style.color = "rgb("+random_number_r+","+ random_number_g+","+random_number_b+")";
       document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       img = document.getElementById("bird");
       img1 = document.getElementById("wull");
       img2 = document.getElementById("turkey");
       img3 = document.getElementById("cow");

       if (results[0].label == "clap") 
       {
       img.src = 'a bird.gif';
       img1.src = 'a cow.png';
       img2.src = 'a turkey.png';     
       img3.src = 'a wull.png';     
       } else if (results[0].label == "bell") 
       {
        img.src = 'a bird.png';  
        img1.src = ' a cow.gif';  
        img2.src = 'a turkey.png';  
        img3.src = 'a wull.png';      
       } else if (results[0].label == "snaping") 
       {
        img.src = 'a bird.png';    
        img1.src = 'a cow.png';   
        img2.src = 'a turkey.gif';  
        img3.src = 'a wull.png';      
       } else{
        img.src = 'a bird.png';   
        img1.src = 'a cow.png'; 
         img2.src = 'a turkey.png';    
         img3.src = 'a wull.gif';   
       }
    }
}