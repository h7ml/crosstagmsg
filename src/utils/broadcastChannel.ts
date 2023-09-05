const channel = new BroadcastChannel('channel-h7ml');

// 将消息发送到channel-h7ml
export function sendMessage(type: string, message: any) {
  channel.postMessage({
    type,
    message,
  });
}

// 当消息接收时，调用回调函数
export function onMessage(type: string, callback: (message: any) => void) {
  channel.onmessage = (event) => {
    if (event.data.type === type) {
      callback(event.data.message);
    }
  };
}
