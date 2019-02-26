import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class SignupService {
    signUp(userInfoObj) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, userInfoObj)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}
