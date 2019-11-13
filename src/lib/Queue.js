import Bee from 'bee-queue';
import redisConfig from '../config/redis';
import CancellationMail from '../app/jobs/CancellationMail';

/**
 * Todos os jobs devem estar aqui dentro
 */
const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};
    this.init();
  }

  /**
   * Recupera todos os jobs e armazena dentro de this.queues
   */
  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, { redis: redisConfig }),
        handle,
      };
    });
  }

  /**
   * Adiciona novos jobs dentro da fila para ser processado
   * @param {A fila que vai receber o novo job} queue
   * @param {Dados que ser'ao passados para o handle} job
   */
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`Fila ${job.queue.name}: Falhou`, err);
  }
}

export default new Queue();
