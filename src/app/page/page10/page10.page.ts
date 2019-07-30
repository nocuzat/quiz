import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.page.html',
  styleUrls: ['./page10.page.scss'],
})
export class Page10Page implements OnInit {
i1
h2
g3
f4
e5
d6
c7
b8
a9 
answer10


timeInSeconds
time
runTimer
hasStarted
hasFinished
remainingTime
displayTime
stat


  constructor(private route: ActivatedRoute,private router: Router) {

    this.stat=10/15
    console.log(this.stat)


  }
 
  goNext() {
    this.router.navigateByUrl("page11")
    this.router.navigate(['/page11'], { queryParams: { answer10: this.answer10,i1:this.i1,h2:this.h2,g3:this.g3,f4:this.f4,e5:this.e5,d6:this.d6,c7:this.c7,b8:this.b8,a9:this.a9 } });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.i1 = params.h1
    console.log(this.i1),
    this.h2 = params.g2
    console.log(this.h2)
    this.g3 = params.f3
    console.log(this.g3)
    this.f4 = params.e4
    console.log(this.f4)
    this.e5 = params.d5
    console.log(this.e5)
    this.d6 = params.c6
    console.log(this.d6)
    this.c7 = params.b7
    console.log(this.c7) 
    this.b8 = params.a8
    console.log(this.b8) 
    this.a9 = params.answer9
    console.log(this.a9)
  })


  this.initTimer();
  this. startTimer();

  //setTimeout(() => {
    //this.router.navigateByUrl("page11")
    //this.router.navigate(['/page11'], { queryParams: { answer10: this.answer10,i1:this.i1,h2:this.h2,g3:this.g3,f4:this.f4,e5:this.e5,d6:this.d6,c7:this.c7,b8:this.b8,a9:this.a9 } });
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
