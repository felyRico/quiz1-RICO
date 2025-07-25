import React from 'react';
import { Layout, Row, Col, Typography, Button, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh', border: '1px solid #c88785', background: '#fef0ed' }}>
      <Header
        style={{
          background: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          borderBottom: '1px solid #c88785',
        }}
      >
        <Title level={2} style={{ margin: 0 }}>
          Mambo
        </Title>
        <Space>
          <Button type="dashed" size="small" style={{ borderColor: '#c88785' }}>
            Mambo
          </Button>
          <Button type="dashed" size="small" style={{ borderColor: '#c88785' }}>
            Mambo
          </Button>
        </Space>
      </Header>
      <Content>
        <Row justify="center" align="middle" style={{ height: '70vh', padding: '0 20px' }}>
          <Col xs={0} sm={8} md={8} lg={8} xl={8}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ider-SV-UAIGXyYVFv0V9FQHsQJoNfPxBA&s" 
                alt="Mambo"
                style={{ maxWidth: '100%', maxHeight: '100%' }} 
              />
            </div>
          </Col>
          <Col xs={24} sm={16} md={16} lg={12} xl={10}>
            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'right' }}>
              <Title level={1}>Welcome to Mambo</Title>
              <Paragraph>
                Mambo is a simple Mambo. Mambo the use of Mambo for Mambo, Mambo, and Omatsuri Mambo.
              </Paragraph>
              <Button 
                type="primary" 
                size="large" 
                icon={<ArrowRightOutlined />} 
                style={{ background: '#c88785', borderColor: '#c88785' }}
              >
                Get Started
              </Button>
            </Space>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', borderTop: '1px solid #c88785' }}>
        Mambo ©2025
      </Footer>
    </Layout>
  );
}
