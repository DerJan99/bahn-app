import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() iconName: string;
  @Input() tooltipContent: string;
  @Input() isActive: boolean = false;

  public iconColor: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.isActive) {
      this.iconColor = "green"
    } else {
      this.iconColor = "grey";
    }
  }

}
