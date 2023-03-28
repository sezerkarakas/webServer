const http = require("http")

const server = http.createServer((req,res) => {
    let url = req.url
    if(url === "/"){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write("<h2>Ana sayfa</h2>")
        res.write("<a href='/hakkimda'>Hakkimda</a>")
        res.write("<br>")
        res.write("<a href='/iletisim'>Iletisim</a>")
        
    }else if(url === "/hakkimda"){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write("<a href='/'>Ana sayfa</a>")
        res.write("<h2>Hakkimda sayfasi</h2>")
        
    }else if(url === "/iletisim"){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write("<a href='/'>Ana sayfa</a>")
        res.write("<h2>Iletisim sayfasi</h2>")
        
    }else{
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.write("404 not found")
        
    }
    res.end()
})

const port = 5000

server.listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor.`)
})