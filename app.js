let spider = document.getElementById("spider");
let leftPosition = 100 ;

window.addEventListener("keydown",function (event){
    console.log("test",event.keyCode);
    if(event.keyCode=== 65){
      spider.src = "https://www.fightersgeneration.com/characters3/spidet-webball.gif";
      setTimeout(function(){
      spider.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
      },2000);
      }
    if (event.keyCode === 39 && leftPosition < 950) {
        leftPosition += 50 ;
        spider.style.left = `${leftPosition}px`;
    }
    if (event.keyCode === 37 && leftPosition > 0) {
        leftPosition -= 20 ;
        spider.style.left = `${leftPosition}px`;
    }
});







let rio = document.getElementById("rio");
let rightPosition = 100 ;

window.addEventListener("keydown",function (event){
    console.log("test",event.keyCode);
    if(event.keyCode=== 76){
      rio.src = "https://www.fightersgeneration.com/characters3/ryu-blackhadou.gif"
          // ;
      rio.style.width = `200px`;
      setTimeout(function(){
      rio.src = "https://www.fightersgeneration.com/characters3/ryu-walkf.gif";
      },2000);
      }
    if (event.keyCode === 39 && leftPosition < 950) {
        leftPosition += 50 ;
      rio.style.left = `${leftPosition}px`;
    }
    if (event.keyCode === 37 && leftPosition > 0) {
        leftPosition -= 20 ;
        rio.style.left = `${leftPosition}px`;
    }
});