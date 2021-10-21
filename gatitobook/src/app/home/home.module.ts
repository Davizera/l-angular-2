import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from '../utils/messages/messages.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, MessagesModule],
})
export class HomeModule {}
