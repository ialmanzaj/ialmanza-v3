//import GlitchApp from '@/components/glich';
//import Rotator from '@/components/rotator';
import Link from 'next/link';

export const metadata = {
  title: 'Isaac Almanza | Software enginer',
};

export default function HomePage() {
  return (
    <>
      <section>
        <div className="mx-auto mt-20 max-w-2xl flex-1">
          <div className="my-10">
            <h1 className="leading-12 text-5xl tracking-wide">
              <span className="">
                Hello!<br></br> Welcome to Isaac&apos;s Home👋🏽
              </span>
            </h1>
            <br></br>
          </div>
          <p className="text-lg font-light	leading-9	tracking-normal">
            Isaac Almanza is self-taught software engineer, maker and digital
            nomad based between Medellin and Panama. He has building fintech
            products for the last 5 years for early-mid stage YC startups.
          </p>
          <br></br>
          <p className="text-lg font-light	leading-9	tracking-normal">
            Now he is focus on building ideas in web3 with Solidity, smart
            contracts, EVM, UI, and everything in between.
          </p>
          <br></br>
          <p className="text-lg font-light leading-9	tracking-normal">
            My{' '}
            <Link
              className="decoration-3 underline underline-offset-8"
              href="/blog"
            >
              blog
            </Link>{' '}
            and newsletter is where I share my rabbit holes what sparks my
            curiosity such as philosophy, mental models, blockchain, finance and
            other interesting ideas.
          </p>
          <br></br>
          <p className="text-lg font-light leading-9	tracking-normal">
            If you&apos;d like to get in touch, drop me a note at{' '}
            <span className="decoration-3 underline underline-offset-8">
              hello@ialmanza.com
            </span>
            ,{' '}
            <a
              className="decoration-3 underline underline-offset-8"
              href="https://www.linkedin.com/in/ialmanzaj/"
            >
              linkedin
            </a>
            , or via{' '}
            <a
              className="decoration-3 underline underline-offset-8"
              href="https://twitter.com/ialmanzaj/"
            >
              twitter dms
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
