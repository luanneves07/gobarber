/**
 * Cria uma forma de listagem única para que o prestador de serviços saiba
 * sua agenda de um detemrinado período
 */
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Appointments from '../models/Appointments';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });
    if (!checkUserProvider) {
      return res.status(401).json({ error: `User is not a provider` });
    }

    const { date } = req.query;

    const parsedDate = parseISO(date);

    /**
     *  Comparacao between
     * 2019-06-22 00:00:00
     * 2019-06-22 23:59:59
     */
    const appointments = await Appointments.findAll({
      // Onde o prestador eh o user logado
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    });

    return res.json({ appointments });
  }
}

export default new ScheduleController();
