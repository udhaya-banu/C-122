x=0;
y=0;
screenwidth=0;
screenheight=0;
draw_apple="";
apple="";
speak_data="";
to_number=0;
function preload(){
    apple=loadImage("apple.jpg");function setup() {
        screen_width = window.innerWidth;
        screen_height = window.innerHeight;
      
        canvas = createCanvas(screen_width, screen_height-150);
        canvas.position(0,150);
      }
      
      function draw() {
        if(draw_apple == "set")
        {
          for(var i = 1 ; i <= to_number; i++)
          {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
          }
          document.getElementById("status").innerHTML = to_number + " Apples drawn";
          speak_data = to_number + "Apples drawn";
          speak();
          draw_apple = "";
        }
      }
      
      function speak(){
          var synth = window.speechSynthesis;
      
          var utterThis = new SpeechSynthesisUtterance(speak_data);
      
          synth.speak(utterThis);
      
          speak_data = "";
      }
}
SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="speech had been recognized"+content;
    to_number=Number(content);
    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML="Stated drawing apple";
    draw_apple="set";
    } 
    else{
        document.getElementById("status").innerHTML="the speech has not recognized a number";
}

}
function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
  
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(0,150);
  }
  
  function draw() {
    if(draw_apple == "set")
    {
      for(var i = 1 ; i <= to_number; i++)
      {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
      }
      document.getElementById("status").innerHTML = to_number + " Apples drawn";
      speak_data = to_number + "Apples drawn";
      speak();
      draw_apple = "";
    }
  }
  
  function speak(){
      var synth = window.speechSynthesis;
  
      var utterThis = new SpeechSynthesisUtterance(speak_data);
  
      synth.speak(utterThis);
  
      speak_data = "";
  }