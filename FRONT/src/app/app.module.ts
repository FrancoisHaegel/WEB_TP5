import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes, Router } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PhoneNumberPipe } from "./user-form/phoneNumber.pipe";
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './service/article.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { ListFilterPipe } from './list-filter/list-filter.pipe';
import { InputErrorDirective } from './user-form/input-error.directive';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ArticlesState } from './shared/states/article.state';
import { UserService } from './service/user.service';

const routes: Routes = [
  {
    path: '', 
    component : HomeComponent,
  },
  {
    path: 'register',
    component : UserFormComponent
  },
  {
    path: 'article-list',
    component : ArticleListComponent
  },
  {
    path: 'shopping-cart',
    component : ShoppingCartComponent
  },
  {
    path: 'detail',
    component : DetailComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    UserFormComponent,
    PhoneNumberPipe,
    FooterComponent,
    ArticleListComponent,
    ListFilterComponent,
    ListFilterPipe,
    InputErrorDirective,
    HomeComponent,
    DetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([ArticlesState])
  ],
  providers: [
    PhoneNumberPipe,
    ArticleService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }