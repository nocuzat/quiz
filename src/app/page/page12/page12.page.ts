import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.page.html',
  styleUrls: ['./page12.page.scss'],
})
export class Page12Page implements OnInit {
  k1
  j2
  i3
  h4
  g5
  f6
  e7
  d8
  c9
  b10
  a11 
  answer12


  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime
  stat



    constructor(private route: ActivatedRoute,private router: Router) {
      this.stat=12/15
      console.log(this.stat)
    }
   
    goNext() {
      this.router.navigateByUrl("page13")
      this.router.navigate(['/page13'], { queryParams: { answer12: this.answer12,k1:this.k1,j2:this.j2,i3:this.i3,h4:this.h4,g5:this.g5,f6:this.f6,e7:this.e7,d8:this.d8,c9:this.c9,b10:this.b10,a11:this.a11 } });
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.k1 = params.j1
      console.log(this.k1),
      this.j2 = params.i2
      console.log(this.j2)
      this.i3 = params.h3
      console.log(this.i3)
      this.h4 = params.g4
      console.log(this.h4)
      this.g5 = params.f5
      console.log(this.g5)
      this.f6 = params.e6
      console.log(this.f6)
      this.e7 = params.d7
      console.log(this.e7) 
      this.d8 = params.c8
      console.log(this.d8) 
      this.c9 = params.b9
      console.log(this.c9) 
      this.b10 = params.a10
      console.log(this.b10) 
      this.a11 = params.answer11
      console.log(this.a11)
    })


    this.initTimer();
    this. startTimer();
  
   // setTimeout(() => {
      //this.router.navigateByUrl("page13")
      //this.router.navigate(['/page13'], { queryParams: { answer12: this.answer12,k1:this.k1,j2:this.j2,i3:this.i3,h4:this.h4,g5:this.g5,f6:this.f6,e7:this.e7,d8:this.d8,c9:this.c9,b10:this.b10,a11:this.a11 } });
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
