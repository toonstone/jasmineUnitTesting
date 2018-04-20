import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    Add (key: string, data: any) {
        localStorage.setItem(key, data);
    }

    Remove (key: string) {
        localStorage.removeItem(key);
    }
}
