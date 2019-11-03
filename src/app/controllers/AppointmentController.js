import * as Yup from 'yup';
import User from '../models/User';
import Appointment from '../models/Appointments';

class AppointmentController {
  async index(req, res) {
    return res.json(await Appointment.findAll());
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid appointment store data' });
    }

    const { provider_id, date } = req.body;

    /**
     * Verifica se o provider id é um provider
     */
    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });
    if (!isProvider) {
      return res.status(401).json({ error: 'Invalid provider specified' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
