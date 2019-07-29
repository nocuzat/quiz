import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.page.html',
  styleUrls: ['./page9.page.scss'],
})
export class Page9Page implements OnInit {
  h1
  g2
  f3
  e4
  d5
  c6
  b7
  a8 
  answer9


  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime




  constructor(private route: ActivatedRoute,private router: Router) {}
 
  goNext() {
    this.router.navigateByUrl("page10")
    this.router.navigate(['/page10'], { queryParams: { answer9: this.answer9,h1:this.h1,g2:this.g2,f3:this.f3,e4:this.e4,d5:this.d5,c6:this.c6,b7:this.b7,a8:this.a8 } });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.h1 = params.g1
    console.log(this.h1),
    this.g2 = params.f2
    console.log(this.g2)
    this.f3 = params.e3
    console.log(this.f3)
    this.e4 = params.d4
    console.log(this.e4)
    this.d5 = params.c5
    console.log(this.d5)
    this.c6 = params.b6
    console.log(this.c6)
    this.b7 = params.a7
    console.log(this.b7) 
    this.a8 = params.answer8
    console.log(this.a8)  
  })


  this.initTimer();
  this. startTimer();

  //setTimeout(() => {
    //this.router.navigateByUrl("page10")
    //this.router.navigate(['/page10'], { queryParams: { answer9: this.answer9,h1:this.h1,g2:this.g2,f3:this.f3,e4:this.e4,d5:this.d5,c6:this.c6,b7:this.b7,a8:this.a8 } });
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
