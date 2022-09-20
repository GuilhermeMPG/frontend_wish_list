import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

const MODULES = [CommonModule,TableModule,ProgressBarModule,DialogModule,ButtonModule,BrowserAnimationsModule,BrowserModule ]

@NgModule({
  imports: [MODULES],
  exports:[MODULES]
})
export class PrimeNGModuleModule { }
