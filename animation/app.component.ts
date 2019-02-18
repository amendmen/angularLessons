import {
  Component
  // trigger,
  // state,
  // style,
  // transition,
  // animate
} from '@angular/core';
import { trigger, state, transition, animate, style, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted <=> normal', animate(800))
    ]),
  trigger('wildState', [
    state('normal', style({
      'background-color': 'red',
      transform: 'translateX(0) scale(1)',
      borderRadius: '0'
    })),
    state('highlighted', style({
      'background-color': 'blue',
      transform: 'translateX(100px) scale(1)',
      borderRadius: '0'
    })),
    state('shrunked', style({
      'background-color': 'green',
      transform: 'translateX(0) scale(0.5)'
    })),
     transition('normal => highlighted', animate(300)),
    transition('highlighted => normal', animate(800)),
    transition('shrunked <=> *', [
      style({
        'background-color': 'orange'
      }),
      animate(1000, style({
        borderRadius: '50px'
      })),
      animate(500)
    ])
  ]),
  trigger('list1', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0) scale(1)'
    })),    
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate(300)]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }),)])
  ]),
  trigger('list2', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0) scale(1)'
    })),
    transition('void => *', [
      animate(1000, keyframes([
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'translateX(-50px)',
          opacity: 0.5,
          offset: 0.3
        }),
        style({
          transform: 'translateX(-20px)',
          opacity: 1,
          offset: 0.8
        }),
        style({
          transform: 'translateX(0px)',
          opacity: 1,
          offset: 1
        })
      ]))
    ]),
    transition('* => void', [
      group([
        animate(300, style({
          color: 'red'
        })),
        animate(800, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])      
    ])
  ])
]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal'
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState ==='shrunked' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    console.log('shrink mf')
    this.wildState = 'shrunked';
  }
  onAdd(item) {
    this.list.push(item);
  }
  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1)
  }

  animationStart(e) {
    console.log('start')
    console.log(e)
  }
  animationEnded(e) {
    console.log('end')
    console.log(e)
  }
}
