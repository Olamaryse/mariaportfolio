import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Maria's Portfolio
        </SectionTitle>
        <SectionText>
        I plan to be a breath of fresh air!
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/Olamaryse'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;