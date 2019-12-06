import { Pipe, PipeTransform } from '@angular/core';
import {Article} from '../models/article/article';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(articles: Article[], critere: string, type: string) {
    if(type == "Price")
      return articles.filter(article => article.price < Number(critere == "" ? Number.MAX_SAFE_INTEGER : critere))
    else if(type == "Speed")
      return articles.filter(article => article.max_speed > Number(critere == "" ? Number.MIN_SAFE_INTEGER : critere))
    else if(type == "Power")
      return articles.filter(article => article.hp > Number(critere == "" ? Number.MIN_SAFE_INTEGER : critere))
    else if(type == "Color")
      return articles.filter(article => { return article.color.toLowerCase().includes(critere.toLowerCase())})
    else if(type == "Name")
      return articles.filter(article => { return article.name.toLowerCase().includes(critere.toLowerCase())})
    else 
      return articles;
  }


}