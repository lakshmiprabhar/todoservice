import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {set} from '@ember/object';
import {action} from '@ember/object';
export default class ListEditController extends Controller {
@service current;
@action
show(item)
{
console.log(this.get("current").items[item-1]);
set(this.get("current").items[item-1],"description",this.get('name'));



}

}