(()=>{"use strict";class t{static createGameBoard(t){for(let e=0;e<100;e++){const o=document.createElement("div");o.classList.add("grid"),o.textContent=e,t.appendChild(o)}}static isShipDeployable(t,e,o){const i=t+e-1;return"vertical"===o&&t+10*e-10<=99||"horizontal"===o&&t<10&&t.toString().length===i.toString().length||"horizontal"===o&&t.toString().split("")[0]===i.toString().split("")[0]}}class e{constructor(t){this.rotation="xd;"}static createModalGameBoard(){const e=document.getElementById("modal-game-board");e.classList.add("game-board"),t.createGameBoard(e)}static setShipRotation(){this.rotation="vertical"}static switchShipRotation(){document.getElementById("rotate-button").addEventListener("click",(()=>{console.log("test")}))}static setGridColor(t,e,o,i){const a=document.getElementById("modal-game-board");for(let r=1;r<e;r++){let e;e="horizontal"===o?t+r:t+10*r,a.childNodes[t].style.backgroundColor=i,a.childNodes[e].style.backgroundColor=i}}static highlightGridOnHover(e,o){document.querySelectorAll(".grid").forEach((i=>{i.addEventListener("mouseover",(()=>{const a=Number(i.textContent);t.isShipDeployable(a,e,o)&&this.setGridColor(a,e,o,"rgba(0,0,0,.5)")})),i.addEventListener("mouseout",(()=>{const a=Number(i.textContent);t.isShipDeployable(a,e,o)&&this.setGridColor(a,e,o,"white")}))}))}static deployShip(){}}e.createModalGameBoard(),e.highlightGridOnHover(2,"vertical"),e.switchShipRotation()})();