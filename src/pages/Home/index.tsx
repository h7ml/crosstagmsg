import { sendMessage } from '@/utils/broadcastChannel';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(''); // 使用useState来存储输入框的值

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 当输入框内容发生变化时更新inputValue的值
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    sendMessage('sendMessage', inputValue); // 发送输入框的值作为消息
  };

  return (
    <PageContainer ghost>
      <div>
        <Input
          placeholder="Basic usage"
          value={inputValue} // 将输入框的值绑定到inputValue
          onChange={handleChange} // 当输入框内容变化时调用handleChange函数
        />
        <Button type="primary" onClick={handleClick}>
          发送消息
        </Button>
      </div>
    </PageContainer>
  );
};

export default HomePage;
