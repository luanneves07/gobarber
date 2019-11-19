/**
 * Contem configuracoes da parte de autenticacao da aplicacao
 */
export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};
