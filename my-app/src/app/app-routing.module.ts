import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'cursos', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'cursos/:slug', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
