import {Injectable} from '@angular/core';
import {Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response, Headers} from '@angular/http';
import {CustomHttpService} from './custom-http.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CustomHttp extends Http {

  constructor(backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private customHttpService: CustomHttpService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this._handle(super.request(url, options), null, url, null, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._handle(super.get(url, options), RequestMethod.Get, url, null, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this._handle(super.post(url, body, options), RequestMethod.Post, url, body, options);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._handle(super.put(url, options), RequestMethod.Put, url, body, options);
  }

  patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._handle(super.patch(url, options), RequestMethod.Patch, url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._handle(super.delete(url, options), RequestMethod.Delete, url, null, options);
  }

  private _handle(request: Observable<Response>, method: RequestMethod, url: string | Request, body?: string, options?: RequestOptionsArgs): Observable<any> {
    let req: Request = this._buildRequest(method, url, options, body);
    this._beforeCall(req);
    return request.catch((err: any): any => {
      if (err.status === 400 || err.status === 422) {
        return Observable.throw(new Error(err.status));
      } else {
        this.customHttpService.notifyError(err);
        return Observable.empty();
      }
    })
      .retryWhen(error => error.delay(500))
      .timeout(2000, new Error('delay exceeded'))
      .finally(() => {
        this._afterCall(req);
      });
  }

  private _buildRequest(method: RequestMethod, url: string | Request, options: RequestOptionsArgs, body?: string): Request {
    let req: Request;
    if (typeof url === 'string') {
      let aBody = body ? body : options && options.body ? options.body : undefined;
      let opts: RequestOptionsArgs = {
        method: method,
        url: url,
        headers: options && options.headers ? options.headers : new Headers(),
        search: options && options.search ? options.search : undefined,
        body: aBody
      };
      let reqOpt = new RequestOptions(opts);
      reqOpt.url = url;
      req = new Request(reqOpt);
    }
    else {
      req = url;
    }
    return req;
  }

  private _beforeCall(req: Request): void {
    console.log('Before the request...');
    req.headers.set('Authorization', 'Basic ' + localStorage.getItem('token'));
  }

  private _afterCall(req: Request) {
    console.log('After the request...');
    console.log("Request Url: " + req.url);
  }
}