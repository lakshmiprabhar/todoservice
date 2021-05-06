import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class CurrentService extends Service {
@tracked count='';
items=[{
id:1,
description: 'project work'
},
{
id:2,
description: 'meeting'
},
{
id:3,
description: 'team meeting'
},
{
id:4,
description: 'work1'
},
{
id:5,
description:'work2'
}];

add(item) {
this.items.pushObject({ 'id': [this.items.length+1], 'description': [ item]});
console.log(item);
}
remove(item) {
this.items.removeObject(item);
}
addItem(item)
{
this.count=item;
}
}