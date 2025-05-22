import multer from 'multer'
import uploadConfig from '../config/multer'

export const upload = multer(uploadConfig.upload('./tmp'))
