
 export const GetPlayerPosition = (tickInd, playerInd) => {
    if(
      tickInd === playerInd.player1 && tickInd === playerInd.player2 && tickInd === playerInd.player3 && tickInd === playerInd.player4
      ){
      return "four"
    }
    else if(
      (tickInd === playerInd.player1 && tickInd === playerInd.player2 && tickInd === playerInd.player3) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player3 && tickInd === playerInd.player4) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player4 && tickInd === playerInd.player5) ||

      (tickInd === playerInd.player2 && tickInd === playerInd.player3 && tickInd === playerInd.player4) ||
      (tickInd === playerInd.player2 && tickInd === playerInd.player3 && tickInd === playerInd.player5) ||

      (tickInd === playerInd.player3 && tickInd === playerInd.player4 && tickInd === playerInd.player5)
      ){
      return "triple"
    }
    if(
      (tickInd === playerInd.player1 && tickInd === playerInd.player2) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player3) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player4) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player5) ||
      (tickInd === playerInd.player2 && tickInd === playerInd.player3) || 
      (tickInd === playerInd.player2 && tickInd === playerInd.player4) || 
      (tickInd === playerInd.player2 && tickInd === playerInd.player5) || 
      (tickInd === playerInd.player3 && tickInd === playerInd.player4) || 
      (tickInd === playerInd.player4 && tickInd === playerInd.player5)
       ){
      return "double"
    }
    
    else {
      return "single"
    }
  }