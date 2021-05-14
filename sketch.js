

function setup(){
  createCanvas(850,600);
  input=createInput().attribute("placeholder", "Enter your name")
  input.position(450,230)
  bP=createButton("Play")
  bP.position(450,280)
  bP.mousePressed(logic)
  
  
  
  }
  function draw(){
  background("#ff9966");
  
    
  }
  function logic(){
  input.hide()
  bP.hide()
  H=createElement("h1")
  H.html("Hello!😊 "+input.value() )
  H.position(425,10)
  A=createElement("h1")
  A.html("Let's see if you can give the Correct Answer!!!")
  A.position(250,50)
  B=createElement("h1")
  B.html("Questions")
  B.position(200,100)
  C=createElement("h2")
  C.html("Q1) What month of the year has 28 days?❓❓❓")
  C.position(200,200)
  D=createElement("h2")
  D.html("a) February")
  D.position(200,250)
  E=createElement("h2")
  E.html("b) None")
  E.position(200,300)
  G=createElement("h2")
  G.html("c) All the Months")
  G.position(200,350)
  I=createElement("h2")
  I.html("d) March")
  I.position(200,400)
  bp=createButton("SUBMIT")
  bp.position(200,550)
  bp.mousePressed(logic2)
  output=createInput().attribute("placeholder", "Enter the correct option")
  output.position(400,550)
  }
  function logic2(){
  H.hide()
  A.hide()
  B.hide()
  C.hide()
  D.hide()
  E.hide()
  G.hide()
  I.hide()
  bp.hide()
  output.hide()
  W=createElement("h1")
  W.html("YOUR ANSWERS")
  W.position(200,100)
  Q=createElement("h2")
  Q.html("Q1) "+output.value())
  Q.position(200,150)
  S=createElement("h1")
  S.html("CORRECT ANSWER ✔")
  S.position(200,250)
  E=createElement("h2")
  E.html("Q1) c")
  E.position(200,300)
  D=createElement("h1")
  D.html("THANK YOU FOR ATTENDING OUR QUIZ🙏🙏")
  D.position(200,400)
  }
  
  
  