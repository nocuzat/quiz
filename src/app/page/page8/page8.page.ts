import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.page.html',
  styleUrls: ['./page8.page.scss'],
})
export class Page8Page implements OnInit {
  g1
  f2
  e3
  d4
  c5
  b6
  a7 
  answer8


  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime
  stat



  
  constructor(private route: ActivatedRoute,private router: Router) {
    this.stat=8/15
    console.log(this.stat)

  }
 
  goNext() {
    this.router.navigateByUrl("page9")
    this.router.navigate(['/page9'], { queryParams: { answer8: this.answer8,g1:this.g1,f2:this.f2,e3:this.e3,d4:this.d4,c5:this.c5,b6:this.b6,a7:this.a7 } });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.g1 = params.f1
    console.log(this.g1),
    this.f2 = params.e2
    console.log(this.f2)
    this.e3 = params.d3
    console.log(this.e3)
    this.d4 = params.c4
    console.log(this.d4)
    this.c5 = params.b5
    console.log(this.c5)
    this.b6 = params.a6
    console.log(this.b6)
    this.a7 = params.answer7
    console.log(this.a7)  
  })

  this.initTimer();
  this. startTimer();

  //setTimeout(() => {
    //this.router.navigateByUrl("page9")
    //this.router.navigate(['/page9'], { queryParams: { answer8: this.answer8,g1:this.g1,f2:this.f2,e3:this.e3,d4:this.d4,c5:this.c5,b6:this.b6,a7:this.a7 } });
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
