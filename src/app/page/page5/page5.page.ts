import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {
d1
c2
b3
a4
answer5


timeInSeconds
time
runTimer
hasStarted
hasFinished
remainingTime
displayTime
stat
//countdown



  constructor(private route: ActivatedRoute,private router: Router) {
    this.stat=5/15
console.log(this.stat)
    //this.countdown=30100
  }

  goNext() {
    this.router.navigateByUrl("page6")
    this.router.navigate(['/page6'], { queryParams: { answer5: this.answer5,d1:this.d1,c2:this.c2,b3:this.b3,a4:this.a4 } });
   // this.countdown=0;
    //console.log(this.countdown);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.d1 = params.c1
    console.log(this.d1),
    this.c2 = params.b2
    console.log(this.c2)
    this.b3 = params.a3
    console.log(this.b3)
    this.a4 = params.answer4
    console.log(this.a4)

  })

  this.initTimer();
  this. startTimer();

  //setTimeout(() => {
    //this.router.navigateByUrl("page6")
    //this.router.navigate(['/page6'], { queryParams: { answer5: this.answer5,d1:this.d1,c2:this.c2,b3:this.b3,a4:this.a4 } });
//}, this.countdown);

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
