//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  	heading = 'Welcome to the Catalog Editor Application';

    test() {
      alert('You clicked me');
    }  
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
