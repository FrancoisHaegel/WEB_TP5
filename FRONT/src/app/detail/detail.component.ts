import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article/article';
import { Store } from '@ngxs/store';
import { AddArticle } from '../shared/actions/article.action';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //@Input() article: Article;
  article: Article;

  constructor(private store: Store) {
    this.store.select(state => state.articles.detail).subscribe (u => this.article = u);  }

  ngOnInit() {}

  addToShoppingCart(article: Article)
  {
      this.addArticle (article);
  }

  addArticle(article: Article)
  {
    this.store.dispatch(new AddArticle(article));
  }

}