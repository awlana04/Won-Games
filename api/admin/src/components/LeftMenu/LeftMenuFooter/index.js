import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https//github.com/awlana04:" target="_blank" rel="noopener noreferrer">
          Awlana Costa
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
