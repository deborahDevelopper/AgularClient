import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service';
import { Cliente, Grupo } from './../model-cliente';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = this.clientesService.devolverCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.devolverCliente(); //devolver cliente cambia el id del cliente cada vez que crea uno
  }
}