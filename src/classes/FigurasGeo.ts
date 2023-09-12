export interface Figure {
    obtenerArea(): number
  }
  
  export class Square implements Figure { // clase Cuadrado
    constructor (private side: number) {}
  
    obtenerArea () {
      return this.side ** 2
    }
  }
  
  export class Circle implements Figure { // clase Circulo
    constructor (private radius: number) {}
  
    obtenerArea () {
      return Math.PI * (this.radius ** 2)
    }
  }
  
  export class Triangle implements Figure { // clase Triangulo
    constructor (public base: number, public height: number) {}
  
    obtenerArea (): number {
      return (this.height * this.base) / 2
    }
  }
  