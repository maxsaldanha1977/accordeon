import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


/**
 * The data structure that will be used for supplying the accordion content
 * @public
 * @property technologies
 * @type {Array}
 */
public technologies : Array<{ cliente: string, fantasia: string, cnpj: string, imgtel:string, telefone: string, imgemail:string, email:string,
                               infodicionais:string, unidade:string, acesso:string, iconacesso:string, codempresa:string, ldlink:string, replica:string,
                               wslink:string
                              }> = [
    { 
       cliente : 'ACORDS', 
       fantasia : 'Laboratorio Acords',
       cnpj: '111.222.334.44 - 001',
       imgtel:'/assets/icon/telefone.png',
       telefone:'21 980776367',
       imgemail:'/assets/icon/icone-email.png',
       email:'maxuelsaldanha@gmail.com | maxsaldanhadeveloper@gmail.com',
       infodicionais:'Os clientes não sabem porra nenhuma',
       unidade:'MTZ - SRVACORD',
       iconacesso:'/assets/icon/tv.png',
       acesso:' ID: 1 250 562 698 | SENHA: 02861183',
       codempresa:'VRCLI:',
       ldlink:'www.laudoonline/acods.com,',
       replica:'MTZ/FILIAL',
       wslink:'replicawsacord.ddns.net:8000/WsReplica/'
    },
    { 
      cliente : 'AMEP', 
      fantasia : 'Laboratorio Acords',
      cnpj: '111.222.334.44 - 001',
      imgtel:'/assets/icon/telefone.png',
      telefone:'21 980776367',
      imgemail:'/assets/icon/icone-email.png',
      email:'maxuelsaldanha@gmail.com | maxsaldanhadeveloper@gmail.com',
      infodicionais:'Os clientes não sabem porra nenhuma',
      unidade:'MTZ - SRVACORD',
      iconacesso:'/assets/icon/tv.png',
      acesso:' ID: 1 250 562 698 | SENHA: 02861183',
      codempresa:'VRCLI',
      ldlink:'www.laudoonline/acods.com,',
      replica:'MTZ/FILIAL',
      wslink:'replicawsacord.ddns.net:8000/WsReplica/'
    },
    { 
      cliente :'ANALISA', 
      fantasia : 'Laboratorio Acords',
      cnpj: '111.222.334.44 - 001',
      imgtel:'/assets/icon/telefone.png',
      telefone:'21 980776367',
      imgemail:'/assets/icon/icone-email.png',
      email:'maxuelsaldanha@gmail.com | maxsaldanhadeveloper@gmail.com',
      infodicionais:'Os clientes não sabem porra nenhuma',
      unidade:'MTZ - SRVACORD',
      iconacesso:'/assets/icon/tv.png',
      acesso:' ID: 1 250 562 698 | SENHA: 02861183',
      codempresa:'VRCLI',
      ldlink:'www.laudoonline/acods.com,',
      replica:'MTZ/FILIAL',
      wslink:'replicawsacord.ddns.net:8000/WsReplica/'
  }    
  ];

  constructor() {}

  /**
   * Captures and console logs the value emitted from the user depressing the accordion component's <ion-button> element 
   * @public
   * @method captureName
   * @param {any}		event 				The captured event
   * @returns {none}
   */
  public captureName(event: any) : void
  {
     console.log(`Captured name by event value: ${event}`);
  }

}