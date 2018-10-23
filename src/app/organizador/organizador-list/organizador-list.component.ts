import {Component, OnInit} from '@angular/core';
import {Organizador} from '../organizador'
import {OrganizadorService} from '../organizador.service'

/**
*Componente para la lista de organizadores
*@author Vilma Tirado Gomez
**/
    
    @Component({
        selector:'app-organizador-list',
        templateUrl: './organizador-list.component.html',
     styleUrls:['./organizador-list.component.css']
})
export class OrganizadorListComponent implements OnInit
{
      /**
      * constructor del componente
      * @param: organizadorService  proveedor de servicios 
      */
    constructor (private organizadorService: OrganizadorService ){
        
    }
    
    /**
    * lista de organizadores de la pagina 
     **/
    organizadores: Organizador[];
    
    /**
    * Le pide al cliente que actualize la lista de servicios 
     **/
    getOrganizadores(): void {
        this.organizadorService.getOrganizadores().subscribe(organizadores => this.organizadores= organizadores)
    }
    
    /**
*Esto inicializa la lista cuando se crea el componente 
*Este metodo se llama cuando se crea el compoente
**/
ngOnInit()
{
    this.getOrganizadores();
}
}