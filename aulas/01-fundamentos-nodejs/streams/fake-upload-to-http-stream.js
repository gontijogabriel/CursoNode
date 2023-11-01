import { Readable } from 'node:stream'


class OneToHundredStream extends Readable {
    index = 1

    _read(){
        const i = this.index++
        
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buff = Buffer.from(String(i))

                this.push(buff)
            }
        }, 1000)
            
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Defina o tipo de conteúdo adequado
      },
    body: new OneToHundredStream(),
}).then(response => {
    response.text().then(data => {
        console.log(data)
    })
})