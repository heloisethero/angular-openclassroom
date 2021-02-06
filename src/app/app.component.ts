import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ex in ipsum blandit consectetur vitae bibendum elit. Nullam scelerisque tincidunt eros, tempor molestie tortor. Morbi ultrices pretium luctus. Aliquam mattis hendrerit risus eget sagittis. Fusce gravida a tortor at finibus. Proin a purus ante. Sed velit dui, dictum quis sem vitae, egestas iaculis augue. Cras condimentum urna ut turpis iaculis fermentum. Cras vehicula cursus felis in dictum. Phasellus euismod nisl sit amet velit interdum mollis.';

  posts = [
    {
      title: 'Mon premier post',
      content: this.lorem_ipsum,
      loveIts: 0,
      dontLoveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content: this.lorem_ipsum,
      loveIts: 0,
      dontLoveIts: 0,
      created_at: new Date("2019-01-16"),
    },
    {
      title: 'Mon dernier post',
      content: this.lorem_ipsum,
      loveIts: 0,
      dontLoveIts: 0,
      created_at: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    },
  ];

  title = 'blog-angular';

}
