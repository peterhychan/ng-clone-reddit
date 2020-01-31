import { Component } from "@angular/core";
import { Article } from "./article/article.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article("Angular", "https://www.angular.io", 12),
      new Article("React", "https://www.reactjs.org", 2),
      new Article("Vue", "https://www.vuejs.org", 12)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = "";
    link.value = "";
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
