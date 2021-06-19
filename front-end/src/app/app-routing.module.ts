import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlmacenComponent } from './almacen/crear-almacen/crear-almacen.component';
import { EditarAlmacenComponent } from './almacen/editar-almacen/editar-almacen.component';
import { IndiceAlmacenComponent } from './almacen/indice-almacen/indice-almacen.component';
import { CrearCajaComponent } from './caja/crear-caja/crear-caja.component';
import { EditarCajaComponent } from './caja/editar-caja/editar-caja.component';
import { IndiceCajaComponent } from './caja/indice-caja/indice-caja.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { IndiceClienteComponent } from './cliente/indice-cliente/indice-cliente.component';
import { CrearCompraComponent } from './compra/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './compra/editar-compra/editar-compra.component';
import { IndiceCompraComponent } from './compra/indice-compra/indice-compra.component';
import { CrearCorrelativoComponent } from './correlativo/crear-correlativo/crear-correlativo.component';
import { EditarCorrelativoComponent } from './correlativo/editar-correlativo/editar-correlativo.component';
import { IndiceCorrelativoComponent } from './correlativo/indice-correlativo/indice-correlativo.component';
import { CrearCuentasComponent } from './cuentas/crear-cuentas/crear-cuentas.component';
import { EditarCuentasComponent } from './cuentas/editar-cuentas/editar-cuentas.component';
import { IndiceCuentasComponent } from './cuentas/indice-cuentas/indice-cuentas.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
import { IndiceEmpresaComponent } from './empresa/indice-empresa/indice-empresa.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { IndiceProductoComponent } from './producto/indice-producto/indice-producto.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { IndiceSucursalComponent } from './sucursal/indice-sucursal/indice-sucursal.component';
import { CrearVentaComponent } from './venta/crear-venta/crear-venta.component';
import { EditarVentaComponent } from './venta/editar-venta/editar-venta.component';
import { IndiceVentaComponent } from './venta/indice-venta/indice-venta.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'empresa', component: IndiceEmpresaComponent },
  { path: 'empresa/crear', component: CrearEmpresaComponent },
  { path: 'empresa/editar/:id', component: EditarEmpresaComponent },
  { path: 'sucursal', component: IndiceSucursalComponent },
  { path: 'sucursal/crear', component: CrearSucursalComponent },
  { path: 'sucursal/editar/:id', component: EditarSucursalComponent },
  { path: 'almacen', component: IndiceAlmacenComponent },
  { path: 'almacen/crear', component: CrearAlmacenComponent },
  { path: 'almacen/editar/:id', component: EditarAlmacenComponent },
  { path: 'producto', component: IndiceProductoComponent },
  { path: 'producto/crear', component: CrearProductoComponent },
  { path: 'producto/editar/:id', component: EditarProductoComponent },
  { path: 'correlativo', component: IndiceCorrelativoComponent },
  { path: 'correlativo/crear', component: CrearCorrelativoComponent },
  { path: 'correlativo/editar/:id', component: EditarCorrelativoComponent },
  { path: 'cuenta', component: IndiceCuentasComponent },
  { path: 'cuenta/crear', component: CrearCuentasComponent },
  { path: 'cuenta/editar/:id', component: EditarCuentasComponent },
  { path: 'cliente', component: IndiceClienteComponent },
  { path: 'cliente/crear', component: CrearClienteComponent },
  { path: 'cliente/editar/:id', component: EditarClienteComponent },
  { path: 'venta', component: IndiceVentaComponent },
  { path: 'venta/crear', component: CrearVentaComponent },
  { path: 'venta/editar/:id', component: EditarVentaComponent },
  { path: 'caja', component: IndiceCajaComponent },
  { path: 'caja/crear', component: CrearCajaComponent },
  { path: 'caja/editar/:id', component: EditarCajaComponent },
  { path: 'compra', component: IndiceCompraComponent },
  { path: 'compra/crear', component: CrearCompraComponent },
  { path: 'compra/editar/:id', component: EditarCompraComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
