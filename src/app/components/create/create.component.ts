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

  onSubmit(form) {
    console.log(this.project);
    // Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          // Subir la imagen\
          console.log(Global.url + 'upload-image/' + response.project._id)
          this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image').
            then((result: any) => {
              this.status = 'success';
              this.saveProject = result.project;
              form.reset();
            });

        } else {
          this.status = 'failed'
        }
      },
      err => {
        console.log(<any>err)
      }
    )
  }

  fileChangeEvent(fileinput: any) {
    this.filesToUpload = <Array<File>>fileinput.target.files;
    console.log(<Array<File>>fileinput.target.files);
  }
}
