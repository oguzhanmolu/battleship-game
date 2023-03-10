(()=>{"use strict";class t{static createGameBoard(t){for(let e=0;e<100;e++){const o=document.createElement("div");o.classList.add("grid"),o.textContent=e,t.appendChild(o)}}static isShipDeployable(t,e,o){const r=document.getElementById("player-game-board"),a=t+e-1;let n=[t];for(let r=1;r<e;r++){let e;e="horizontal"===o?t+r:t+10*r,n.push(e)}return!(n.some((t=>t>99||"black"===r.childNodes[t].style.backgroundColor))||"horizontal"===o&&t<10&&t.toString().length!==a.toString().length||"horizontal"===o&&t>9&&t.toString().split("")[0]!==a.toString().split("")[0])}}class e{constructor(t,e){this.shipType=t,this.length=e,this.rotation="vertical"}static createShipArray(){return[new e("submarine",2),new e("destroyer",3),new e("destroyer",3),new e("cruiser",4),new e("carrier",5)]}}const o=e.createShipArray();class r{static createPlayerGameBoard(){const e=document.getElementById("player-game-board");e.classList.add("game-board"),t.createGameBoard(e)}static deployShip(){const e=document.querySelectorAll(".grid");this.gridHoverEffects(),e.forEach((e=>e.addEventListener("click",(()=>{const r=Number(e.textContent);o[0]&&t.isShipDeployable(r,o[0].length,o[0].rotation)&&(this.setGridColor(r,o[0].length,o[0].rotation,"black","white"),o.shift(),o[0]&&this.setShipInfo(o[0].shipType))}))))}static switchShipRotation(){document.getElementById("rotate-button").addEventListener("click",(()=>{o.map((t=>"vertical"===t.rotation?t.rotation="horizontal":t.rotation="vertical"))}))}static setGridColor(t,e,o,r,a){const n=document.getElementById("player-game-board");for(let l=1;l<e;l++){let e;e="horizontal"===o?t+l:t+10*l,n.childNodes[t].style.backgroundColor=r,n.childNodes[e].style.backgroundColor=r,a&&(n.childNodes[t].style.color=a),n.childNodes[e].style.color=a}}static setShipInfo(t){let e=document.querySelector(".ship-info-text"),o=document.querySelector(".ship-img");e.textContent=t[0].toUpperCase()+t.slice(1),o.src=`/dist/img/${t}.png`,o.alt=`${t} image`}static endDeploymentPhase(){const t=document.querySelectorAll(".grid"),e=document.querySelector(".gameboard-main"),r=document.getElementById("modal-ship-info"),a=document.getElementById("player-game-board"),n=document.getElementById("computer-game-board"),l=document.getElementById("rotate-button"),i=document.getElementById("game-title");t.forEach((t=>t.addEventListener("click",(()=>{if(0===o.length){for(let t=0;t<100;t++)"black"!==a.childNodes[t].style.backgroundColor&&(a.childNodes[t].textContent="");i.style.display="block",n.style.display="grid",e.style.transform="translate(-100%)",r.style.display="none",l.style.display="none"}}))))}static gridHoverEffects(){const e=document.querySelectorAll(".grid");e.forEach((e=>{e.addEventListener("mouseover",(()=>{const r=Number(e.textContent);o[0]&&t.isShipDeployable(r,o[0].length,o[0].rotation)&&this.setGridColor(r,o[0].length,o[0].rotation,"gray")}))})),e.forEach((e=>e.addEventListener("mouseout",(()=>{const r=Number(e.textContent);o[0]&&t.isShipDeployable(r,o[0].length,o[0].rotation)&&this.setGridColor(r,o[0].length,o[0].rotation,"white")}))))}}r.createPlayerGameBoard(),r.deployShip(),r.switchShipRotation(),r.endDeploymentPhase(),class{static createComputerGameBoard(){const e=document.getElementById("computer-game-board");e.classList.add("game-board"),t.createGameBoard(e);for(let t=0;t<100;t++)e.childNodes[t].textContent=""}}.createComputerGameBoard()})();