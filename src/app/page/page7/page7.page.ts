import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.page.html',
  styleUrls: ['./page7.page.scss'],
})
export class Page7Page implements OnInit {
f1
e2
d3
c4
b5
a6 
answer7


timeInSeconds
time
runTimer
hasStarted
hasFinished
remainingTime
displayTime
stat


  constructor(private route: ActivatedRoute,private router: Router) {

    this.stat=7/15
    console.log(this.stat)

    //this.countdown=30100
  }
 
  goNext() {
    this.router.navigateByUrl("page8")
    this.router.navigate(['/page8'], { queryParams: { answer7: this.answer7,f1:this.f1,e2:this.e2,d3:this.d3,c4:this.c4,b5:this.b5,a6:this.a6 } });
   // this.countdown=0;
   // console.log(this.countdown);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.f1 = params.e1
    console.log(this.f1),
    this.e2 = params.d2
    console.log(this.e2)
    this.d3 = params.c3
    console.log(this.d3)
    this.c4 = params.b4
    console.log(this.c4)
    this.b5 = params.a5
    console.log(this.b5)
    this.a6 = params.answer6
    console.log(this.a6)  
  })

  this.initTimer();
  this. startTimer();

  //setTimeout(() => {
    //this.router.navigateByUrl("page8")
   //this.router.navigate(['/page8'], { queryParams: { answer7: this.answer7,f1:this.f1,e2:this.e2,d3:this.d3,c4:this.c4,b5:this.b5,a6:this.a6 } });
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

