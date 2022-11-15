import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatahandlerService } from './services/datahandler.service';
import { UploadGuard } from './shared/upload.guard';
import { HomeComponent } from './views/home/home.component';
import { UploadComponent } from './views/home/upload/upload.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [UploadGuard],
    //resolve: { items: DatahandlerService }
  },
  {
    path: 'upload',
    component: UploadComponent,
    //canActivate: [UploadGuard],
    resolve: { items: DatahandlerService }
  },
  {
    path: '**', redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
