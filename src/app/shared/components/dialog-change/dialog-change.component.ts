import { ItensListService } from 'src/app/shared/services/itens-list.service';
import { itens_List } from 'src/app/shared/models/itens_lista.model';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-dialog-change',
  templateUrl: './dialog-change.component.html',
  styleUrls: ['./dialog-change.component.scss'],
})
export class DialogChangeComponent implements OnInit, OnChanges {
  newProduct: itens_List = {
    product: 'produto',
    description: 'descriçao',
    price: 10,
    priority: 10,
  };
  header: string = '';

  @Input() public display!: boolean;
  @Input() public novo!: boolean;
  @Input() public editId!: number;
  @Output() public displayChange = new EventEmitter();
  @Output() public updateData = new EventEmitter();

  constructor(private itensListService: ItensListService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.novo == true) {
      this.header = 'Adicionar Item';
      this.newProduct.product = ""
      this.newProduct.price = 0;
      this.newProduct.description = "";
      this.newProduct.priority = 0;

    }
    if (this.novo == false) {
      this.header = 'Editar Item';
      this.itensListService.getItem(this.editId).subscribe((item) => {
        this.newProduct.product = item.product;
        this.newProduct.price = item.price;
        this.newProduct.description = item.description;
        this.newProduct.priority = item.priority;
        this.newProduct.id = item.id;
      });
    }
  }

  onSalvar() {
    if (this.novo == true) {
      this.itensListService.postIten(this.newProduct).subscribe(() => {
        this.display = false;
        this.updateData.emit();
      });
    }
    if (this.novo == false) {
      this.itensListService.update(this.newProduct).subscribe(() => {
        this.display = false;
        this.updateData.emit();
      });
    }
  }
  onCancel() {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
