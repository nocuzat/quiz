import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page15',
  templateUrl: './page15.page.html',
  styleUrls: ['./page15.page.scss'],
})
export class Page15Page implements OnInit {
  n1
  m2
  l3
  k4
  j5
  i6
  h7
  g8
  f9
  e10
  d11
  c12
  b13
  a14 
  answer15



  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime




    constructor(private route: ActivatedRoute,private router: Router) {}
   
    goNext() {
      this.router.navigateByUrl("results")
      this.router.navigate(['/results'], { queryParams: { answer15: this.answer15,n1:this.n1,m2:this.m2,l3:this.l3,k4:this.k4,j5:this.j5,i6:this.i6,h7:this.h7,g8:this.g8,f9:this.f9,e10:this.e10,d11:this.d11,c12:this.c12,b13:this.b13,a14:this.a14 } });
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.n1 = params.m1
      console.log(this.n1),
      this.m2 = params.l2
      console.log(this.m2)
      this.l3 = params.k3
      console.log(this.l3)
      this.k4 = params.j4
      console.log(this.k4)
      this.j5 = params.i5
      console.log(this.j5)
      this.i6 = params.h6
      console.log(this.i6)
      this.h7 = params.g7
      console.log(this.h7) 
      this.g8 = params.f8
      console.log(this.g8) 
      this.f9 = params.e9
      console.log(this.f9) 
      this.e10 = params.d10
      console.log(this.e10) 
      this.d11 = params.c11
      console.log(this.d11) 
      this.c12 = params.b12
      console.log(this.c12) 
      this.b13 = params.a13
      console.log(this.b13)
      this.a14 = params.answer14
      console.log(this.a14)
    })



    this.initTimer();
    this. startTimer();
  
    //setTimeout(() => {
      //this.router.navigateByUrl("results")
      //this.router.navigate(['/results'], { queryParams: { answer15: this.answer15,n1:this.n1,m2:this.m2,l3:this.l3,k4:this.k4,j5:this.j5,i6:this.i6,h7:this.h7,g8:this.g8,f9:this.f9,e10:this.e10,d11:this.d11,c12:this.c12,b13:this.b13,a14:this.a14 } });
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
