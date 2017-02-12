/**
 * Created by michael on 1/30/17.
 */
import * as firebase from 'firebase';

import {config} from '../config/config';


export const FB = firebase.initializeApp(config.fb);

export const FBauth = firebase.auth;



