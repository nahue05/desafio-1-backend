class Usuario {
    constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
    }

    getFullName(){
        console.log(`Su nombre completo es: ${this.nombre} ${this.apellido}`);
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }
    countMascotas(){
        console.log(`las mascotas de ${this.nombre}: son ${this.mascotas.lenght}`);
    }
    addBook(nombreLibro, autorLibro){
        this.libros.push([{nombre: nombreLibro, autor: autorLibro}]);
    }
    getBookNames(){
        return this.libros.map((libros) => libros.nombre)
    }
}

