import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public saveProject;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 2019, '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    // Guardar los datos
    // Subir la imagen
    this._uploadService.makeFileRequest(Global.url_image, [], this.filesToUpload, 'image').
      then((result: any) => {
        this.project.image = result.data.medium.url;

        this._projectService.saveProject(this.project).subscribe(
          response => {
            if (response.project) {
              this.status = 'success';
              this.saveProject = response.project;

            } else {
              this.status = 'failed';
            }
          },
          err => {
          }
        );
      });
  }

  fileChangeEvent(fileinput: any) {
    this.filesToUpload = <Array<File>>fileinput.target.files;
  }
}
