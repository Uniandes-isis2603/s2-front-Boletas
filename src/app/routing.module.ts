import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {EspectaculoListComponent} from '../app/espectaculo/espectaculo-list/espectaculo-list.component';
import {EspectaculoDetailComponent} from '../app/espectaculo/espectaculo-detail/espectaculo-detail.component';
import {CompraListComponent} from '../app/compra/compra-list/compra-list.component';
import { CompraDetailComponent } from '../app/compra/compra-detail/compra-detail.component';
import { BoletaListComponent } from '../app/boleta/boleta-list/boleta-list.component';
import { BoletaDetailComponent } from '../app/boleta/boleta-detail/boleta-detail.component';
import {OrganizadorListComponent} from '../app/organizador/organizador-list/organizador-list.component';
import {ClienteListComponent} from '../app/cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../app/cliente/cliente-detail/cliente-detail.component';
import {ComentarioListComponent} from '../app/comentario/comentario-list/comentario-list.component';
import {ComentarioDetailComponent} from '../app/comentario/comentario-detail/comentario-detail.component';
import {OrganizadorDetailComponent} from '../app/organizador/organizador-detail/organizador-detail.component';
import {LugarListComponent} from '../app/lugar/lugar-list/lugar-list.component';
import {LugarDetailComponent} from '../app/lugar/lugar-detail/lugar-detail.component';

const routes: Routes=[
    {
        path: 'espectaculos',
        children : [
            {
                path: 'list',
                component : EspectaculoListComponent
            },
            {
                path:':id',
                component : EspectaculoDetailComponent
            }
        ]
    },
    {
        path: 'compras',
        children: [
            {
                path: 'list',
                component : CompraListComponent
            },
            {
                path: ':id',
                component: CompraDetailComponent
            }
        ]
    },
    {
        path: 'boletas',
        children: [
            {
                path: 'list',
                component: BoletaListComponent
            },
            {
                path:'id',
                component:BoletaDetailComponent
            }
        ]
    },
    {
        path: 'organizadores',
        children: [
            {
                path: 'list',
                component:OrganizadorListComponent
            },
            {
                path:':id',
                component: OrganizadorDetailComponent
            }
        ]
    },
    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
            path: ':id',
             component: ClienteDetailComponent
             }
        ]
    },
    {
        path: 'comentarios',
        children: [
            {
                path: 'list',
                component: ComentarioListComponent
            },
            {
                path:'id',
                component:ComentarioDetailComponent
            }
        ]
    },
    {
        path: 'lugares',
        children: [
           {
               path: 'list',
               component: LugarListComponent
           }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class RoutingModule {
    
}
