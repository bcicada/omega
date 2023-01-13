import { Component } from '@angular/core';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.component.html',
  styleUrls: ['./ariane.component.scss']
})
export class ArianeComponent {
  breadcrumb: string = "";

  ngOnInit() {
    this.breadcrumb = this.getBreadcrumbValue();
  }

  getBreadcrumbValue(): string {
    // logique pour récupérer la valeur de la variable
    return 'Value of the variable';
  }}
