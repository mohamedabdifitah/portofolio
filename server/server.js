import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {graphqlServer} from "./schema/graphqlSchema.js";
import  {createReadStream}  from 'fs';
import  path from 'path';
import 'dotenv/config' ;
import { dirname } from 'path'; 
import { fileURLToPath } from 'url';
import http from 'http';
import helmet from "helmet";
import morgan from "morgan";
import  winston from "winston";
import { ConnectDB } from "./config/db.js";

// connecting databse 
ConnectDB();

// setting port 
const port = 5000 || process.env.PORT;
const app = express();
/*
 middlewares 
*/
app.use(cors({origin: true, credentials: true}));

// cors for dev app.use(cors());

// logger
/*
This article does an excellent job for what you want to do.

http://tostring.it/2014/06/23/advanced-logging-with-nodejs/
*/
/*
var logger = winston.createLogger({ 
  transports: [
    new winston.transports.File({
    level: 'info', 
    filename: './logs/all-logs.log',
    handleExceptions: true,
    json: true, maxsize: 5242880, //5MB 
    maxFiles: 5,
    colorize: false
    }), 
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
      })
      ], 
      exitOnError: false
}); 
logger.stream = { 
  write: function(message, encoding){
    logger.info(message); 
  } 
}; 
//app.use(require("morgan")("combined));

app.use(morgan('combined', { "stream": logger.stream }));
*/
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(helmet());
//app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
app.use(express.json());
app.use(cookieParser());
/*
  Graphql Endpoint 
*/
app.use("/graphql",graphqlServer);

/*
 create server
*/
const server = http.createServer(app);

/*
  server running
*/
server.listen(port,(err)=>{
  if(err){
    console.log(err);
  }
  console.log(`app listening port ${port}`);
});