
class Character {
  constructor(_name, _species, _status, _gender, _img) {

    this.name = _name;
    this.species = _species;
    this.status = _status;
    this.gender = _gender;
    this.img = _img;

  }
  render() {
    let fatherDiv = document.querySelector("#id_row");
    fatherDiv.innerHTML += `
    <div class="card m-3" style="width: 19rem;">
                <img src="${this.img}" class="card-img-top" alt="...">
                <div class="card-body character-body  bg-dark">
                  <div class=" p-0  name text-white">${this.name}</div>
                  <p class="card-text pb-3 pt-3">Species <span style="color:orange;float:right">${this.species}</span></p>
                  <hr>
                  <p class="card-text pb-3 pt-3">Gender <span style="color:orange ;float:right">${this.gender}</span</p>
                  <hr>
                  <p class="card-text pb-3 pt-3 ">Status  <span style="color:orange ;float:right">${this.status}</span></p>
                  
                </div>
    </div>
        
        `
  }


}


