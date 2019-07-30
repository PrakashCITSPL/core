declare module "core-os";

interface Core {
  FireEvent  (Request: CoreRequest, success?: Function, fail?: Function) :void;
  FireRequest(Event  : CoreEvent) :void;

  CatchEvent  (...args: any): CoreEvent;
  CatchRequest(...args: any): CoreRequest;

  detachObject (Object: Object): Object;
  processObject(Object: Object): Object;
}

declare interface CoreRequest { _request: string, [key: string]: any}
declare interface CoreEvent   { _event  : string, [key: string]: any}