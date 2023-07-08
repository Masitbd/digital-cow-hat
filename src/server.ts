import { Server } from 'http'
import Mongoose from 'mongoose'
import app from './app'
import config from './config'

process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

let server: Server

async function bootstrup() {
  try {
    await Mongoose.connect(config.database_url as string)

    console.log('Dataabase is connectes successfully')

    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`)
    })

    // app.listen(config.port, () => {
    //   console.log(`application listening on port ${config.port}`)
    // })
  } catch (err) {
    console.log('Fail to connect database', err)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrup()

// process.on('SIGTERM', () => {
//   console.log('SIGTERM is received')
//   if (server) {
//     server.close()
//   }
// })
