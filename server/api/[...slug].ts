import { createRouter, defineEventHandler, useBase } from 'h3'
const router = createRouter()
router.get('/test', defineEventHandler(() => 'Hello World'))
router.post('/test', defineEventHandler(() => 'Hello World'))
router.get('/test2', defineEventHandler(() => 'Hello World2'))
export default useBase('/api', router.handler)