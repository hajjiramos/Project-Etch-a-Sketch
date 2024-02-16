// -- Sketch Pad Area --//
const widthAndHeight = 600;
    const sketchPadArea = document.querySelector('#container');    
    sketchPadArea.style.width = `${widthAndHeight}px`;
    sketchPadArea.style.height = `${widthAndHeight}px`;        


// -- Function to Load default grids and change grid size --//
document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
    
    const btnGrid = document.querySelector('#btnGrid');
        btnGrid.addEventListener('click', () => {
            let userInput = parseInt(prompt ("Enter number of grids:"));
            while (userInput < 1 || userInput > 100) {
                alert ('Enter only number from 1 to 100');
                userInput = parseInt(prompt ("Enter number of grids:"));
            }
            let oldGrid = document.querySelectorAll('#container>div');
                oldGrid.forEach((cell) => {
                    sketchPadArea.removeChild(cell);
                })
            createGrid(userInput);
        });   

});


// -- Function to create square grids --//
function createGrid(grid) {

    const numOfSquare = (grid * grid);
    const widthOrHeight = `${(widthAndHeight / grid)-2}px`

    const diplayGridSize = document.getElementById('#displayGridSize');
        displayGridSize.textContent = `${grid} x ${grid}`;
                   
    for (let i=0; i<numOfSquare; i++) {
        const cell = document.createElement('div');
            cell.style.width = widthOrHeight;
            cell.style.height = widthOrHeight;
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "purple";
            });         
            sketchPadArea.appendChild(cell);
    }
}


// -- Function to Clear the board
const btnClearBoard = document.querySelector('#clearBoard');
    btnClearBoard.addEventListener('click', () => {
        const cells = document.querySelectorAll('#container>div');
            cells.forEach((cell) => {
                cell.style.backgroundColor = "white";
            });
    });




// -- Function to Call RANDOM color change when button clicked --//
const randomColor = document.querySelector('#randomColor');
    randomColor.addEventListener('click', () => {
        const cells = document.querySelectorAll('#container>div');
            cells.forEach((cell) => {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = colorChange();
                });
            });
    });


// -- Function to Change to RANDOM colors when mouse over grids --//
function colorChange() {
    let color = [];
    for (let i=0; i<3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
    
}

// -- Function to use BLACK color when button clicked --//
const blackColor = document.querySelector('#blackColor');
    blackColor.addEventListener('click', () => {
        const cells = document.querySelectorAll('#container>div');
            cells.forEach((cell) => {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = "black";
                });
            });
    });



// -- Function to DARKEN color when button clicked --//
const darkenColor = document.querySelector('#darkenColor');
    darkenColor.addEventListener('click', () => {
        const cells = document.querySelectorAll('#container>div');
            cells.forEach((cell) => {
                let colorR = Math.floor(Math.random() * 256);
                let colorG = Math.floor(Math.random() * 256);
                let colorB = Math.floor(Math.random() * 256);
                
                cell.addEventListener('mouseover', () => {
                    let mouseOver = 0;
                    if (mouseOver <10){
                        cell.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
                        colorR -=colorR/10;
                        colorG -=colorG/10;
                        colorB -=colorB/10;
                        mouseOver++;
                        }
                    });   
                });
            });
    



// -- Function to ERASE color when button clicked --//
const eraseColor = document.querySelector('#eraseColor');
    eraseColor.addEventListener('click', () => {
        const cells = document.querySelectorAll('#container>div');
            cells.forEach((cell) => {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = "white";
                });
            });
    });
