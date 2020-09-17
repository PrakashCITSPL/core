declare module "core-os";

interface Core {
  FireEvent  (Request: CoreRequest<string>, success?: Function, fail?: Function) :void;
  FireRequest(Event  : CoreEvent<string>) :void;

  CatchEvent  (...args: any): CoreEvent<string>;
  CatchRequest(...args: any): CoreRequest<string>;

  detachObject (Object: Object): Object;
  processObject(Object: Object): Object;
}

declare interface CoreRequest<request> { _request: request, [key: string]: any}
declare interface CoreRequestConstructor<request> { new (parameters?: any): CoreRequest<request>; }

declare interface CoreEvent<event>   { _event  : event, [key: string]: any}
declare interface CoreEventConstructor<event> { new (parameters?: any): CoreEvent<event>; }