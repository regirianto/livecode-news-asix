import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleHeroComponent } from './article-hero/article-hero.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [ArticleComponent, ArticleHeroComponent, ListArticlesComponent],
  imports: [CommonModule],
  exports: [ArticleComponent, ArticleRoutingModule],
})
export class ArticleModule {}
