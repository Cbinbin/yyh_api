const WebSocket = require('ws')
  , url = require('url')
  , http = require('http')

function wsocket(app) {
  const server = http.createServer(app)
    , wss = new WebSocket.Server({ 
      clientTracking: true,
      server: server
    })
  wss.on('connection', (ws)=> {
    const location = url.parse(ws.upgradeReq.url, true)

    ws.send('Welcome to room!')

    ws.on('message', (data)=> {
      wss.clients.forEach((client)=> { 
        client.send(data)
        console.log('Client:' + data)
      })
    })
    
    ws.on('error', (wsError)=> {
      console.log(wsError)
    })
    ws.on('close', (code)=> {
      console.log(code)
    })
  })

  wss.on('error', ()=> {
    console.log('something error');
  })

  return server
}

module.exports = wsocket