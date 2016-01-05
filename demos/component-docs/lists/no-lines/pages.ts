import {Page} from 'ionic/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
    templateUrl: 'lists/no-lines/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class NoLinesPage {
    constructor() {

    }
}