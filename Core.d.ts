// Type definitions for core-os
// Project: core-os
// Definitions by: Alex Murzina alexandramourzina@gmail.com

export interface CoreEvent {
  _event: string;
  [name: string]: any
}

export interface CoreRequest {
  _request: string;
  [name: string]: any
}

export function FireEvent(Event: CoreEvent): null;
export function FireRequest(Request: CoreRequest, success?: Function, fail?: Function): null;

export function CatchRequest(...Requests: CoreRequest[]): CoreRequest;
export function CatchEvent(Event: CoreEvent): null;

export function processObject(Object: Object): Object;