import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  board !:Array<string>

  constructor(private location: Location) {}


  ngOnInit(): void {
    this.board = new Array(9).fill('')
  }





  audio: any;



  reset() {
    window.location.reload();
  }




  handler(index: number){
    this.board[index] = this.player_turn
    this.player_turn = (this.player_turn == 'x') ? '0':'x';

    if(this.player_turn == "0"){
      this.audio = new Audio();
      this.audio.src = '../assets/sounds/KrvzMskVgYafWlNF_1681045654.mp3';
      this.audio.load();
      // auto-start
      this.audio.play();
      this.audio = null;
    } else if(this.player_turn == "x") {
      this.audio = new Audio();
      this.audio.src = '../assets/sounds/VlscbGLvZDTAHBRy_1681045714.mp3';
      this.audio.load();
      // auto-start
      this.audio.play();
      this.audio = null;
    }






    for(let i = 0 ; i<this.winningBorder.length; i++){
      let winningCheck = this.winningBorder[i];
      let p1 = winningCheck[0];
      let p2 = winningCheck[1];
      let p3 = winningCheck[2];

      if(this.board[p1]!= '' && this.board[p1]==this.board[p2] && this.board[p2]==this.board[p3]
      && this.board[p1]==this.board[p3] ){
 




        setTimeout(() =>{
          this.audio = new Audio();
          this.audio.src = '../assets/sounds/YLEuVqUvHaMksKRr_1681046031.mp3';
          this.audio.load();
          // auto-start
          this.audio.play();
          this.audio = null;
        }, 1000);




      }



    }
  }


  player_turn = "x"
  winningBorder =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8]
  ]


}
