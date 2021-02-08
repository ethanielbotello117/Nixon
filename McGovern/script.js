

html.onclick = function(event){
        let mainCoords = this.getBoundingClientRect();
        let errorCoords = {
            top: event.clientY - mainCoords.top - html.clientTop - ewwor.clientHeight/2,
            left: event.clientX - mainCoords.left - html.clientLeft - ewwor.clientWidth/2,
        }

        if(errorCoords.top < 0){
            errorCoords.top = 0;
        }
        if(errorCoords.left < 0){
            errorCoords.left = 0;
        }

        if(errorCoords.left + ewwor.clientWidth > html.clientWidth){
            errorCoords.left = html.clientWidth - ewwor.clientWidth;
        }

        if(errorCoords.top + ewwor.clientHeight > html.clientHeight){
            errorCoords.top = html.clientHeight - ewwor.clientHeight;
        }

        ewwor.style.left = errorCoords.left + 'px';
        ewwor.style.top = errorCoords.top + 'px';


        let timer = setInterval(time, 1)
        let poggers = setInterval(pog, 1)

    function time() {
        let add = document.createElement("div");
        main.appendChild(add);
    }

    function pog(){
        let lol = document.createElement("section");
        main.appendChild(lol);
    }
}