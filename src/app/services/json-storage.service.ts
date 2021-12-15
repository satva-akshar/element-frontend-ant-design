import { Injectable } from '@angular/core';
import { Promise } from 'q';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Injectable()
export class JsonStorageService {
    token: any;
    constructor(public localStorage: LocalStorage) {
    }
}
