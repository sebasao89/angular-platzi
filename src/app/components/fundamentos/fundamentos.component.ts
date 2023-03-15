import { Component } from '@angular/core';
import { Product } from 'src/app/product.model';

// DECADOR LE DICE A ANGULAR COMO SE DEBE COMPORTAR LA CLASE
@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.scss']
})
export class FundamentosComponent {

  constructor() {

  }




  // INTERPOLATION
  name: string = 'Sebastian';
  age:number = 33
  img: string = 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=6&m=1300845620&s=170x170&h=54jR20mh3xScBU8Z6MrD1Q2J_ZdSq1UcintGGYERFQw='


  // PROPERTY BINDING
  btnDisable: boolean = true;

  person = {
    name: 'Andrea',
    age: 30,
    avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=6&m=1300845620&s=170x170&h=54jR20mh3xScBU8Z6MrD1Q2J_ZdSq1UcintGGYERFQw='
  }

  // EVENTOS
  toggleButton() {
    this.btnDisable = !this.btnDisable
  }

  addAge() {
    this.age += 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }


  // DATA BINDING - ngModel
  computer = {
    price: 200,
    reference: 'Acer'
  }


  // ngFor
  names: string[] = [
    'Andrea', 'Viviana', 'Oscar'
  ]

  newName = ""

  addName() {
    this.names.push(this.newName)
    this.newName = ""
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }

  // Objectos y uso de interfaces
  products: Product[] = [
    {
      name: 'cam',
      price: 220,
      reference: 'Wyze',
      category: 'tecnologia'
    },
    {
      name: 'Switch',
      price: 80,
      reference: 'Tplink'
    }
  ]


  // Formulario
  register = {
    name: '',
    email: '',
    password: ''
  }

  onRegister() {
    console.log(this.register)
  }

}
