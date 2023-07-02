import {getSums} from './common'

console.log(getSums('input/input.txt').sort((a,b)=>b-a).slice(0,3).reduce<number>((acc,curr)=>acc+curr,0))
