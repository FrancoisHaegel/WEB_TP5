import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Article } from '../models/article/article'
import { Observable, combineLatest } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators'; 
import { Store } from '@ngxs/store';
import { AddArticle, DtlArticle } from '../shared/actions/article.action';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService : ArticleService, private store : Store, private router : Router) { }
  articles : Article[] = [];
  inputFilter : string = "";
  type : string = "";

  ngOnInit() {
    this.articleService.getArticleList().subscribe(value => this.articles = value);
    }

    public majType(type: string) {
      this.type = type;
    }

    public majFilter (filte: string) {
      this.inputFilter = filte;
    }

  addToShoppingCart(article: Article)
  {
      this.addArticle (article);
  }

  addArticle(article: Article)
  {
    this.store.dispatch(new AddArticle(article));
  }

  detailArticle(article: Article)
  {
    this.dtlArticle (article);
    this.router.navigate(['/detail']);  
  }

  dtlArticle(article: Article)
  {
    this.store.dispatch(new DtlArticle(article));
  }
}