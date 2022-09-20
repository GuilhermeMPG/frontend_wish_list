import { Component, OnInit, Output } from '@angular/core';
import { itens_List } from 'src/app/shared/models/itens_lista.model';
import { ItensListService } from 'src/app/shared/services/itens-list.service';

@Component({
  selector: 'app-tabela-wish',
  templateUrl: './tabela-wish.component.html',
  styleUrls: ['./tabela-wish.component.scss'],
})
export class TabelaWishComponent implements OnInit {

  display : boolean = false;
  valor = 50;
  itens!: itens_List[];

  constructor(private itens_list: ItensListService) {}

  ngOnInit(): void {
    this.itens_list.getAll().subscribe((data) => {
      this.itens = data;
      console.log(data)
    });
  }

  deleteItem(id:number){}
  editItem(id:number){}

  showDialog(){

 
    this.display = true;
    console.log(this.display)

  }

  setDisplay(display:boolean){

    this.display = display;
    console.log(display + " setDisplay")

  }
}
