import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  c1
  b2
  a3
  answer4


  timeInSeconds
  time
  runTimer
  hasStarted
  hasFinished
  remainingTime
  displayTime
  //countdown



  constructor(private route: ActivatedRoute,private router: Router) {
    //this.countdown=30100
  }

  goNext() {
    this.router.navigateByUrl("page5")
    this.router.navigate(['/page5'], { queryParams: { answer4: this.answer4,c1:this.c1,b2:this.b2,a3:this.a3 } });
    //this.countdown=0;
    //console.log(this.countdown);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.c1 = params.b1
    console.log(this.c1),
    this.b2 = params.a2
    console.log(this.b2)
    this.a3 = params.answer3
    console.log(this.a3)

  })

  this.initTimer();
  this. startTimer();

 //setTimeout(() => {
    //this.router.navigateByUrl("page5")
    //this.router.navigate(['/page5'], { queryParams: { answer4: this.answer4,c1:this.c1,b2:this.b2,a3:this.a3 } });
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
