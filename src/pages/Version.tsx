import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGetVersion } from '../js/getVersion';
import './version.css';

const Version = (/* props */): ReactElement => {
  const [version] = useGetVersion();

  return (
    <>
      <Row data-testid='versionPageContainer'>
        <Col>
          <h1>Version</h1>
          <ul>
            <li>
              <strong>Application Name: </strong>
              <span id='appNameFromPackageJson'>
                {process.env.REACT_APP_NAME}
              </span>
            </li>
            <li>
              <strong>Version: </strong>
              <span id='appVersionFromPackageJson'>
                {process.env.REACT_APP_VERSION}
              </span>
            </li>
            <li>
              <strong>Git Commit: </strong>
              <span id='gitCommitHash'>{process.env.REACT_APP_GIT_SHA}</span>
            </li>
          </ul>
          <h2>Dependencies</h2>
          {/* Be careful sharing what dependencies that are are in use.  You don't want to notify users of dependencies that have known security vulnerabilities */}
          <ul>
            <li>
              <strong>React: </strong>
              {React.version}
            </li>
            {version.bootstrap ? (
              <li>
                <strong>Bootstrap: </strong>
                {version.bootstrap}
              </li>
            ) : null}
            {version.reactrouter ? (
              <li>
                <strong>React Router: </strong>
                {version.reactrouter}
              </li>
            ) : null}
            {version.styledcomponents ? (
              <li>
                <strong>Styled Components: </strong>
                {version.styledcomponents}
              </li>
            ) : null}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Version;
