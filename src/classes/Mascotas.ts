interface Mascota {

    nombre:string
    felicidad:number
    raza:string
    hambre:number
    vida:number
    cuidado: string | boolean // Lo puse como string o booleano porque el valor por defecto para true será 'cuidado' y todo valor que no sea ese va a ser tomado como false o 'descuidado'

}

export class Pet {
  readonly nombre:string = '' // el nombre lo colocamos como de sólo lectura para que no se pueda editar desde fuera, pero que se pueda utilizar para buscar por nombre con el getter
  private felicidad:number = 100
  private raza:string = ''
  private hambre: number = 100
  private vida: number = 100
  private cuidado: string | boolean = 'cuidado'
  constructor (
    { nombre, felicidad, raza, hambre, vida, cuidado } :
        {nombre:string, felicidad:number, raza: string, hambre:number, vida:number, cuidado:string}
  ) {
    this.nombre = nombre
    this.felicidad = felicidad
    this.raza = raza
    this.hambre = hambre
    this.vida = vida
    this.cuidado = cuidado.toLocaleLowerCase() === 'cuidado'
  }

  getPets ():Mascota {
    // Getter que nos trae todas las mascotas creadas
    return {
      nombre: this.nombre,
      felicidad: this.felicidad,
      raza: this.raza,
      hambre: this.hambre,
      vida: this.vida,
      cuidado: this.cuidado
    }
  }

  petCare (): string {
    // Setter que verifica si la mascota está bien cuidada o no y actualiza la clave a 'cuidado' o 'descuidado' según si cumple o no
    if (this.felicidad < 40 || this.hambre < 60) {
      this.petLifeReducer()
      this.cuidado = 'Descuidado'
      console.log(`Tu mascota ${this.nombre} está descuidado/a`)
      return `Tu mascota ${this.nombre} está descuidado/a`
    }
    this.cuidado = 'cuidado'
    console.log(`Tu mascota ${this.nombre} está bien cuidado/a. Sigue así!`)
    return `Tu mascota ${this.nombre} está bien cuidado/a. Sigue así!`
  }

  feedPet ():number | string {
    // Setter que funciona para actualizar el estado de hambre (hunger) de la mascota. Un número bajo significa que la mascota tiene hambre, por eso lo sumo

    // Si la mascota tiene 100 o más de nivel de hunger, su felicidad aumentará en 5 y su hunger en 20. Si su vida es menor o igual a 95, se curará 5.
    if (this.hambre >= 100) {
      if (this.vida <= 95) { this.vida += 5 }
      this.felicidad += 5
      this.hambre += 20
      console.log(`Alimentaste a ${this.nombre}. Ahora su nivel de hambre es: ${this.hambre} y recuperó 5 de vida, ahora tiene ${this.vida} HP`)
      return `Alimentaste a ${this.nombre}. Ahora su nivel de hambre es: ${this.hambre} y recuperó 5 de vida, ahora tiene ${this.vida} HP`
    }

    // Si la mascota tiene menos de 60 de hunger, perderá 5 de vida pero recuperará 20 de hunger
    if (this.hambre < 60) {
      this.petLifeReducer()
      this.hambre += 20
      console.log(`Alimentaste a ${this.nombre}. Ahora su nivel de hambre es de: ${this.hambre}.`)
      return `Alimentaste a ${this.nombre}. Ahora su nivel de hambre es de: ${this.hambre}.`
    }

    // Si la mascota tiene 150 o más de nivel de hambre, no podrás alimentarla.
    if (this.hambre >= 150) {
      console.log(`No puedes alimentar a ${this.nombre} porque está lleno/a. Hazlo/a jugar un poco`)
      return `No puedes alimentar a ${this.nombre} porque está lleno/a. Hazlo/a jugar un poco`
    }

    // Esta es la acción por defecto de la función de alimentar. Simplemente suma 20 puntos a hunger.
    this.hambre += 20
    console.log(`Alimentaste a ${this.nombre}. Ahora su nivel de hambre es de: ${this.hambre}`)
    return `Alimentaste a ${this.nombre}. Ahora su nivel de hambre es de: ${this.hambre}`
  }

  petPlay ():number | string {
    // Este método sirve para jugar con la mascota. Si el nivel de hambre está por debajo de 60, no va a querer jugar, perderá 5 de vida y 20 de felicidad
    if (this.hambre < 60) {
      this.petLifeReducer()
      console.log(`${this.nombre} no quiere jugar porque tiene hambre. Aliméntalo/a`)
      return `${this.nombre} no quiere jugar porque tiene hambre. Aliméntalo/a`
    }

    // Este es el camino por defecto, la mascota jugará y su hunger bajará 20 puntos pero aumentará su felicidad en 10
    this.hambre -= 20
    this.felicidad += 10
    console.log(`Jugaste con ${this.nombre}. Ahora está más alegre!`)
    return `Jugaste con ${this.nombre}. Ahora está más alegre!`
  }

  private petLifeReducer () {
    // Este método lo creé para no repetir el condicional de quitarle vida a la mascota. La idea es que si la mascota tiene menos de 10 de vida ya no se le quite más para que no muera.
    // Además incluí la parte de quitarle felicidad a la mascota ya que siempre que pierde vida también baja su felicidad.
    if (this.vida >= 10) { this.vida -= 5 }
    this.felicidad -= 20
  }
}
