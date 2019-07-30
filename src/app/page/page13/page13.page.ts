import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page13',
  templateUrl: './page13.page.html',
  styleUrls: ['./page13.page.scss'],
})
export class Page13Page implements OnInit {
  l1
  k2
  j3
  i4
  h5
  g6
  f7
  e8
  d9
  c10
  b11
  a12 
  answer13


  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime
  stat



    constructor(private route: ActivatedRoute,private router: Router) {
      this.stat=13/15
      console.log(this.stat)
    }
   
    goNext() {
      this.router.navigateByUrl("page14")
      this.router.navigate(['/page14'], { queryParams: { answer13: this.answer13,l1:this.l1,k2:this.k2,j3:this.j3,i4:this.i4,h5:this.h5,g6:this.g6,f7:this.f7,e8:this.e8,d9:this.d9,c10:this.c10,b11:this.b11,a12:this.a12 } });
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.l1 = params.k1
      console.log(this.l1),
      this.k2 = params.j2
      console.log(this.k2)
      this.j3 = params.i3
      console.log(this.j3)
      this.i4 = params.h4
      console.log(this.i4)
      this.h5 = params.g5
      console.log(this.h5)
      this.g6 = params.f6
      console.log(this.g6)
      this.f7 = params.e7
      console.log(this.f7) 
      this.e8 = params.d8
      console.log(this.e8) 
      this.d9 = params.c9
      console.log(this.d9) 
      this.c10 = params.b10
      console.log(this.c10) 
      this.b11 = params.a11
      console.log(this.b11) 
      this.a12 = params.answer12
      console.log(this.a12)
    })

    this.initTimer();
    this. startTimer();
  
    //setTimeout(() => {
      //this.router.navigateByUrl("page14")
      //this.router.navigate(['/page14'], { queryParams: { answer13: this.answer13,l1:this.l1,k2:this.k2,j3:this.j3,i4:this.i4,h5:this.h5,g6:this.g6,f7:this.f7,e8:this.e8,d9:this.d9,c10:this.c10,b11:this.b11,a12:this.a12 } });
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
