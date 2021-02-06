import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item-component',
  templateUrl: './post-item-component.component.html',
  styleUrls: ['./post-item-component.component.css']
})
export class PostItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() dontLoveIts: number;
  @Input() created_at: Date;

  onCountLove() {
    this.loveIts ++
  }

  onCountDontLove(){
    this.dontLoveIts ++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
