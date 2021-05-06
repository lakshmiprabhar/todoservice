
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {action} from '@ember/object'
export default class ListAddController extends Controller {
@service current;
@action
add() {
this.current.add(this.get('name'));
console.log(this.get('name'));
this.transitionToRoute('list');
}
}