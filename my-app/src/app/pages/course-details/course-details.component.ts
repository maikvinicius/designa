import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
})

export class CourseDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  public slug: string = this.route.snapshot.params.slug;

  public post: PostModel | null = null;

  ngOnInit(): void {
    const url: string = `https://jsonplaceholder.typicode.com/posts/${this.slug}`

    this.httpClient.get<PostModel>(url).toPromise().then(data => {
      this.post = data;
    });
  }
}
