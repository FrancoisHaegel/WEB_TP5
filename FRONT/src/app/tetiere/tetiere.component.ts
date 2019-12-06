import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article/article';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  panier: Observable<Article>;
  nbArticles : number;

  constructor(private store: Store){
    this.store.select(state => state.articles.articles).subscribe (u => this.nbArticles = u.length);
   }

  ngOnInit() {
  }
}
