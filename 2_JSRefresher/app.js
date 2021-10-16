import person from './person.js';
import p from './person.js';

console.log(p);

// import as individual object
// import { hobby } from './utility.js';
// import { introduce } from './utility.js'

// or 
import { introduce as hi, hobby } from './utility.js'

// or
import * as util from './utility';

hobby;
introduce();
hi();
util.introduce();

