/***********************************************************************************
	Rooms Of My House
	by Jingyi Zhao

	Template:

	 Add custom drawing code to drawSplash(), drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	 Add gameroom.png, kitchen.png, office.png, restroom.png, bedroom.png, livingroom.png
------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing variables for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/livingroom.png');
  images[1] = loadImage('assets/gameroom.png');
  images[2] = loadImage('assets/kitchen.png');
  images[3] = loadImage('assets/office.png');
  images[4] = loadImage('assets/restroom.png');
  images[5] = loadImage('assets/bedroom.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(40);

  // set to one for startup
  drawFunction = drawLivingroom;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(255,255,224);

  // will call your state machine function
  drawFunction();
}


//-- drawOne() will draw the image at index 0 from the array
drawLivingroom = function() {
   image(images[0],width/2, height/2);

   fill(0,0,0);
   text("Livingroom", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawGameroom = function() {
   image(images[1],width/2, height/2);

   fill(240,120,0);
   text("Gameroom", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawKitchen = function() {
   image(images[2],width/2, height/2);

   fill(40,230,120);
   text("Kitchen", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawOffice = function() {
   image(images[3],width/2, height/2);

   fill(0,128,128);
   text("Office", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawRestroom = function() {
   image(images[4],width/2, height/2);

   fill(230,50,50);
   text("Restroom", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawBedroom = function() {
   image(images[5],width/2, height/2);

   fill(218,165,32);
   text("Bedroom", width/2, height - gTextOffset);
}


// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawLivingroom ) {
    if( keyCode === LEFT_ARROW ) {
        drawFunction = drawBedroom;
    }

  if( key === '1' ) {
  	drawFunction = drawGameroom;
  }
  else if( key === '2' ) {
  	drawFunction = drawKitchen;
  }
  else if( key === '3' ) {
  	drawFunction = drawOffice;
  }
  else if( key === '4' ) {
  	drawFunction = drawRestroom;
  }
  else if( key === '5' ) {
  	drawFunction = drawBedroom;
  }

  else if( key === 's' ) {
    drawFunction = drawLivingroom;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawOne;
  }
}