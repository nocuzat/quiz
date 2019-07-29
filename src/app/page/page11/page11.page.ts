import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page11',
  templateUrl: './page11.page.html',
  styleUrls: ['./page11.page.scss'],
})
export class Page11Page implements OnInit {
  j1
  i2
  h3
  g4
  f5
  e6
  d7
  c8
  b9
  a10 
  answer11


  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime



    constructor(private route: ActivatedRoute,private router: Router) {}
   
    goNext() {
      this.router.navigateByUrl("page12")
      this.router.navigate(['/page12'], { queryParams: { answer11: this.answer11,j1:this.j1,i2:this.i2,h3:this.h3,g4:this.g4,f5:this.f5,e6:this.e6,d7:this.d7,c8:this.c8,b9:this.b9,a10:this.a10 } });
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.j1 = params.i1
      console.log(this.j1),
      this.i2 = params.h2
      console.log(this.i2)
      this.h3 = params.g3
      console.log(this.h3)
      this.g4 = params.f4
      console.log(this.g4)
      this.f5 = params.e5
      console.log(this.f5)
      this.e6 = params.d6
      console.log(this.e6)
      this.d7 = params.c7
      console.log(this.d7) 
      this.c8 = params.b8
      console.log(this.c8) 
      this.b9 = params.a9
      console.log(this.b9) 
      this.a10 = params.answer10
      console.log(this.a10)
    })

    this.initTimer();
    this. startTimer();
  
    //setTimeout(() => {
      //this.router.navigateByUrl("page12")
     // this.router.navigate(['/page12'], { queryParams: { answer11: this.answer11,j1:this.j1,i2:this.i2,h3:this.h3,g4:this.g4,f5:this.f5,e6:this.e6,d7:this.d7,c8:this.c8,b9:this.b9,a10:this.a10 } });
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
