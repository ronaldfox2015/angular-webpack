import {
  log
} from './util'
import './styles/styles.css'

const me = {
  name: 'juan',
  city: 'bacelona'
}
const you = { ...me
}

const him = me
console.log(you === me)

console.log(him === me)

log('hola mundo')
