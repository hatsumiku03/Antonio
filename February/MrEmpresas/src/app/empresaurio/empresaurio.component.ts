import { Component } from '@angular/core';

@Component({
  selector: 'app-empresaurio',
  imports: [],
  templateUrl: './empresaurio.component.html',
  styleUrl: './empresaurio.component.css'
})
export class EmpresaurioComponent {
  name="Mr Babu";
  surname="Alaoui";
  age=25;
  direction="";
  company="";
  nationality="";

  rellenameEsta(direction:String, company:String): void{}

  registeredText = "¿Quieres registrate o no?";

  setUserR(event:Event){

    if((event.target as HTMLInputElement).value=="true"){
      this.registeredText = "Con esta opción activada te vas a registrar";
    }else{
      this.registeredText = "Con esta opción no te vas a registrar";
    }

  }

  // º Esto es una cosilla que he visto, y a nivel práctico se maneja
  // º con funciones lo que pilles del teclado y no con numericos en el keyup.
  // º Esto debido a tener válidaciones y este tipo de cosas xD
  // miraComoEsriboPapi(event: KeyboardEvent): void {
  //   const input = event.target as HTMLInputElement;
  //   console.log(input.value);
  // }
}
