import { Component, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { itens_List } from 'src/app/shared/models/itens_lista.model';
import { ItensListService } from 'src/app/shared/services/itens-list.service';

@Component({
  selector: 'app-tabela-wish',
  templateUrl: 'tabela-wish.component.html',
  styleUrls: ['tabela-wish.component.scss'],
})
export class TabelaWishComponent implements OnInit, OnChanges {

  display : boolean = false;
  novo !: boolean;
  editId !: number;
  valor = 50;
  itens!: itens_List[];
  posicao!: number;

  constructor(private itens_list: ItensListService) {}

  ngOnInit(): void {
    this.itens_list.getAll().subscribe((data) => {
      this.itens = data;
      console.log(data)

    });
  }
  ngOnChanges(): void {
    this.itens_list.getAll().subscribe((data) => {
      this.itens = data;
      console.log(data)

    });
  }

  deleteItem(id:number){
    this.itens_list.deletIten(id).subscribe(() => {
      this.ngOnChanges();
    })
  }
  editItem(id:number){
    this.novo=false;
    this.editId=id;
    this.showDialog()
  }

  showDialog(){


    this.display = true;
    console.log(this.display)

  }
  adicionarItem(){
    this.novo=true;
    this.showDialog();
  }

  setDisplay(display:boolean){

    this.display = display;


  }
}
