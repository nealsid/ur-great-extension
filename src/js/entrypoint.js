/* global
   $
*/
'use strict';

import {CoolClass} from './someothermodule';
import './../css/extension.css';
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

$.jqueryMagic();
const c = new CoolClass(); // eslint-disable-line no-unused-vars

