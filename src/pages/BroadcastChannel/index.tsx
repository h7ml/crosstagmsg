import { onMessage } from '@/utils/broadcastChannel';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const BroadcastChannel: React.FC = () => {
  const [channelVal, setChannelVal] = useState<string>('');
  useEffect(() => {
    onMessage('sendMessage', (message) => {
      setChannelVal(message);
    });

    return () => {};
  }, []);
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        来自BroadcastChannel的消息：{channelVal}
      </div>
    </PageContainer>
  );
};

export default BroadcastChannel;
