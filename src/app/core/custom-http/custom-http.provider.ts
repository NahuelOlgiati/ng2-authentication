import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { CustomHttp } from "./custom-http.http";
import { CustomHttpService } from "./custom-http.service";

export const CUSTOM_HTTP_PROVIDER = [CustomHttpService,
    {
        provide: Http,
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, customHttpService: CustomHttpService) => {
            return new CustomHttp(backend, defaultOptions, customHttpService);
        },
        deps: [XHRBackend, RequestOptions, CustomHttpService]
    }];