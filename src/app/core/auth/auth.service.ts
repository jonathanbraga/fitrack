import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KEYS_LOCALSTORAGE, LocalStorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService){}

    public requestAccessToken(clientId: number, clientSecret: string, code: string, granType: string): void{
        this.http.post(`${environment.BASEURL}/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&gran_type=${granType}`, {})
            .subscribe((data: any) => {
                this.localStorageService.setObj(KEYS_LOCALSTORAGE.access_token, data.access_token);
                this.localStorageService.setObj(KEYS_LOCALSTORAGE.refresh_token, data.refresh_token);
                this.localStorageService.setObj(KEYS_LOCALSTORAGE.expires_at, data.expires_at);
                this.localStorageService.setObj(KEYS_LOCALSTORAGE.expires_in, data.expires_in);

                this.localStorageService.setObj(KEYS_LOCALSTORAGE.profile_pic, data.athlete?.profile);
                this.localStorageService.setObj(KEYS_LOCALSTORAGE.user_id, data.athlete?.id);
                this.localStorageService.setObj(KEYS_LOCALSTORAGE.user_name, `${data.athlete?.firstname} ${data.athlete?.lastname}`);
            });
    }
}

