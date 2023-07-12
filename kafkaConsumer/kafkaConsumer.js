const kafka = require('kafka-node');

// consumer 객체 초기화, topic 선정해서 구독
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(client, [{ topic: 'test-topic' }]);

// 메시지를 수신할 때마다 로그를 출력합니다.
consumer.on('message', (message) => {
  console.log('Received message:');
  console.log(message);
});
