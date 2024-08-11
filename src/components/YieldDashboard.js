import styled from 'styled-components';

const YieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, #ff007a, #6100ff);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const Stat = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
`;

const APR = styled.div`
  font-size: 24px;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  background-color: #151a28;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  background-color: #0c0f16;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: white;
  font-size: 16px;
  width: 60%;
`;

const Label = styled.div`
  color: #c4c4c4;
  font-size: 16px;
`;

const Button = styled.button`
  background: #ff007a;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

const YieldDashboard = () => {
  return (
    <YieldContainer>
      <InfoCard>
        <Title>USDC Vault</Title>
        <Stat>$3,148,571.88</Stat>
        <APR>8.51% APR</APR>
      </InfoCard>
      <InputContainer>
        <InputRow>
          <Label>From Wallet</Label>
          <Input placeholder="0.00" />
        </InputRow>
        <InputRow>
          <Label>To Vault</Label>
          <Input placeholder="0.00" />
        </InputRow>
        <Button>Deposit</Button>
      </InputContainer>
    </YieldContainer>
  );
};

export default YieldDashboard;
