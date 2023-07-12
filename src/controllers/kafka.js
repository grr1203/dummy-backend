const kafka = require('kafka-node');

const kafkaTest = async (req, res) => {
  //Business Logic

  // Kafka 클러스터의 호스트와 포트 정보를 설정 및 producer 객체, 메시지 생성
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
  const producer = new Producer(client);
  const message = {
    topic: 'test-topic',
    messages: ['Hello, Kafka'],
  };

  // 메시지를 Kafka 클러스터로 전송합니다.
  producer.send([message], (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Message sent successfully!');
      console.log(data);
    }
  });

  return res.send({ result: 'success' });
};

module.exports = { kafkaTest };
