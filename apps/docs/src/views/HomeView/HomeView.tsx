import React from 'react';

import Main from '../../layouts/main';
import Section from 'components/organisms/Section';
import ContentBlock from './components/ContentBlock';
import Dual from 'components/organisms/Dual';
import withLayout from 'layouts/main/withLayout';

const HomeView = (): JSX.Element => {
  return (
    <>
      <Section>
        <ContentBlock variant="primary" />
      </Section>
      <Section>
        <Dual
          left={<ContentBlock variant="primary" />}
          right={<ContentBlock variant="secondary" />}
        />
      </Section>
      <Section>
        <ContentBlock variant="secondary" />
      </Section>
      <Section>
        <ContentBlock variant="primary" />
      </Section>
    </>
  );
};

export default withLayout({ Layout: Main })(HomeView);
