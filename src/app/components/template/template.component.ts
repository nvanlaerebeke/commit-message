import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  Type?: string = "";
  Subject?: string = "";
  Description?: string = "";
  Extras?: string = "";
  TypeIcon?: string = "";
  TypeName?: string = "";
  isValid: boolean = false;

  ngOnInit(): void {
    const type = document.getElementById('type');
    const subject = document.getElementById('subject');
    const description = document.getElementById('description');
    const extras = document.getElementById('extras');

    type?.addEventListener('input', event => {
      this.Type = (event.target as HTMLSelectElement)?.value;
      this.setIcon();
      this.validate();
    });
    subject?.addEventListener('input', event => {
      this.Subject = (event.target as HTMLInputElement)?.value;
      this.validate();
    });
    description?.addEventListener('input', event => {
      this.Description = (event.target as HTMLTextAreaElement)?.value;
      this.validate();
    });
    extras?.addEventListener('input', event => {
      this.Extras = (event.target as HTMLTextAreaElement)?.value;
      this.validate();
    });
  }

  private setIcon() : void {
    if(!this.Type) { return; }
    switch(this.Type) {
      case 'feat':
        this.TypeIcon = "assets/emoji/sparkles.png"
        this.TypeName = ":sparkles:"
        break;
      case 'fix':
        this.TypeIcon = "assets/emoji/bug.png"
        this.TypeName = ":bug:"
        break;
      case 'refactor':
        this.TypeIcon = "assets/emoji/hammer.png"
        this.TypeName = ":hammer:"
        break;
      case 'perf':
        this.TypeIcon = "assets/emoji/racehorse.png"
        this.TypeName = ":racehorse:"
        break;
      case 'sec':
        this.TypeIcon = "assets/emoji/lock.png"
        this.TypeName = ":lock:"
        break;
      case 'style':
        this.TypeIcon = "assets/emoji/art.png"
        this.TypeName = ":art:"
        break;
      case 'docs':
        this.TypeIcon = "assets/emoji/books.png"
        this.TypeName = ":books:"
        break;
      case 'test':
        this.TypeIcon = "assets/emoji/white_check_mark.png"
        this.TypeName = ":white_check_mark:"
        break;
      case 'chore':
        this.TypeIcon = "assets/emoji/wrench.png"
        this.TypeName = ":wrench:"
        break;
      case 'i18n':
        this.TypeIcon = "assets/emoji/speech_balloon.png"
        this.TypeName = ":speech_balloon:"
        break;
      case 'init':
        this.TypeIcon = "assets/emoji/tada.png"
        this.TypeName = ":tada:"
        break;
      default:
        this.TypeIcon = "";
        this.TypeName = ""
    }
  }

  private validate(): void {
    if(this.Subject) {
      this.Subject = this.Subject[0].toUpperCase() + this.Subject.slice(1);
      if(this.Subject.charAt(this.Subject.length -1) == '.') {
        this.Subject = this.Subject.slice(0, this.Subject.length -1);
      }
    }
   
    if(this.Description) {
      this.Description = this.Description.replace(/.{72}/g, '$&\n');
    }

    if(this.Extras) {
      this.Extras = this.Extras.replace(/.{72}/g, '$&\n');
    }

    if(this.Type && this.Subject) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
