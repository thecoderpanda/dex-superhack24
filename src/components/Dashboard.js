import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
`;

const CardTitle = styled.h2`
  color: #333;
`;

const CardDescription = styled.p`
  color: #666;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card>
        <CardTitle>Add Liquidity</CardTitle>
        <CardDescription>Provide liquidity to the DEX pools.</CardDescription>
      </Card>
      <Card>
        <CardTitle>Withdraw Liquidity</CardTitle>
        <CardDescription>Withdraw your liquidity from the pools.</CardDescription>
      </Card>
      <Card>
        <CardTitle>Swap</CardTitle>
        <CardDescription>Swap tokens instantly.</CardDescription>
      </Card>
      <Card>
        <CardTitle>Deposit LP to 4626 Vault</CardTitle>
        <CardDescription>Deposit your LP tokens to the vault.</CardDescription>
      </Card>
    </DashboardContainer>
  );
};

export default Dashboard;
