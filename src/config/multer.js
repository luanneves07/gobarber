import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
/**
 * Guarda toda a configuração da parte de upload de arquivos
 */

/**
 * Exporta um objeto de configuracao
 */
export default {
  /* Como o multer vai guardar os arquivos de imagem */
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    /* Formatacao do nome de arquivo da imagem */
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
