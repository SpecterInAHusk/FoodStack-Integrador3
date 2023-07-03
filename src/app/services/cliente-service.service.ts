import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor() { }
    private users: { username: string, password: string }[] = [
        { username: 'Andre@gmail.com', password: '1234' },
        { username: 'Felipe@gmail.com', password: 'abcd' },
        { username: 'Paulo@gmail.com', password: 'abcd' }
    ];

    login(username: string, password: string): boolean {
        let authenticated = false;
        this.users.forEach(user => {
            if (user.username === username && user.password === password) {
                authenticated = true;
                return;
            }
        });

        return authenticated;
    }

    cadastrar(username: string, password: string): boolean {
        this.users.push({ username, password })
        return true;
    }
}
