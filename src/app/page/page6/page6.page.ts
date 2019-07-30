import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.page.html',
  styleUrls: ['./page6.page.scss'],
})
export class Page6Page implements OnInit {
  e1
  d2
  c3
  b4
  a5
answer6


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

    this.stat=6/15
    console.log(this.stat)


    //this.countdown=30100
  }
  
    goNext() {
      this.router.navigateByUrl("page7")
      this.router.navigate(['/page7'], { queryParams: { answer6: this.answer6,e1:this.e1,d2:this.d2,c3:this.c3,b4:this.b4,a5:this.a5 } });
      //this.countdown=0
      //console.log(this.countdown);
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.e1 = params.d1
      console.log(this.e1),
      this.d2 = params.c2
      console.log(this.d2)
      this.c3 = params.b3
      console.log(this.c3)
      this.b4 = params.a4
      console.log(this.b4)
      this.a5 = params.answer5
      console.log(this.a5)
    })

    this.initTimer();
    this. startTimer();
  
   //setTimeout(() => {
      //this.router.navigateByUrl("page7")
      //this.router.navigate(['/page7'], { queryParams: { answer6: this.answer6,e1:this.e1,d2:this.d2,c3:this.c3,b4:this.b4,a5:this.a5 } });
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
