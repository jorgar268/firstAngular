import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

import { filter, take } from 'rxjs/operators';

import { Character } from './../../../../shared/interfaces/character.interface';
import { CharacterService } from './../../../../shared/services/character.service';

type RequestInfo = {
  next: string | null;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  info: RequestInfo = {
    // la unica propiedad k me interesa para saber si hay mas pags
    next: null,
  };

  showGoUpButton = false;

  private pageNum = 1;

  private query?: string;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getDataFromService();
    this.getCharactersByQuery();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  private onUrlChanged(): void {
    //para buscador
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      });
  }

  private getCharactersByQuery(): void {
    // console.log(params);
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      // this.route.queryParamMap.pipe(take(1)).subscribe((params: ParamMap) => {
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    this.characterSvc
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        console.log(res);
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results]; //concateno lo q ya hay en el array
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }
}
