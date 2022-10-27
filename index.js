class Usuario {
    constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
    }

    getFullName(){
        return (`Su nombre completo es: ${this.nombre} ${this.apellido}`);
    }
    addMascota(nombreMascota){
        return(this.mascotas.push(nombreMascota))
    }
    countMascotas(){
        return(`las mascotas de ${this.nombre} son : ${this.mascotas.length}`);
    }
    addBook(nombreLibro, autorLibro){
return(this.libros.push({nombreLibro, autorLibro}))   
}
    getBookNames(){
const mapNombreLibros = this.libros.map(libro => libro.nombreLibro) 
console.log(`${this.nombre} ${this.apellido} posee estos libros en su biblioteca ${mapNombreLibros}`);
    }
}

const prueba = new Usuario("Nahuel", "Berrutti", [], [])
console.log(prueba.getFullName());
prueba.addMascota("lucy")
prueba.addMascota("max")
prueba.addMascota("morita")
prueba.addMascota("duque")
console.log(prueba.countMascotas());
prueba.addBook("El sapo ruperto", "Roy berocay")
prueba.addBook("Los cazaventura", "Susana Olaondo")
prueba.getBookNames()

