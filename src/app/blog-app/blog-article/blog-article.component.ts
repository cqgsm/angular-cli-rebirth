import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-article',
  styleUrls: ['./blog-article.scss'],
  templateUrl: './blog-article.html'
})
export class BlogArticleComponent implements OnInit {
  private articleUrl: string;
  private article: Article;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.articleUrl = params.id;
      this.articleService.getArticleByUrl(this.articleUrl)
        .subscribe(result => {
          this.article = result;
        });
    });
  }
}
