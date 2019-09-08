import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../../streams/streams.component';
import { TokenService } from 'src/app/services/tokenService/token.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SideComponent } from 'src/app/components/side/side.component';
import { PostsformComponent } from '../../components/postsform/postsform.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { PostService } from 'src/app/services/posts/post.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SmallspinnerComponent } from 'src/app/components/loaders/smallspinner/smallspinner.component';

@NgModule({
  declarations: [
    StreamsComponent,
    HeaderComponent,
    SideComponent,
    PostsformComponent,
    PostsComponent,
    SmallspinnerComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [StreamsComponent, HeaderComponent, SideComponent, PostsComponent, SmallspinnerComponent],
  providers: [TokenService, PostService]
})
export class StreamsModule {}
