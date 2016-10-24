import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared';

import { BlogAppComponent } from './blog-app.component';
import { AboutComponent, AboutService } from './about';
import { ArticleItemComponent } from './article-item';
import { ArticleListComponent } from './article-list';
import { BlogArticleComponent } from './blog-article';
import { BlogAsideComponent } from './blog-aside';
import { BlogNavbarComponent } from './blog-navbar';
import { DuoShuoCommentComponent } from './duoshuo-comment';
import { HomeComponent } from './home';
import { JiaThisComponent } from './jia-this';
import { QuestionComponent, QuestionService } from './question';
import { UyanCommentComponent } from './uyan-comment';

import { ROUTING } from './blog-app.routes';

@NgModule({
  imports: [
    SharedModule,
    ROUTING
  ],
  providers: [
    QuestionService,
    AboutService
  ],
  declarations: [
    BlogAppComponent,
    AboutComponent,
    ArticleItemComponent,
    ArticleListComponent,
    BlogArticleComponent,
    BlogAsideComponent,
    BlogNavbarComponent,
    DuoShuoCommentComponent,
    HomeComponent,
    JiaThisComponent,
    QuestionComponent,
    UyanCommentComponent
  ]
})
export class BlogAppModule {
}
