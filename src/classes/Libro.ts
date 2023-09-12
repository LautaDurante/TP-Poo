interface libro {
    id:number
    titulo:string
    autor:string
    taken: string | boolean
}

export class Book {
  private id: number = 0
  private titulo: string = ''
  private autor: string = ''
  private taken: string | boolean = ''
  private idEdited : boolean = false
  constructor (
    { titulo, autor, taken }:
    { titulo:string, autor:string, taken: string }
  ) {
    this.titulo = titulo
    this.autor = autor
    this.taken = taken.toLocaleLowerCase() === 'disponible'
  }

  getBook (): libro {
    return {
      id: this.id,
      autor: this.autor,
      titulo: this.titulo,
      taken: this.taken
    }
  }

  getDisponible () {
    return this.taken
  }

  setAvailability (): string {
    this.taken = !this.taken
    return this.taken ? 'disponible' : 'prestado'
  }

  setId (id:number) {
    if (!this.idEdited) {
      this.id = id
      this.idEdited = true
      return 'Id editado correctamente'
    }
    return 'No se puede editar este Id'
  }
}
