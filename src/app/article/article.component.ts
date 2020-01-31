import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Article } from "./article.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  // the CSS class we want to apply to the "host" of the component
  @HostBinding("attr.class") cssClass = "row";
  @Input() article: Article;
  constructor() {
    //this.article = new Article("Angular", "angular.io", 0);
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false; // handing propagating
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false; // handing propagating
  }
  ngOnInit() {}
}
