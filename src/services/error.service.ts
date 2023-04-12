export const StatusCodes = {
  ACCEPTED: {
    status: 202,
    message:
      'The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.3.3',
    deprecated: false,
  },
  BAD_GATEWAY: {
    status: 502,
    message:
      'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
    deprecated: false,
  },
  BAD_REQUEST: {
    status: 400,
    message: 'This response means that server could not understand the request due to invalid syntax.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.8',
    deprecated: false,
  },
  CONFLICT: {
    status: 409,
    message: 'This response is sent when a request conflicts with the current state of the server.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.8',
    deprecated: false,
  },
  CONTINUE: {
    status: 100,
    message:
      'This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.2.1',
    deprecated: false,
  },
  CREATED: {
    status: 201,
    message:
      'The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.3.2',
    deprecated: false,
  },
  EXPECTATION_FAILED: {
    status: 417,
    message: "This response code means the expectation indicated by the Expect request header field can't be met by the server.",
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.14',
    deprecated: false,
  },
  FAILED_DEPENDENCY: {
    status: 424,
    message: 'The request failed due to failure of a previous request.',
    doc: 'https://tools.ietf.org/html/rfc2518#section-10.5',
    deprecated: false,
  },
  FORBIDDEN: {
    status: 403,
    message:
      "The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.",
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.3',
    deprecated: false,
  },
  GATEWAY_TIMEOUT: {
    status: 504,
    message: 'This error response is given when the server is acting as a gateway and cannot get a response in time.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.6.5',
    deprecated: false,
  },
  GONE: {
    status: 410,
    message:
      'This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.9',
    deprecated: false,
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    status: 505,
    message: 'The HTTP version used in the request is not supported by the server.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.6.6',
    deprecated: false,
  },
  IM_A_TEAPOT: {
    status: 418,
    message:
      'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
    doc: 'https://tools.ietf.org/html/rfc2324#section-2.3.2',
    deprecated: false,
  },
  INSUFFICIENT_SPACE_ON_RESOURCE: {
    status: 419,
    message:
      'The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.',
    doc: 'https://tools.ietf.org/html/rfc2518#section-10.6',
    deprecated: false,
  },
  INSUFFICIENT_STORAGE: {
    status: 507,
    message:
      'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
    doc: 'https://tools.ietf.org/html/rfc2518#section-10.6',
    deprecated: false,
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.6.1',
    deprecated: false,
  },
  LENGTH_REQUIRED: {
    status: 411,
    message: 'The server rejected the request because the Content-Length header field is not defined and the server requires it.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.10',
    deprecated: false,
  },
  LOCKED: {
    status: 423,
    message: 'The resource that is being accessed is locked.',
    doc: 'https://tools.ietf.org/html/rfc2518#section-10.4',
    deprecated: false,
  },
  METHOD_FAILURE: {
    status: 420,
    message: 'A deprecated response used by the Spring Framework when a method has failed.',
    doc: 'https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt',
    deprecated: true,
  },
  METHOD_NOT_ALLOWED: {
    status: 405,
    message:
      'The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.5',
    deprecated: false,
  },
  MOVED_PERMANENTLY: {
    status: 301,
    message: 'This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.4.2',
    deprecated: false,
  },
  MOVED_TEMPORARILY: {
    status: 302,
    message:
      'This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.4.3',
    deprecated: false,
  },
  MULTI_STATUS: {
    status: 207,
    message:
      'A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.',
    doc: 'https://tools.ietf.org/html/rfc2518#section-10.2',
    deprecated: false,
  },
  MULTIPLE_CHOICES: {
    status: 300,
    message:
      'The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.4.1',
    deprecated: false,
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    status: 511,
    message: 'The 511 status code indicates that the client needs to authenticate to gain network access.',
    doc: 'https://tools.ietf.org/html/rfc6585#section-6',
    deprecated: false,
  },
  NO_CONTENT: {
    status: 204,
    message:
      'There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.3.5',
    deprecated: false,
  },
  NON_AUTHORITATIVE_INFORMATION: {
    status: 203,
    message:
      'This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.3.4',
    deprecated: false,
  },
  NOT_ACCEPTABLE: {
    status: 406,
    message:
      "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.",
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.6',
    deprecated: false,
  },
  NOT_FOUND: {
    status: 404,
    message: 'The server can not find requested resource.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.4',
    deprecated: false,
  },
  NOT_IMPLEMENTED: {
    status: 501,
    message: 'The request method is not supported by the server and cannot be handled.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.6.2',
    deprecated: false,
  },
  NOT_MODIFIED: {
    status: 304,
    message:
      'This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.',
    doc: 'https://tools.ietf.org/html/rfc7232#section-4.1',
    deprecated: false,
  },
  OK: {
    status: 200,
    message: 'The request has succeeded.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.3.1',
    deprecated: false,
  },
  PARTIAL_CONTENT: {
    status: 206,
    message: 'This response code is used because of range header sent by the client to separate download into multiple streams.',
    doc: 'https://tools.ietf.org/html/rfc7233#section-4.1',
    deprecated: false,
  },
  PAYMENT_REQUIRED: {
    status: 402,
    message:
      'This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.2',
    deprecated: false,
  },
  PERMANENT_REDIRECT: {
    status: 308,
    message:
      'This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.',
    doc: 'https://tools.ietf.org/html/rfc7538#section-3',
    deprecated: false,
  },
  PRECONDITION_FAILED: {
    status: 412,
    message: 'The client has indicated preconditions in its headers which the server does not meet.',
    doc: 'https://tools.ietf.org/html/rfc7232#section-4.2',
    deprecated: false,
  },
  PRECONDITION_REQUIRED: {
    status: 428,
    message: 'The origin server requires the request to be conditional.',
    doc: 'https://tools.ietf.org/html/rfc6585#section-3',
    deprecated: false,
  },
  PROCESSING: {
    status: 102,
    message: 'This code indicates that the server has received and is processing the request, but no response is available yet.',
    doc: 'https://tools.ietf.org/html/rfc2518#section-10.1',
    deprecated: false,
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    status: 407,
    message: 'This is similar to 401 but authentication is needed to be done by a proxy.',
    doc: 'https://tools.ietf.org/html/rfc7235#section-3.2',
    deprecated: false,
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    status: 431,
    message: 'The server is unwilling to process the request because its header fields are too large.',
    doc: 'https://tools.ietf.org/html/rfc6585#section-5',
    deprecated: false,
  },
  REQUEST_TIMEOUT: {
    status: 408,
    message: 'This response is sent on an idle connection by some servers, even without any previous request by the client.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.7',
    deprecated: false,
  },
  REQUEST_TOO_LONG: {
    status: 413,
    message:
      'Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.11',
    deprecated: false,
  },
  REQUEST_URI_TOO_LONG: {
    status: 414,
    message: 'The URI requested by the client is longer than the server is willing to interpret.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.12',
    deprecated: false,
  },
  REQUESTED_RANGE_NOT_SATISFIABLE: {
    status: 416,
    message:
      "The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.",
    doc: 'https://tools.ietf.org/html/rfc7233#section-4.4',
    deprecated: false,
  },
  RESET_CONTENT: {
    status: 205,
    message: 'This response code is sent after accomplishing request to tell user agent reset document view which sent this request.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.3.6',
    deprecated: false,
  },
  SEE_OTHER: {
    status: 303,
    message: 'Server sent this response to directing client to get requested resource to another URI with an GET request.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.4.4',
    deprecated: false,
  },
  SERVICE_UNAVAILABLE: {
    status: 503,
    message: 'The server is not ready to handle the request.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.6.4',
    deprecated: false,
  },
  SWITCHING_PROTOCOLS: {
    status: 101,
    message:
      'This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.2.2',
    deprecated: false,
  },
  TEMPORARY_REDIRECT: {
    status: 307,
    message:
      'Server sent this response to directing client to get requested resource to another URI with same method that used prior request.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.4.7',
    deprecated: false,
  },
  TOO_MANY_REQUESTS: {
    status: 429,
    message: 'The user has sent too many requests in a given amount of time ("rate limiting").',
    doc: 'https://tools.ietf.org/html/rfc6585#section-4',
    deprecated: false,
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Unauthenticated. The client must authenticate itself to get the requested response.',
    doc: 'https://tools.ietf.org/html/rfc7235#section-3.1',
    deprecated: false,
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    status: 451,
    message: 'The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.',
    doc: 'https://tools.ietf.org/html/rfc7725',
    deprecated: false,
  },
  UNPROCESSABLE_ENTITY: {
    status: 422,
    message: 'The request was well-formed but was unable to be followed due to semantic errors.',
    doc: 'https://tools.ietf.org/html/rfc2518#section-10.3',
    deprecated: false,
  },
  UNSUPPORTED_MEDIA_TYPE: {
    status: 415,
    message: 'The media format of the requested data is not supported by the server, so the server is rejecting the request.',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.5.13',
    deprecated: false,
  },
  USE_PROXY: {
    status: 305,
    message:
      'Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy',
    doc: 'https://tools.ietf.org/html/rfc7231#section-6.4.6',
    deprecated: true,
  },
  MISDIRECTED_REQUEST: {
    status: 421,
    message:
      'Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.',
    doc: 'https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2',
    deprecated: false,
  },
};

export interface ErrorResponse {
  status: number;
  message: string;
  detail: string;
}

export class ErrorService extends Error {
  public response: ErrorResponse;

  constructor(error: { status: number; message: string }, detail: string = undefined, ...args: string[]) {
    super(...args);
    if (error) {
      this.response = { status: error.status, message: error.message, detail: detail };
    }
  }
}
