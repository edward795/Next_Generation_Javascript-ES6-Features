import details from './person.js'
import {clean} from './module/utility.js' 
import {data} from './module/utility.js'
import * as bundled from './module/utility'
import {person as details} from './module/utility' 

console.log('Details are:')
console.log("Name",details.name,"\nAge",details.age)

clean() 
console.log(data);