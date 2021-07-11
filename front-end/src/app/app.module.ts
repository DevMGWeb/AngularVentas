import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';

import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceEmpresaComponent } from './empresa/indice-empresa/indice-empresa.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { IndiceSucursalComponent } from './sucursal/indice-sucursal/indice-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { IndiceAlmacenComponent } from './almacen/indice-almacen/indice-almacen.component';
import { CrearAlmacenComponent } from './almacen/crear-almacen/crear-almacen.component';
import { IndiceProductoComponent } from './producto/indice-producto/indice-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { IndiceCorrelativoComponent } from './correlativo/indice-correlativo/indice-correlativo.component';
import { CrearCorrelativoComponent } from './correlativo/crear-correlativo/crear-correlativo.component';
import { CrearCuentasComponent } from './cuentas/crear-cuentas/crear-cuentas.component';
import { IndiceCuentasComponent } from './cuentas/indice-cuentas/indice-cuentas.component';
import { EditarAlmacenComponent } from './almacen/editar-almacen/editar-almacen.component';
import { EditarCorrelativoComponent } from './correlativo/editar-correlativo/editar-correlativo.component';
import { EditarCuentasComponent } from './cuentas/editar-cuentas/editar-cuentas.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { IndiceClienteComponent } from './cliente/indice-cliente/indice-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { CrearVentaComponent } from './venta/crear-venta/crear-venta.component';
import { EditarVentaComponent } from './venta/editar-venta/editar-venta.component';
import { IndiceVentaComponent } from './venta/indice-venta/indice-venta.component';
import { CrearCajaComponent } from './caja/crear-caja/crear-caja.component';
import { EditarCajaComponent } from './caja/editar-caja/editar-caja.component';
import { IndiceCajaComponent } from './caja/indice-caja/indice-caja.component';
import { IndiceCompraComponent } from './compra/indice-compra/indice-compra.component';
import { CrearCompraComponent } from './compra/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './compra/editar-compra/editar-compra.component';
import { FormularioEmpresaComponent } from './empresa/formulario-empresa/formulario-empresa.component';
import { FormularioSucursalComponent } from './sucursal/formulario-sucursal/formulario-sucursal.component';
import { FormularioAlmacenComponent } from './almacen/formulario-almacen/formulario-almacen.component';
import { FormularioProductoComponent } from './producto/formulario-producto/formulario-producto.component';
import { FormularioClienteComponent } from './cliente/formulario-cliente/formulario-cliente.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { FormularioCorrelativoComponent } from './correlativo/formulario-correlativo/formulario-correlativo.component';
import { FormularioCuentasComponent } from './cuentas/formulario-cuentas/formulario-cuentas.component';
import { MapaComponent } from './utilidades/mapa/mapa/mapa.component';

import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import "leaflet/dist/images/marker-icon-2x.png";

@NgModule({
  declarations: [
    AppComponent,
    ListadoGenericoComponent,
    MenuComponent,
    LandingPageComponent,
    IndiceEmpresaComponent,
    CrearEmpresaComponent,
    IndiceSucursalComponent,
    CrearSucursalComponent,
    IndiceAlmacenComponent,
    CrearAlmacenComponent,
    IndiceProductoComponent,
    CrearProductoComponent,
    IndiceCorrelativoComponent,
    CrearCorrelativoComponent,
    CrearCuentasComponent,
    IndiceCuentasComponent,
    EditarAlmacenComponent,
    EditarCorrelativoComponent,
    EditarCuentasComponent,
    EditarEmpresaComponent,
    EditarProductoComponent,
    EditarSucursalComponent,
    CrearClienteComponent,
    IndiceClienteComponent,
    EditarClienteComponent,
    CrearVentaComponent,
    EditarVentaComponent,
    IndiceVentaComponent,
    CrearCajaComponent,
    EditarCajaComponent,
    IndiceCajaComponent,
    IndiceCompraComponent,
    CrearCompraComponent,
    EditarCompraComponent,
    FormularioEmpresaComponent,
    FormularioSucursalComponent,
    FormularioAlmacenComponent,
    FormularioProductoComponent,
    FormularioClienteComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCorrelativoComponent,
    FormularioCuentasComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
