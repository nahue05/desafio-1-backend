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
    this.mascotas.push(nombreMascota)
    }
    countMascotas(){
        return(`las mascotas de ${this.nombre} son : ${this.mascotas.length}`);
    }
    addBook(nombreLibro, autorLibro){
this.libros.push({nombreLibro, autorLibro}) 
}
    getBookNames(){
const mapNombreLibros = this.libros.map(libro => libro.nombreLibro) 
return(mapNombreLibros);;
    }
}

const prueba = new Usuario("Nahuel", "Berrutti",[], [])
console.log(prueba.getFullName());
prueba.addMascota("lucy")
prueba.addMascota("max")
prueba.addMascota("morita")
prueba.addMascota("duque")
console.log(prueba.countMascotas());
prueba.addBook( "los Cazaventura", "Susana Olaondo")
prueba.addBook( "El sapo Ruperto", "Roy Berocay")
console.log(prueba.getBookNames());

