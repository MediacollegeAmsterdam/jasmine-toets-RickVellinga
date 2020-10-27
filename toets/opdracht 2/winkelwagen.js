function Winkel(naam, studentId, cijfer, klas) {


function Winkelwagen() {
  let voorraad = 0;
  this.setVoorraad = function (aantal) {
    voorraad += aantal;
  }
}

function Items() {
  let items = item;
  this.getVoorraad = function () {
    return items;
  }
}

function Kleur() {
  let kleuren = kleur;
  this.getVoorraad = function () {
    return kleuren;
  }
}

function Maat() {
  let maat = maatItem;
  this.getVoorraad = function () {
    return maat;
  }
}

}

let winkel = new Winkel(10, 'Sneakers', 'Rood', 'L');
console.log(this.getVoorraad);
