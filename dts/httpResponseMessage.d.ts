/// <reference types="node" />
import { OutgoingHttpHeaders } from "http";
import { HttpContent } from "./content/httpContent";
export declare class HttpResponseMessage {
    private _content;
    private _headers;
    get headers(): OutgoingHttpHeaders;
    set headers(headers: OutgoingHttpHeaders);
    get content(): HttpContent;
    set content(value: HttpContent);
    private _statusCode;
    get statusCode(): number;
    set statusCode(code: number);
    constructor(statusCode?: number);
}
