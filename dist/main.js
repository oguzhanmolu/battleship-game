(()=>{"use strict";class t{static createGameBoard(t){for(let e=0;e<100;e++){const o=document.createElement("div");o.classList.add("grid"),o.textContent=e,t.appendChild(o)}}}class e{constructor(){}static createModalGameBoard(){const e=document.getElementById("modal-game-board");e.classList.add("game-board"),t.createGameBoard(e)}static switchShipRotation(){document.addEventListener("keydown",(t=>{}))}static checkIsShipDeployable(t,e,o){const r=t+e-1;return"vertical"===o&&t+10*e-10<=99||"horizontal"===o&&t<10&&t.toString().length===r.toString().length||"horizontal"===o&&t.toString().split("")[0]===r.toString().split("")[0]}static setGridColor(t,e,o,r){const a=document.getElementById("modal-game-board");for(let i=1;i<e;i++){let e;e="horizontal"===o?t+i:t+10*i,a.childNodes[t].style.backgroundColor=r,a.childNodes[e].style.backgroundColor=r}}static highlightGridOnHover(t,e){document.querySelectorAll(".grid").forEach((o=>{o.addEventListener("mouseover",(()=>{const r=Number(o.textContent);this.checkIsShipDeployable(r,t,e)&&this.setGridColor(r,t,e,"rgba(0,0,0,.5)")})),o.addEventListener("mouseout",(()=>{const r=Number(o.textContent);this.checkIsShipDeployable(r,t,e)&&this.setGridColor(r,t,e,"white")}))}))}}e.createModalGameBoard(),e.highlightGridOnHover(2,"vertical")})();