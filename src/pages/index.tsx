import Head from 'next/head';

import styled from 'styled-components';

import ThreeJS from '@/components/common/ThreeJS';

export default function Home() {
  return (
    <div>
      <Head>
        <title>setting-practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Statue>
        <ThreeJS />
      </Statue>
    </div>
  );
};

const Statue = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
