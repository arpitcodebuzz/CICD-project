import * as service from './service.js'


export const healthCheck = async(req, res) => {
 await service.healthCheck(res)
}