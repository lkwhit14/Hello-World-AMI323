function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
  }
  function draw(){
    background(250);
    
    /// H ///
    translate(-240, -100, 0);
    normalMaterial();
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();
    
    translate(30, 0, 0)
    push();
    rotateX(frameCount * 0.01);
    box(60, 20, 20);
    pop();
    
    translate(30, 0, 0);
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();
    
    /// E ///
    translate(45, 0, 0);
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();

    translate(30,0,0)
    push();
    rotateX(frameCount * 0.01);
    box(60, 20, 20);
    pop();

    translate(0, 35, 0)
    push();
    rotateX(frameCount * 0.01);
    box(60, 20, 20);
    pop();

    translate(0, -70, 0)
    push();
    rotateX(frameCount * 0.01);
    box(60, 20, 20);
    pop();

    /// L1 ////
    translate(60, 35, 0);
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();

    translate(30, 35, 0)
    push();
    rotateX(frameCount * 0.01);
    box(60, 20, 20);
    pop();

    /// L2 ///
    translate(60, -35, 0);
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();

    translate(30, 35, 0)
    push();
    rotateX(frameCount * 0.01);
    box(60, 20, 20);
    pop();

    /// O1 ///
    translate(75, -35, 0)
    push();
    rotateY(frameCount * .01)
    torus(40, 10);
    pop();

    /// W ///
    translate(-390, 120, 0)
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();

    translate(20,0,0)
    push();
    rotateZ(.52);
    box(20,90,20);
    pop();

    translate(35,0,0)
    push();
    rotateZ(2.61);
    box(20,90,20);
    pop();

    translate(20,0,0)
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();

    /// O2 ////
    translate(65, 0, 0)
    push();
    rotateY(frameCount * .01)
    torus(40, 10);
    pop();

    /// R ///
    translate(65,0,0)
    push();
    rotateY(frameCount * .01)
    box(20,90,20)
    pop();

    translate(25, -25, 0)
    push();
    rotateZ(2.36)
    box(15, 45, 10)
    pop();

    translate(0, 20, 0)
    push();
    rotateZ(.79)
    box(15, 45, 10)
    pop();

    translate(5,25,0)
    push();
    rotateZ(2.36)
    box(15, 50, 10)
    pop();

    /// L3 ///
    translate(45,-20,0)
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();

    translate(30, 35, 0)
    push();
    rotateX(frameCount * 0.01);
    box(60, 20, 20);
    pop();

    /// D ///
    translate(60, -35, 0)
    push();
    rotateY(frameCount * 0.01);
    box(20,90,20);
    pop();

    translate(30,-20,0)
    push();
    rotateZ(2.36)
    box(15, 65, 15)
    pop();

    translate(0,40,0)
    push();
    rotateZ(.79)
    box(15, 65, 15)
    pop();
  }
