import { Readable, Writable } from 'node:stream'

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

class MultiplyByTenStream extends Writable {
    // chunk - tudo que é enviado no 'this.push'
    // encoding - como a informacao esta codificada
    // callback - funcao chamada ao terminar a stream de escrita
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OneToHundredStream()
    .pipe(new MultiplyByTenStream())