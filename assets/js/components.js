class typeBar extends HTMLElement{
	
	constructor(){
		super();
		const shadow =  this.attachShadow({mode:'open'});
		shadow.appendChild(this.build());
		shadow.appendChild(this.styles());
		}
	build(){
		const componentRoot = document.createElement("div");
		componentRoot.setAttribute("class","typebar-root-container");

		const boxStat = document.createElement("div");
		boxStat.setAttribute("class","boxStat-container");

		const nameStat = document.createElement("span");
		nameStat.textContent = this.getAttribute("nameStat");

		const valueStat = document.createElement("span");
		valueStat.textContent = this.getAttribute("valueStat");

		const rangeBar = document.createElement("div");
		rangeBar.setAttribute("class","rangebar-container");

		const valueBar = document.createElement("div");
		valueBar.setAttribute("class",(this.getAttribute("type"))+" valuebar-container");
		valueBar.style.width = (this.getAttribute("valueStat"))+"px";

		rangeBar.appendChild(valueBar);
		boxStat.appendChild(nameStat);
		boxStat.appendChild(valueStat);
		componentRoot.appendChild(boxStat);
		componentRoot.appendChild(rangeBar);

		return componentRoot;

	}
	styles(){
		const style = document.createElement("style");
		style.textContent =`
		 
		.typebar-root-container {
  			display: flex;
			flex-direction: row;
  			height: 30px;
			justify-content: space-between;
			align-items: baseline;
		}
		.rangebar-container {
  			display: flex;
			flex-direction: row;
  			height: 10px;
			width: 150px;
  			align-items: left;
			background-color: #e1ecf5;
			border-radius: 1rem;
		}
		.valuebar-container {
  			height: 10px;
  			align-items: left;
			border-radius: 1rem;
			
			
		}
		.boxStat-container {
			display: flex;
  			height: 20px;
			width: 160px;
			justify-content: space-between;
		}
		.normal {
    background-color: #a6a877;
}

.grass {
    background-color: #77c850;
}

.fire {
    background-color: #ee7f30;
}

.water {
    background-color: #678fee;
}

.electric {
    background-color: #f7cf2e;
}

.ice {
    background-color: #98d5d7;
}

.ground {
    background-color: #dfbf69;
}

.flying {
    background-color: #a98ff0;
}

.poison {
    background-color: #a040a0;
}

.fighting {
    background-color: #bf3029;
}

.psychic {
    background-color: #f65687;
}

.dark {
    background-color: #725847;
}

.rock {
    background-color: #b8a137;
}

.bug {
    background-color: #a8b720;
}

.ghost {
    background-color: #6e5896;
}

.steel {
    background-color: #b9b7cf;
}

.dragon {
    background-color: #6f38f6;
}

.fairy {
    background-color: #f9aec7;
}

	`;
	return style;
		
	}

}	
customElements.define('card-stats-bar', typeBar);
//background-color: #187d38;
//acrescentar no arquivo detalhe.html =  <script src="../js-developer-pokedex/assets/js/components.js" defer></script>																																																																																																																																				