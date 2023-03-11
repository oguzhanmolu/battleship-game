(()=>{"use strict";class e{constructor(e,t){this.shipType=e,this.length=t,this.health=t,this.rotation="vertical",this.isDeployed=!1,this.isSunk=!1,this.coordinates=[],this.playerShips=[],this.computerShips=[]}static createShipArray(){return[new e("submarine",2),new e("destroyer",3),new e("destroyer",3),new e("cruiser",4),new e("carrier",5)]}static setPlayerShips(){return this.playerShips=this.createShipArray()}static getPlayerShips(){return this.playerShips}static getFirstDeployablePlayerShip(){return this.playerShips.filter((e=>!1===e.isDeployed))[0]}static setComputerShips(){return this.computerShips=this.createShipArray()}static getComputerShips(){return this.computerShips}static setShipCoordinates(e,t,o){let r=[e];for(let a=1;a<t;a++){let t;t="horizontal"===o?e+a:e+10*a,r.push(t)}return r}}class t{static createGameBoard(e){for(let t=0;t<100;t++){const o=document.createElement("div");o.classList.add("grid"),o.setAttribute("id",`${t}`),o.textContent=t,e.appendChild(o)}}static deployShipsRandomly(r,a){a.forEach((a=>{for(;!1===a.isDeployed;){let i=Math.floor(101*Math.random()),l=0===Math.floor(2*Math.random())?"vertical":"horizontal";t.isShipDeployable(r,i,a.length,l)&&(o.setGridColor(r,i,a.length,l,"black","white"),a.isDeployed=!0,a.coordinates=e.setShipCoordinates(i,a.length,l))}}))}static isShipDeployable(e,t,o,r){const a=t+o-1;let i=[t];for(let e=1;e<o;e++){let o;o="horizontal"===r?t+e:t+10*e,i.push(o)}return!(i.some((t=>t>99||"black"===e.childNodes[t].style.backgroundColor))||"horizontal"===r&&t<10&&t.toString().length!==a.toString().length||"horizontal"===r&&t>9&&t.toString().split("")[0]!==a.toString().split("")[0])}static changeToPlayPhase(){const o=document.getElementById("modal-ship-info"),r=document.querySelectorAll(".gameboard-title"),a=document.querySelector(".rotate-button"),i=document.querySelector(".random-deploy-button"),l=document.getElementById("player-gameboard-main"),s=document.getElementById("player-game-board"),n=document.getElementById("computer-gameboard-main"),d=document.getElementById("computer-game-board"),c=e.getComputerShips();for(let e=0;e<100;e++)"black"!==s.childNodes[e].style.backgroundColor&&(s.childNodes[e].textContent="");r.forEach((e=>e.style.display="block")),l.style.transform="translate(-100%)",l.style.animation="slide-left 1s",n.style.display="flex",n.style.flexDirection="column",o.style.display="none",a.style.display="none",i.style.display="none",t.deployShipsRandomly(d,c),console.log(e.getPlayerShips()),console.log(e.getComputerShips())}}class o{static createPlayerGameBoard(){const e=document.getElementById("player-game-board");e.classList.add("game-board"),t.createGameBoard(e)}static setGridColor(e,t,o,r,a,i){for(let l=1;l<o;l++){let o;o="horizontal"===r?t+l:t+10*l,e.childNodes[t].style.backgroundColor=a,e.childNodes[o].style.backgroundColor=a,i&&(e.childNodes[t].style.color=i),e.childNodes[o].style.color=i}}static setShipInfo(){const t=e.getFirstDeployablePlayerShip();let o=document.querySelector(".ship-info-text"),r=document.querySelector(".ship-img");t&&(o.textContent=t.shipType[0].toUpperCase()+t.shipType.slice(1),r.src=`/dist/img/${t.shipType}.png`,r.alt=`${t.shipType} image`)}static switchShipRotation(){const t=document.querySelector(".rotate-button"),o=e.getPlayerShips();t.addEventListener("click",(()=>{o.map((e=>"vertical"===e.rotation?e.rotation="horizontal":e.rotation="vertical"))}))}static deployPlayerShipsRandomly(){const o=document.querySelector(".random-deploy-button"),r=document.getElementById("player-game-board"),a=e.getPlayerShips();o.addEventListener("click",(()=>{t.deployShipsRandomly(r,a)}))}static deployShip(){const o=document.querySelectorAll(".grid"),r=document.getElementById("player-game-board");o.forEach((o=>o.addEventListener("click",(()=>{const a=Number(o.id),i=e.getFirstDeployablePlayerShip();i&&t.isShipDeployable(r,a,i.length,i.rotation)&&(this.setGridColor(r,a,i.length,i.rotation,"black","white"),i.isDeployed=!0,i.coordinates=e.setShipCoordinates(a,i.length,i.rotation),this.setShipInfo())}))))}static gridHoverEffects(){const o=document.querySelectorAll(".grid"),r=document.getElementById("player-game-board");o.forEach((o=>{o.addEventListener("mouseover",(()=>{const a=Number(o.id),i=e.getFirstDeployablePlayerShip();i&&t.isShipDeployable(r,a,i.length,i.rotation)&&this.setGridColor(r,a,i.length,i.rotation,"gray")}))})),o.forEach((o=>o.addEventListener("mouseout",(()=>{const a=Number(o.id),i=e.getFirstDeployablePlayerShip();i&&t.isShipDeployable(r,a,i.length,i.rotation)&&this.setGridColor(r,a,i.length,i.rotation,"white")}))))}static endDeploymentPhase(){const o=document.querySelectorAll(".grid");document.querySelector(".random-deploy-button").addEventListener("click",(()=>t.changeToPlayPhase())),o.forEach((o=>o.addEventListener("click",(()=>{e.getFirstDeployablePlayerShip()||t.changeToPlayPhase()}))))}}e.setPlayerShips(),e.setComputerShips(),o.createPlayerGameBoard(),o.deployPlayerShipsRandomly(),o.switchShipRotation(),o.gridHoverEffects(),o.deployShip(),o.endDeploymentPhase(),class{static createComputerGameBoard(){const e=document.getElementById("computer-game-board");e.classList.add("game-board"),t.createGameBoard(e);for(let t=0;t<100;t++)e.childNodes[t].textContent=""}}.createComputerGameBoard()})();