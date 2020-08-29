//First declare variables
let color = document.getElementById('colorPicker');
/* one weird behavior, if I added the .value to the variable here
it will not change later but if I added in the event addEventListener
it will change normally, why*/
let x;// used x and y as x axis and y axis
let y;
const pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function(e){
  e.preventDefault();
  makeGrid();
},{ once : true });/* I have read in developer.mozilla that third parameter
may not work, but it worked in my browser.*/

// add addEventListener for a click and callback the coloring function

pixelCanvas.addEventListener('click',function(event){
  console.log(event); // vor checking the results
  if(event.target.nodeName === 'TD'){
  event.target.style.backgroundColor = color.value;
  /* I tried to use the id for each cell but with no luck
  how can I do it with cell Id*/
}
});

function makeGrid(x, y) {
    /* I don't know why adding the variables outside then call it here
     the don't work so I add it this way*/
  x = document.getElementById('inputHeight');
  y = document.getElementById('inputWidth');
  // use for to build the rows first
  for (let i = 0 ; i < x.value; i++){
  /* in the guideline it's recommended to wrap for in if conditional statement
  but I didn't see a need here, was it needed?*/
  //everytime the i increase we add a row
    const rows = document.createElement('tr');
    //add id for each row,
    //rows.id = "row "+i;
    //then we will add it to the grid (appendChild)
    pixelCanvas.appendChild(rows);
  //we add another for loop to add the cells as it will go
  // through this loop to the end, then go back to the previous loop
    for (let j= 0; j < y.value; j++){
      const cells= document.createElement('td');
      cells.id= 'row '+ i + ' cell '+j;
  // add it to each row (appendChild)
      rows.appendChild(cells);
  }
}

}
/*when I refresh the page, the values I set before don't go back to
origanal values (height 1, width 1 color black), but if I resubmit it does*/
