let exampleShader;

function preload() {
  exampleShader = loadShader('example.vert', 'example.frag');
}

//globals


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);
  noStroke();
  
}

let startPoint = [0.5, 0.5];


function draw() {
  background(1);  
  shader(exampleShader);

  //mouse data
  let normMouseX = map(mouseX, 0, width, 0, 1);
  let normMouseY = map(mouseY, 0, height, 1, 0);
  
  let direction = [normMouseX - startPoint[0], normMouseY - startPoint[1]];
  let distToMouse = Math.sqrt(direction[0] * direction[0] + direction[1] * direction[1]);

    if (distToMouse > 0.001) {
        let moveSpeed = distToMouse * 0.02;
        
        let step = [direction[0] / distToMouse * moveSpeed, direction[1] / distToMouse * moveSpeed];

        if (distToMouse < moveSpeed) {
            startPoint = [normMouseX, normMouseY];
        } else {
            startPoint[0] += step[0];
            startPoint[1] += step[1];
        }
  }

  //passing uniforms
  exampleShader.setUniform('u_time', millis());
  exampleShader.setUniform('u_resolution', [width, height]);
  exampleShader.setUniform('u_mouseXY', [map(mouseX, 0, width, 0, 1), map(mouseY, 0, height, 1, 0)]);
  exampleShader.setUniform('u_mouseDist', startPoint);

  //pass vertex information to shader
  rect(0, 0, width, height);
}
