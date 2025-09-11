function Laptop(merk, prosesor, ram) {
  this.merk = merk;
  this.prosesor = prosesor;
  this.ram = ram;
  this.info = function() {
    return "Laptop " + this.merk + " dengan prosesor " + this.prosesor + " dan RAM " + this.ram + "GB";
  };
}

let asus = new Laptop("Asus", "Intel i5", 8);
let acer = new Laptop("Acer", "AMD Ryzen 7", 16);

console.log(asus.info());
console.log(acer.info());
