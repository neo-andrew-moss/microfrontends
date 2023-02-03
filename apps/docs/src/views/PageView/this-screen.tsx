import React from 'react';

import Main from '../../layouts/main';
import Section from 'components/organisms/Section';
import ContentBlock from './components/ContentBlock';
import withLayout from 'layouts/main/withLayout';
import { ScreenRoutes, PageViewProps } from './types';
import { Button } from '@material-ui/core';
import { useGoToScreen } from './util/useGoToScreen';
import Center from '../../components/organisms/Center';

const ThisScreen: React.VFC<PageViewProps> = () => {
  const goToScreen = useGoToScreen(ScreenRoutes.that);
  return (
    <>
      <Section>
        <Center>
          <Button onClick={() => goToScreen.goToScreen()}>that screen</Button>
        </Center>
      </Section>
      <Section>
        <ContentBlock variant="secondary" />
      </Section>
    </>
  );
};

export default withLayout({ Layout: Main })(ThisScreen);
