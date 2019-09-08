import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StreamsComponent } from 'src/app/streams/streams.component';
import { AuthguardGuard } from 'src/app/services/authguard.guard';

const routes: Routes = [{ path: 'streams', component: StreamsComponent, canActivate: [AuthguardGuard] }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule {}
