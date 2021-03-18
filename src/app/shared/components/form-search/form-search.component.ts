import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `<div class="search-bar">
    <input
      #inputSearch
      autofocus
      type="text"
      class="search-bar__input"
      placeholder="Buscar...."
      (keyup)="onSearch(inputSearch.value)"
    />
    <button class="search-bar__button"><i class="fa fa-search"></i></button>
  </div> `,
  //inputSearch me devuelve lo que escrie
  styles: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    console.log('busca bien:', value);
    if (value && value.length > 3) {
      //a partir de tres letras

      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
