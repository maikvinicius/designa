import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})

export class CoursesComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  public posts: PostModel[] = [];

  ngOnInit(): void {
    const url: string = "https://jsonplaceholder.typicode.com/posts"

    this.httpClient.get<PostModel[]>(url).toPromise().then(data => {
      this.posts = data;
    });
  }

}
