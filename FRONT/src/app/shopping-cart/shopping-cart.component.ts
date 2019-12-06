import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article/article';
import { Store } from '@ngxs/store';
import { DelArticle } from '../shared/actions/article.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: Observable<Article>;

  constructor(private store: Store) { 
    this.shoppingCart = this.store.select(state => state.articles.articles);
  }

  ngOnInit() {
  }

  removeFromShoppingCart(article: Article)
  {
      this.delArticle (article);
  }

  delArticle(article: Article)
  {
    this.store.dispatch(new DelArticle(article));
  }

}