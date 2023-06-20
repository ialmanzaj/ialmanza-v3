import GlitchApp from '@/components/glich';
import Rotator from '@/components/rotator';

export const metadata = {
  title: 'Isaac Almanza | Software enginer',
};

export default function HomePage() {
  return (
    <>
      <section>
        <GlitchApp />
        <div className="mx-auto mt-20 max-w-2xl flex-1">
          <div className="my-10">
            <h1 className="leading-12 text-5xl tracking-wide">
              <span className="">
                Hello!<br></br> I&apos;m Isaac Almanza 👋🏽
              </span>
            </h1>
            <h2 className="leading-12 my-3 text-3xl tracking-wide text-slate-200	">
              On a journey of becoming and harnessing my truest expression
            </h2>
          </div>
          <p className="text-lg font-light	leading-9	tracking-normal">
            I&apos;m a software engineer, entrepreneur and digital nomad based
            in Latam. I have been building fintech products for the last 5
            years. Most recently at{' '}
            <a
              className="decoration-3 underline underline-offset-8"
              href="https://fondeadora.com/"
            >
              Fondeadora
            </a>
            , neobank based out of Mexico. Now transitioning into web3 focusing
            on smart contracts with solidity, user interfaces, and everything in
            between.
          </p>
          <br></br>
          <p className="text-lg font-light leading-9	tracking-normal">
            My newsletter is where I share curations and rabbit holes what
            sparks my curiosity such as philosophy, mental models,
            web3/blockchain, and other interesting ideas.
          </p>
          <br></br>
          <p className="text-lg font-light leading-9	tracking-normal">
            If you&apos;d like to get in touch, drop me a note at{' '}
            <span className="decoration-3 underline underline-offset-8">
              ialmanza@proton.me
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

          <Rotator />
        </div>
      </section>
    </>
  );
}
