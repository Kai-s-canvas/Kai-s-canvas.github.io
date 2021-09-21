document.addEventListener('DOMContentLoaded', () => {
  
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    widthDist = 10

    curPos = 0;

    squares[curPos].style.background = "rgba(250,250,250,0.5)"
    
    

    function control(i) {
        if(i.keyCode === 37) {
          console.log("37")
        } else if (i.keyCode === 38) {
          console.log("38")
        } else if (i.keyCode === 39) {
          console.log("39")
        } else if (i.keyCode === 40) {
          console.log("40")
        }
      }
      document.addEventListener('keyup', control)
    
}
)