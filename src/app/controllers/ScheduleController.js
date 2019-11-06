/**
 * Cria uma forma de listagem única para que o prestador de serviços saiba
 * sua agenda de um detemrinado período
 */
import Appointments from '../models/Appointments';

class ScheduleController {
  async index(req, res) {
    return res.json();
  }
}

export default new ScheduleController();
