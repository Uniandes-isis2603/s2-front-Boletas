import { Component, OnInit, OnChanges, Input,Output, EventEmitter } from '@angular/core';

import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import {EspectaculoService} from '../espectaculo.service';
import {Espectaculo} from '../espectaculo';
import {EspectaculoDetail} from '../espectaculo-detail';

@Component({
  selector: 'app-espectaculo-edit',
  templateUrl: './espectaculo-edit.component.html',
  styleUrls: ['./espectaculo-edit.component.css'],
  providers : [DatePipe]
})
export class EspectaculoEditComponent implements OnInit, OnChanges {




  constructor(
       private dp: DatePipe,
        private espectaculoService: EspectaculoService,
        private toastrService: ToastrService) { }
        
        @Input() espectaculo: EspectaculoDetail
        
     /**
    * El output que le dice al componente papa 
    * que el usuario ya no quiere editar el expectaculo
    */
        @Output() cancel= new EventEmitter();
        
     /**
    * El output que le dice al componente papa 
    * que el usuario ya quiere editar el expectaculo
    */
        @Output() update= new EventEmitter();
        
   /**
    * Actualiza la informacion del espectaculo 
    */
editEspectaculo():void{
    let dateB: Date = new Date(this.espectaculo.fecha.year, this.espectaculo.fecha.month - 1, this.espectaculo.fecha.day);
    this.espectaculo.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
    this.espectaculoService.updateEspectaculo(this.espectaculo).subscribe(()=>{
                this.toastrService.success("La informacion del espectaculo fue actualizada ", "Espectaculo edition");
            })
    this.update.emit();
}

   /**
    * cancela  la edicion del espectaculo 
    */
cancelEdition():void{
    this.cancel.emit();
}
    /**
    *Inicializa el componente
    */
    ngOnInit() {
        if (this.espectaculo && this.espectaculo.fecha) {
            this.espectaculo.fecha = this.espectaculo.fecha.substring(0, 10);
            var date = {
                day: + this.espectaculo.fecha.split('-')[2],
                month: + this.espectaculo.fecha.split('-')[1],
                year: + this.espectaculo.fecha.split('-')[0]
            };
            this.espectaculo.fecha = date;
        }
    }
  
      /**
    * Funcion que se llama cuando el usuario escoje un espectaculo que editar
    */
  ngOnChanges(){
      this.ngOnInit();
  }

}
