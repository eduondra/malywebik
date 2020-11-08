import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicWeb';
  search = '';

  options: SearchOption[] = [
    {title: 'Home', path: 'home'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'}
  ];

  get filteredOptions(): SearchOption[] {
    const filteredOption = [];
    const search = this.search.toLowerCase();
    for (const option of this.options) {
      if (option.title.toLowerCase().includes(search)) {
        filteredOption.push(option);
      }
    }
    return filteredOption;
  }

toggleOptions() {
    if (this.block === true) {
      this.block = false;
    } else {
      this.block = true;
    }
  }

  toggleOptionsOff() {
    this.block = false;
  }

}




class SearchOption {
  title: string;
  path: string;
}

