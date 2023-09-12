import { Pet } from './Mascotas'

export class EdicionMascota {
  private pets: Array<Pet> = []

  addPet (Pet:Pet) {
    this.pets.push(Pet)
  }

  getPets (): Array<Pet> {
    return this.pets
  }

  getOnePet (nombre:string):Pet {
    console.log(this.pets.filter(pets => pets.getPets().nombre === nombre)[0])
    return this.pets.filter(pets => pets.getPets().nombre === nombre)[0]
  }

  fedPet (mascota:Pet) {
    return mascota.feedPet()
  }

  petPlay (mascota:Pet) {
    return mascota.petPlay()
  }

  petCare (mascota:Pet) {
    return mascota.petCare()
  }
}

const mascota1 = new Pet({
  nombre: 'Lulu',
  vida: 100,
  raza: 'Bulldog Ingles',
  cuidado: 'cuidado',
  felicidad: 100,
  hambre: 100
})

const mascota2 = new Pet({
  nombre: 'Lucky',
  vida: 100,
  raza: 'Bulldog Ingles',
  cuidado: 'cuidado',
  felicidad: 100,
  hambre: 100
})

const mascotList = new EdicionMascota()
mascotList.addPet(mascota1)
mascotList.addPet(mascota2)
console.log(mascotList.getPets())
console.log('---------------------------------------------------------------')
mascotList.getOnePet(mascota2.nombre)
mascotList.getOnePet(mascota1.nombre)
console.log('------------------------------------------------------------------')
mascotList.petCare(mascota1)
console.log('------------------------------------------------------------------')
mascotList.fedPet(mascota1)
mascotList.fedPet(mascota1)
mascotList.petPlay(mascota1)
mascotList.petPlay(mascota1)
console.log(mascotList.getOnePet(mascota1.nombre))
mascotList.petCare(mascota1)
mascotList.petCare(mascota1)
mascotList.getOnePet('Lulu')
 