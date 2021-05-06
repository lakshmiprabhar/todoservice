import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';

export default class ListController extends Controller {
@service current;
@action
remove(item) {
this.current.remove(item);
}
@action
addItemlist(item)
{
this.current.addItem(item);
}
}