import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { About } from 'src/app/models/about';
import swal from 'sweetalert';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ProjectService]
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  public about: About;


  constructor(
    private _projectService: ProjectService,
  ) {
    this.title = 'Selvin Medina';
    this.subtitle = 'Desarrollador de software';
    this.email = 'selvinmedina0016@gmail.com';
    this.about = new About('', '', '', '', '');
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

  onSubmit(form) {
    // Guardar los datos
    this._projectService.saveAbout(this.about).subscribe(
      response => {
        if (response) {
          swal('Éxito', 'Se ha editado correctamente', 'success');
        }
      },
      err => {
      }
    );
  }

}
