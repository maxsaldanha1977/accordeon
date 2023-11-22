import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './mi-accordion.component.html',
  styleUrls: ['./mi-accordion.component.scss']
})
export class MiAccordionComponent implements OnInit {


  /**
   * The name of the technology that will be displayed as the title for the accordion header
   * @public
   * @property name
   * @type {string}
   */
  @Input()
  cliente : string;
 
  @Input()
  fantasia : string;

  @Input()
  cnpj : string;

  @Input()
  imgtel:string;

  @Input()
  telefone : string;

  @Input()
  imgemail:string;

  @Input()
  email:string;

  @Input()
  infodicionais:string;

  @Input()
  unidade:string;

  @Input()
  acesso:string;

  @Input()
  iconacesso:string;

  @Input()
  replica:string;

  @Input()
  ldlink:string;

  @Input()
  wsreplica:string;

  @Input()
  codempresa:string;

  @Input()
  wslink:string;

  
  /**
   * The change event that will be broadcast to the parent component when the user interacts with the component's 
   * <ion-button> element
   * @public
   * @property change
   * @type {EventEmitter}
   */
  @Output()
  change : EventEmitter<string> = new EventEmitter<string>();
  /**
   * Determines and stores the accordion state (I.e. opened or closed)
   * @public
   * @property isMenuOpen
   * @type {boolean}
   */
  public isMenuOpen : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   * @public
   * @method toggleAccordion
   * @returns {none}
   */
  public toggleAccordion() : void
  {
      this.isMenuOpen = !this.isMenuOpen;
  }
  
  /**
   * Allows the value for the <ion-button> element to be broadcast to the parent component
   * @public
   * @method broadcastName
   * @returns {none}
   */
  public broadcastName(name : string) : void
  {
     this.change.emit(name);
  }

}