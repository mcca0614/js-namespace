var MCCA0614= {
    init: function () {
        console.log("script in MCCA0614 called");
        var div = document.createElement("div");
      

        div.className = "box";
        div.textContent = "MCCA0614";

        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", click);
        div.addEventListener("mouseover", hover);
        div.addEventListener("mouseout", hover);

        function hover(ev) {
            this.classList.toggle("highlight");
        }

        function click(ev) {

        this.style.backgroundColor = "pink";
        this.style.borderColor = "yellow";
            
        
            }

        }

    }