interface Core {
  FireEvent  (Request: CoreRequest, success?: Function, fail?: Function) :void;
  FireRequest(Event  : CoreEvent) :void;

  CatchEvent(...args: any)  : CoreRequest;
  CatchRequest(...args: any): CoreRequest;

  detachObject (Object: Object): Object;
  processObject(Object: Object): Object;
}

declare type CoreRequest = { _request: string } & {[key: string]: any};
declare type CoreEvent   = { _event  : string } & {[key: string]: any};