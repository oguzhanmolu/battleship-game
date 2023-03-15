(()=>{"use strict";class e{constructor(e,t){this.shipType=e,this.length=t,this.health=t,this.rotation="vertical",this.isDeployed=!1,this.isSunk=!1,this.coordinates=[],this.playerShips=[],this.computerShips=[]}static createShipArray(){return[new e("submarine",2),new e("destroyer",3),new e("destroyer",3),new e("cruiser",4),new e("carrier",5)]}static setPlayerShips(){return this.playerShips=this.createShipArray()}static getPlayerShips(){return this.playerShips}static getFirstDeployablePlayerShip(){return this.playerShips.filter((e=>!1===e.isDeployed))[0]}static setComputerShips(){return this.computerShips=this.createShipArray()}static getComputerShips(){return this.computerShips}static switchShipRotation(){const e=document.querySelector(".rotate-button"),t=this.getPlayerShips();e.addEventListener("click",(()=>{t.map((e=>"vertical"===e.rotation?e.rotation="horizontal":e.rotation="vertical"))}))}static setShipCoordinates(e,t,o){let i=[e];for(let s=1;s<t;s++){let t;t="horizontal"===o?e+s:e+10*s,i.push(t)}return i}}class t{static createGameBoard(e){for(let t=0;t<100;t++){const o=document.createElement("div");o.classList.add("grid"),o.setAttribute("id",`${t}`),o.textContent=t,o.style.backgroundColor="white",e.appendChild(o)}}static isShipDeployable(t,o,i,s){const r=o+i-1,a=e.setShipCoordinates(o,i,s),l=t.flatMap((e=>e.coordinates));return!(a.some((e=>e>99||l.includes(e)))||"horizontal"===s&&o<10&&o.toString().length!==r.toString().length||"horizontal"===s&&o>9&&o.toString().split("")[0]!==r.toString().split("")[0])}static setGridColor(t,o,i,s,r,a){e.setShipCoordinates(o,i,s).forEach((e=>{t.childNodes[e].style.background=r,a&&(t.childNodes[e].style.color=a)}))}static deployShipsRandomly(o,i,s){i.forEach((r=>{for(;!1===r.isDeployed;){let a=Math.floor(101*Math.random()),l=0===Math.floor(2*Math.random())?"vertical":"horizontal";t.isShipDeployable(i,a,r.length,l)&&(r.isDeployed=!0,r.coordinates=e.setShipCoordinates(a,r.length,l),!0===s&&this.setGridColor(o,a,r.length,l,"black","white"))}}))}static changeToPlayPhase(){const e=document.getElementById("modal-ship-info"),t=document.querySelectorAll(".gameboard-title"),o=document.querySelector(".rotate-button"),i=document.querySelector(".random-deploy-button"),s=document.getElementById("player-gameboard-main"),r=document.getElementById("player-game-board"),a=document.getElementById("computer-gameboard-main"),l=document.querySelector(".player-remaining-ships");for(let e=0;e<100;e++)"black"!==r.childNodes[e].style.backgroundColor&&(r.childNodes[e].textContent="");t.forEach((e=>e.style.display="block")),s.style.transform="translate(-100%)",s.style.animation="slide-left 1s",a.style.display="flex",l.style.display="block",a.style.flexDirection="column",e.style.display="none",o.style.display="none",i.style.display="none"}}class o{static createPlayerGameBoard(){const e=document.getElementById("player-game-board");e.classList.add("game-board"),t.createGameBoard(e)}static setNextShipInfo(){const t=e.getFirstDeployablePlayerShip();let o=document.querySelector(".ship-info-text"),i=document.querySelector(".ship-img");t&&(o.textContent=t.shipType[0].toUpperCase()+t.shipType.slice(1),i.src=`img/${t.shipType}.png`,i.alt=`${t.shipType} image`)}static deployPlayerShipsRandomly(){const o=document.querySelector(".random-deploy-button"),i=document.getElementById("player-game-board"),s=e.getPlayerShips();o.addEventListener("click",(()=>t.deployShipsRandomly(i,s,!0)))}static gridHoverEffects(){const o=document.querySelectorAll(".grid"),i=document.getElementById("player-game-board");o.forEach((o=>{o.addEventListener("mouseover",(()=>{const s=Number(o.id),r=e.getFirstDeployablePlayerShip(),a=e.getPlayerShips();r&&t.isShipDeployable(a,s,r.length,r.rotation)&&t.setGridColor(i,s,r.length,r.rotation,"gray")}))})),o.forEach((o=>o.addEventListener("mouseout",(()=>{const s=Number(o.id),r=e.getFirstDeployablePlayerShip(),a=e.getPlayerShips();r&&t.isShipDeployable(a,s,r.length,r.rotation)&&t.setGridColor(i,s,r.length,r.rotation,"white")}))))}static deployShip(){const o=document.querySelectorAll(".grid"),i=document.getElementById("player-game-board"),s=e.getPlayerShips();o.forEach((o=>o.addEventListener("click",(()=>{const r=Number(o.id),a=e.getFirstDeployablePlayerShip();a&&t.isShipDeployable(s,r,a.length,a.rotation)&&(t.setGridColor(i,r,a.length,a.rotation,"black","white"),a.isDeployed=!0,a.coordinates=e.setShipCoordinates(r,a.length,a.rotation),this.setNextShipInfo())}))))}static endDeploymentPhase(){const o=document.querySelectorAll(".grid");document.querySelector(".random-deploy-button").addEventListener("click",(()=>t.changeToPlayPhase())),o.forEach((o=>o.addEventListener("click",(()=>{e.getFirstDeployablePlayerShip()||t.changeToPlayPhase()}))))}}class i{constructor(){this.isGameFinished=!1}static checkIsGameFinished(){const t=e.getPlayerShips().filter((e=>!1===e.isSunk)).length;if(0===e.getComputerShips().filter((e=>!1===e.isSunk)).length)s.updateAnnouncementText("PLAYER HAS WON!","black"),this.isGameFinished=!0;else if(0===t){const t=document.getElementById("computer-game-board");e.getComputerShips().flatMap((e=>e.coordinates)).forEach((e=>{t.childNodes[e].style.backgroundColor="black",t.childNodes[e].style.color="white",t.childNodes[e].textContent=e})),s.updateAnnouncementText("COMPUTER HAS WON!","black"),this.isGameFinished=!0}}}class s{static createComputerGameBoard(){const e=document.getElementById("computer-game-board");e.classList.add("game-board"),t.createGameBoard(e);for(let t=0;t<100;t++)e.childNodes[t].textContent=""}static deployComputerShips(){const o=document.getElementById("computer-game-board"),i=e.getComputerShips();t.deployShipsRandomly(o,i,!1)}static checkIsHit(e,t,o,i,s){if(o.includes(e)){const o=t.find((t=>t.coordinates.includes(e)));o.coordinates.splice(o.coordinates.indexOf(e),1),o.health--,0===o.health&&(o.isSunk=!0),this.highlightHitGrid(i,e,!0),s&&this.updateAnnouncementText("HIT!","red")}else this.highlightHitGrid(i,e,!1),s&&this.updateAnnouncementText("MISS!","#2B65EC")}static bombardGameFieldOnClick(){const t=document.getElementById("computer-game-board"),o=document.getElementById("player-game-board");let s=[];for(let e=0;e<100;e++)s.push(e);t.childNodes.forEach((r=>r.addEventListener("click",(a=>{if("white"!==r.style.backgroundColor||i.isGameFinished)return;const l=Number(a.target.id),n=e.getComputerShips(),c=n.flatMap((e=>e.coordinates));this.checkIsHit(l,n,c,t,!0);const d=e.getPlayerShips(),h=d.flatMap((e=>e.coordinates)),p=s[Math.floor(Math.random()*s.length)];s.splice(s.indexOf(p),1),this.checkIsHit(p,d,h,o,!1),this.updateShipCount(),i.checkIsGameFinished()}))))}static updateShipCount(){const t=document.querySelector(".player-remaining-ships"),o=document.querySelector(".computer-remaining-ships"),i=e.getPlayerShips().filter((e=>!1===e.isSunk)).length,s=e.getComputerShips().filter((e=>!1===e.isSunk)).length;t.textContent=`${i} SHIPS LEFT`,o.textContent=`${s} SHIPS LEFT`}static highlightHitGrid(e,t,o){const i=e.childNodes[t];!0===o?(i.style.backgroundColor="red",i.textContent=t):i.style.backgroundColor="#2B65EC"}static updateAnnouncementText(e,t){const o=document.getElementById("hit-info-text");o.style.display="block",o.textContent=e,o.style.color=t}}e.setPlayerShips(),e.setComputerShips(),e.switchShipRotation(),o.createPlayerGameBoard(),o.deployPlayerShipsRandomly(),o.gridHoverEffects(),o.deployShip(),o.endDeploymentPhase(),s.createComputerGameBoard(),s.deployComputerShips(),s.bombardGameFieldOnClick()})();