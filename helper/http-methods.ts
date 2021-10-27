
const request = require('supertest');

import * as dotenv from 'dotenv';
dotenv.config();

class HttpMethods {

    static async get(endpoint: string, host = process.env.HOST) {
        let req = await request(host).get(endpoint)
        try { console.log(`${req.request.method}: ${req.request.url}   ${req.statusCode}`) } catch (e) { console.log("ERRO :" + e) }
        return req
    }

} export = HttpMethods

