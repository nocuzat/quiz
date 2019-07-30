import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page14',
  templateUrl: './page14.page.html',
  styleUrls: ['./page14.page.scss'],
})
export class Page14Page implements OnInit {
  m1
  l2
  k3
  j4
  i5
  h6
  g7
  f8
  e9
  d10
  c11
  b12
  a13 
  answer14



  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime
  stat




    constructor(private route: ActivatedRoute,private router: Router) {
      this.stat=14/15
      console.log(this.stat)


    }
   
    goNext() {
      this.router.navigateByUrl("page15")
      this.router.navigate(['/page15'], { queryParams: { answer14: this.answer14,m1:this.m1,l2:this.l2,k3:this.k3,j4:this.j4,i5:this.i5,h6:this.h6,g7:this.g7,f8:this.f8,e9:this.e9,d10:this.d10,c11:this.c11,b12:this.b12,a13:this.a13 } });
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.m1 = params.l1
      console.log(this.m1),
      this.l2 = params.k2
      console.log(this.l2)
      this.k3 = params.j3
      console.log(this.k3)
      this.j4 = params.i4
      console.log(this.j4)
      this.i5 = params.h5
      console.log(this.i5)
      this.h6 = params.g6
      console.log(this.h6)
      this.g7 = params.f7
      console.log(this.g7) 
      this.f8 = params.e8
      console.log(this.f8) 
      this.e9 = params.d9
      console.log(this.e9) 
      this.d10 = params.c10
      console.log(this.d10) 
      this.c11 = params.b11
      console.log(this.c11) 
      this.b12 = params.a12
      console.log(this.b12) 
      this.a13 = params.answer13
      console.log(this.a13)
    })

    this.initTimer();
    this. startTimer();
  
    //setTimeout(() => {
      //this.router.navigateByUrl("page15")
      //this.router.navigate(['/page15'], { queryParams: { answer14: this.answer14,m1:this.m1,l2:this.l2,k3:this.k3,j4:this.j4,i5:this.i5,h6:this.h6,g7:this.g7,f8:this.f8,e9:this.e9,d10:this.d10,c11:this.c11,b12:this.b12,a13:this.a13 } });
  //}, 30100);


    }
    initTimer() {
      // Pomodoro is usually for 25 minutes
     if (!this.timeInSeconds) { 
       this.timeInSeconds = 30; 
     }
    
     this.time = this.timeInSeconds;
     this.runTimer = false;
     this.hasStarted = false;
     this.hasFinished = false;
     this.remainingTime = this.timeInSeconds;
     
     this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
    }
    
    startTimer() {
      this.runTimer = true;
     this.hasStarted = true;
     this.timerTick();
    }
    
    pauseTimer() {
     this.runTimer = false;
    }
    
    resumeTimer() {
     this.startTimer();
    }
    
    timerTick() {
     setTimeout(() => {
    
       if (!this.runTimer) { return; }
       this.remainingTime--;
       this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
       if (this.remainingTime > 0) {
         this.timerTick();
       }
       else {
         this.hasFinished = true;
       }
     }, 1000);
    }
    
    getSecondsAsDigitalClock(inputSeconds: number) {
     var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
     var hours = Math.floor(sec_num / 3600);
     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
     var seconds = sec_num - (hours * 3600) - (minutes * 60);
     var hoursString = '';
     var minutesString = '';
     var secondsString = '';
     hoursString = (hours < 10) ? "0" + hours : hours.toString();
     minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
     secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
     return hoursString + ':' + minutesString + ':' + secondsString;
    }
}
