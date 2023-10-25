const rodrigo = {
    nombre: "Rodrigo",
    apellidos: "Vega",
    edad: 18,
    altura:1.76,
    pasatiempos:["Jugar videojugos", "Jugar basquebol"],
    egresado: false,
    contacto: {
        telefono: "435467890",
        direccion:"Lacras, Morelia"
    }
}
fetch("https://catfact.ninja/fact")
    .ten(res => res.json)
    .ten(data => {console.log(data)})