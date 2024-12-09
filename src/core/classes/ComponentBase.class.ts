import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnDestroy, inject } from "@angular/core";
import { Subscription } from "rxjs";
import { environment } from "../../environment/environment";

@Component({
    template: ``
})

export class ComponentBase implements OnDestroy {
    public baseUrl = environment.baseUrl + '/api/';
    public rootUrl: string = environment.baseUrl;
    public httpClient: HttpClient = inject(HttpClient);
    public subscriptionArray: Subscription[] = [];


    public getPromise<R>(url: string, showLoader: boolean = true): Promise<R> {

        const myHeader = new HttpHeaders({
            "showLoader": (showLoader) + '',
        });

        const apiUrl = this.baseUrl + url;
        const newRequestPromise = new Promise<R>((resolve, reject) => {
            let sub = this.httpClient.get<R>(apiUrl, { headers: myHeader }).subscribe({
                next: (res: R) => {
                    resolve(res);
                },
                error: (err) => {
                    reject(err);
                    // this.toastreService.error(err.message);
                }
            })
            this.subscriptionArray.push(sub)
        })
        return newRequestPromise;
    }


    public postPromise<D, R>(data: D, url: string, showLoader: boolean = true): Promise<R> {
        const myHeader = new HttpHeaders({
            "showLoader": (showLoader) + '',
        });

        const apiUrl = this.baseUrl + url;
        const newPostPromise = new Promise<R>((resolve, reject) => {
            let sub = this.httpClient.post<R>(apiUrl, data, { headers: myHeader }).subscribe({
                next: (res: R) => {
                    resolve(res);
                },

                error: (err) => {
                    reject(err);
                }
            });
            this.subscriptionArray.push(sub)
        });

        return newPostPromise;
    }

    public deletePromise<R>(url: string, showLoader: boolean = true): Promise<R> {
        const myHeader = new HttpHeaders({
            "showLoader": (showLoader) + '',
        });

        const apiUrl = this.baseUrl + url;
        const newPostPromise = new Promise<R>((resolve, reject) => {
            let sub = this.httpClient.delete<R>(apiUrl, { headers: myHeader }).subscribe({
                next: (res: R) => {
                    resolve(res);
                },

                error: (err) => {
                    // this.toastreService.error(err.message);
                    reject(err);
                }
            })
            this.subscriptionArray.push(sub);
        });

        return newPostPromise;
    }

    public deletePromiseUsingData<D, R>(data: D, url: string): Promise<R> {
        const apiUrl = this.baseUrl + url;
        const newPostPromise = new Promise<R>((resolve, reject) => {
            const obj = { key: data }
            let sub = this.httpClient.delete<R>(apiUrl, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
                body: obj
            }).subscribe({
                next: (res: R) => {
                    resolve(res);
                },

                error: (err) => {
                    // this.toastreService.error(err.message);
                    reject(err);
                }
            });
            this.subscriptionArray.push(sub);
        });

        return newPostPromise;
    }

    public putPromise<D, R>(data: D, url: string, showLoader: boolean = true): Promise<R> {
        const myHeader = new HttpHeaders({
            "showLoader": (showLoader) + '',
        })

        const apiUrl = this.baseUrl + url;
        const newPostPromise = new Promise<R>((resolve, reject) => {
            let sub = this.httpClient.put<R>(apiUrl, data, { headers: myHeader }).subscribe({
                next: (res: R) => {
                    resolve(res);
                },

                error: (err) => {
                    // this.toastreService.error(err.message);
                    reject(err);
                }
            });
            this.subscriptionArray.push(sub);
        });

        return newPostPromise;
    }

    public patchPromise<D, R>(url: string, data: D, showLoader: boolean = true): Promise<R> {
        const myHeader = new HttpHeaders({
            "showLoader": (showLoader) + '',
        })

        const apiUrl = this.baseUrl + url;
        const newPostPromise = new Promise<R>((resolve, reject) => {
            let sub = this.httpClient.put<R>(apiUrl, data, { headers: myHeader }).subscribe({
                next: (res: R) => {
                    resolve(res);
                },

                error: (err) => {
                    // this.toastreService.error(err.message);
                    reject(err);
                }
            });
            this.subscriptionArray.push(sub);
        });

        return newPostPromise;
    }

    public unsubscribeAll() {
        if (this.subscriptionArray.length > 0) {
            this.subscriptionArray.forEach(
                (sub, i) => {
                    sub.unsubscribe();
                }
            )
        }
    }

    ngOnDestroy(): void {
        this.unsubscribeAll();
    }

}