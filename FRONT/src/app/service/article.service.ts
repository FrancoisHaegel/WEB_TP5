import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article } from '../models/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticleList() : Observable<Article[]>{
    return this.http.get<Article[]>(environment.articleUrl);
  }

  getArticle(id : number) : Observable<Article>{
    return this.http.get<Article>(environment.articleUrl + "/" + id);
  }
}
