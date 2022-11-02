import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

const AlertVariantPassed = styled(Alert)`
  &::after {
    font-weight: bold;
    font-size: 150%;
  }
`;

const AlertVariantNotPassed = styled(Alert)`
  &::after {
    font-weight: bold;
    font-size: 150%;
  }
`;

const DangerAlert = styled(Alert)`
  /* custom styles go here */
`;

const AlertBoxes = (): ReactElement => (
  <>
    <h2>Working with passed props</h2>

    <AlertVariantPassed variant='warning'>
      Variant prop used for styling should be passed to Alert:
    </AlertVariantPassed>

    <AlertVariantNotPassed>
      Custom variant prop used for styling that was NOT passed:
    </AlertVariantNotPassed>

    <hr />
    <h2>Setting and changing attributes/props</h2>

    <DangerAlert dismissible>I am a danger alert!</DangerAlert>
  </>
);

export default AlertBoxes;
