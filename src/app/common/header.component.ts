import { Component } from '@angular/core';

@Component({
  selector: 'glhf-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // trigger('reveal', [
    //   state('small', style({
    //     width: '0'
    //   })),
    //   state('large', style({
    //     width: '100%'
    //   })),
    //   transition('small  => large', animate('500ms ease-in'))
    // ])
  ]
})
export class HeaderComponent{

  constructor() {}
}
