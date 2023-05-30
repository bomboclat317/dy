import mime from '@dynamic-pkg/mime';
import * as path from 'path-browserify';
import * as idb from 'idb';
import * as base64 from '@dynamic-pkg/base64';
import { parse } from '@dynamic-pkg/acorn';
import bare from '@dynamic-pkg/bare-client';
import * as cookie from '@dynamic-pkg/cookie';
import * as setCookieParser from 'set-cookie-parser'
import { generate } from '@dynamic-pkg/astring';
import * as htmlparser2 from 'htmlparser2';
import * as domhandler from 'domhandler';
import * as domserializer from 'dom-serializer';
import * as parse5 from 'parse5';
//import mutation from '@dynamic-pkg/mutation';

class DynamicModules {
  mime = mime;
  idb = idb;
  path = path;
  acorn = { parse };
  bare = bare;
  base64 = base64;
  estree = { generate };
  cookie = {...cookie, serialize: (...args: any) => { try {return cookie.serialize.apply({}, args)} catch(e) {console.log(e);}}};
  setCookieParser = setCookieParser;
  //htmlparser2 = htmlparser2;
  //domhandler = domhandler;
  //domserializer = domserializer;
  parse5 = parse5;
  //mutation = mutation;

  ctx;

  constructor(ctx:any) {
    this.ctx = ctx;
  }
}

export default DynamicModules;