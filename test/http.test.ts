import run from '../app';
import { Server } from 'http'
import requst from 'supertest'
describe('http', () => {
    let server: Server
    beforeAll(() => {
        server = run(3333)
    })
    it('GET /admin', () => {
        return requst(server)
            .get('/admin')
            .expect(200)
            .then(res => {
                console.log(res.body)
                // expect(res.body).toStrictEqual('888888888888')
            })
    })
    afterAll(() => {
        server.close()
    })
})