import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  hasBackdrop = true;
  mode = "over";

  @Output()
  onMenu: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  abrirMenu(){
    this.onMenu.emit();
  }

}
