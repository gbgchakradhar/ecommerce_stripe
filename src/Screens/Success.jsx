import React from 'react';
import styled from 'styled-components';

// Create styled components
const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const SuccessHeading = styled.h1`
  font-size: 36px;
  color: green;
`;

const SuccessIcon = styled.div`
  font-size: 72px;
  color: green;
`;

const SuccessMessage = styled.p`
  font-size: 18px;
  margin: 20px;
`;

const Success = () => {
    return (
        <SuccessContainer>
            <SuccessHeading>Payment Successful</SuccessHeading>
            <SuccessIcon>&#10004;</SuccessIcon>
            <SuccessMessage>Thank you for your payment. Your order has been successfully processed.</SuccessMessage>
        </SuccessContainer>
    );
}

export default Success;
