import app from "./app"
import {logger} from "./log/index"
// import {sendMailErroInesperado}from "./service/email"




var port = process.env.PORT || 5000

var server = app.server.listen(port)
    .on('listening',()=> console.log("Server runing in port:"+port))

function grafulshutdown(event){
    return (code)=>{
        console.info(`${event} received! with ${code}`)
        console.log('Closing http server...');
        server.close(()=>{
            console.log('http server close');
            console.log('Closing DB connection...');
            app.closeDb()
            console.log('Sequelize connection close')
            process.exit(code)
        })
    }
}


// --- grafulshutdown
process.on('SIGINT',grafulshutdown('SIGINT'))

process.on('SIGTERM',grafulshutdown('SIGTERM'))


process.on('exit',(code)=>{
    console.log('exit signal received',code)
})


//captura erros não tratados
process.on('uncaughtException',(error,origin)=>{
    const erro = `\n${origin} signal received. \n${error}`
    console.error(erro)
    logger.error(erro)

})

process.on('unhandledRejection',(error,origin)=>{
    const erro =`\n${origin} signal received. \n${error}`
    console.error(erro)
    logger.error(erro)

})







