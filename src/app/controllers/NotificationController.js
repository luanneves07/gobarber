/**
 * Controller que lista as notificacoes do prestador de servicos
 */

import Notification from '../schemas/notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    /**
     * Verifica se o provider id é um provider
     */
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });
    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can access notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }
}

export default new NotificationController();
