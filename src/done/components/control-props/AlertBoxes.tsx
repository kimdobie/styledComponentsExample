import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Alert, AlertProps } from 'react-bootstrap';

const AlertVariantPassed = styled(Alert)`
  &::after {
    font-weight: bold;
    content: ' ${(props) => props.variant}';
    font-size: 150%;
  }
`;

const AlertVariantNotPassed = styled(Alert)<{ $variant: string }>`
  &::after {
    font-weight: bold;
    content: ' ${(props) => props.$variant}';
    font-size: 150%;
  }
`;

const AlertVariantNotPassed2 = styled(
  (
    // eslint-disable-next-line no-unused-vars
    { variant, ...rest }: { variant: string } & AlertProps // Note since variant is part of AlertProps, we really don't need to define it as a type
  ) => <Alert {...rest} />
)`
  &::after {
    font-weight: bold;
    content: ' ${(props) => props.variant}';
    font-size: 150%;
  }
`;

const DangerAlert = styled(Alert).attrs((props) => ({
  title: 'I am an important alert!',
  variant: props.variant || 'danger',
}))`
  /* custom styles go here */
`;

const AlertBoxes = (): ReactElement => (
  <>
    <h2>Working with passed props</h2>
    <AlertVariantPassed variant='warning'>
      Variant prop should be passed to Alert:
    </AlertVariantPassed>

    <AlertVariantNotPassed $variant='danger'>
      Custom variant prop that was NOT passed:
    </AlertVariantNotPassed>

    <AlertVariantNotPassed2 variant='danger'>
      Variant prop that was NOT passed (using normal prop):
    </AlertVariantNotPassed2>

    <hr />
    <h2>Setting and changing attributes/props</h2>

    <DangerAlert dismissible>I am a danger alert!</DangerAlert>

    <DangerAlert dismissible variant='info'>
      I was a danger alert, but decided to just an info alert
    </DangerAlert>
  </>
);

export default AlertBoxes;
