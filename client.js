const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });
  conn.on("connect" , () => {
    console.log("Successfully connected to the game server ! ")
    conn.write("Name: SLV")
    
    
    //setInterval( () => { 
      //conn.write("Move: up"); }, 50) 
    
      //conn.write("Move: down") 
    //conn.write("Move: left") 
    //conn.write("Move: right") 

  });
    

  
  conn.on("data" ,(data) => {
    console.log(data)
  });
  
  conn.setEncoding('utf8'); 

  
  
  return conn
}

module.exports = {connect} 