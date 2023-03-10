import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Screen, Text, View } from '@components/common';
import { useGlobalState } from '@hooks/queries';

export function LoginScreen() {
  const navigate = useNavigate();
  const [, setAccessToken] = useGlobalState(['accessToken'], '');

  const onFinish = (values: any) => {
    setAccessToken('token');
    navigate('/');
  };

  return (
    <Screen fullSize footer>
      <Text fontWeight="bold" style={{ fontSize: 200, marginBottom: 32 }}>
        잼
      </Text>

      <View style={{ width: 360 }}>
        <Form labelCol={{ span: 7 }} onFinish={onFinish}>
          <Form.Item
            label="이메일"
            name="email"
            rules={[{ required: true, message: '이메일을 입력해주세요.' }]}>
            <Input placeholder="이메일을 입력해주세요." />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
            style={{ marginBottom: 48 }}>
            <Input.Password placeholder="이메일을 입력해주세요." />
          </Form.Item>

          <Form.Item>
            <View style={{ alignItems: 'flex-end' }}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                style={{ fontWeight: 'bold', width: 255 }}>
                로그인
              </Button>
            </View>
          </Form.Item>
        </Form>
      </View>
    </Screen>
  );
}
