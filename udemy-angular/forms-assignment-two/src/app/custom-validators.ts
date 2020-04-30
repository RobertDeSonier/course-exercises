import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === "test") {
      return {'forbiddenProjectName': true};
    }
    return null;
  }

  static forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test") {
          resolve({'forbiddenProjectName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
