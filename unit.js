class Unit {
    constructor(type, health, stamina) { //заменила distance
      this.type = type;
      this.health = this.maxHealth = health;
      this.stamina = this.maxStamina = stamina; //заменила distance
    }
    
    createUnit() {
      let div = document.createElement('div');
      div.className = 'unit';
      let divHealth = document.createElement('div');
      divHealth.className = 'health';
      divHealth.innerHTML = "<strong>Health</strong>";
      divHealth.style.width = `${this.health}%`;
      let divStamina = document.createElement('div');
      divStamina.className = 'stamina';
      divStamina.innerHTML = "<strong>Stamina</strong>";
      divStamina.style.width = `${this.stamina}%`;
      let p = document.createElement('p');
      p.className = 'character';
      p.innerHTML = `${this.type}`;
      let divImg = document.createElement('div');
      divImg.className = 'pic';
      let img = document.createElement('img');
      img.className = 'img';
      const pictures = {
          Infantryman:  'images/infantryman.png',
          Pilot: 'images/pilot.png',
          Sniper: 'images/sniper.png',
      }
      img.src = `${pictures[this.type]}`;
      

      document.body.append(div);
      div.appendChild(divHealth);
      div.appendChild(divStamina);
      div.appendChild(p);
      div.appendChild(divImg);
      divImg.appendChild(img);
    }

    isReadyToMove() {
      return this.stamina > 0; //заменила distance
    }
  
    isReadyToFight() {
      return this.health > 0;
    }
  
    restore() {
      this.health = this.maxHealth;
      this.stamina = this.stamina; //заменила distance
    }
  
    clone() {
      return new Unit(this.type, this.maxHealth, this.maxstamina); //заменила distance
    }
  }