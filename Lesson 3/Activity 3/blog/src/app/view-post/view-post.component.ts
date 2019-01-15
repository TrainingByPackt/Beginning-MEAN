import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})

export class ViewPostComponent implements OnInit {
  id: any;
  article: any;
  constructor( private articleService: ArticleService) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
      this.id = '5b9426b70e473447f400eeb9'
      this.articleService.getArticle(this.id)
        .subscribe(
          res => {
            console.log(res)
            this.article = res;
          },
          err => {
            console.log("Error occured");
          }
        );
    // });
  }
}
