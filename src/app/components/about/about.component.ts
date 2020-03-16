import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { About } from 'src/app/models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ProjectService]
})
export class AboutComponent implements OnInit {
  public about: About;


  constructor(
    private _projectService: ProjectService,
  ) {

  }

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this._projectService.getAbout().subscribe(
      response => {
        this.about = response.about[0];
      },
      error => {
        console.log(error);
      }
    );
  }

}
