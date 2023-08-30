//import GlitchApp from '@/components/glich';
import Rotator from '@/components/rotator';

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
                Hello!<br></br> I&apos;m Isaac Almanza 👋🏽
              </span>
            </h1>
            <h2 className="leading-12 my-3 text-3xl tracking-wide	">
              On a journey of creating financial and educational tools to
              improve people's lives
            </h2>
          </div>
          <p className="text-lg font-light	leading-9	tracking-normal">
            I&apos;m a software engineer, entrepreneur and digital nomad based
            in Latam. I have been building fintech products for the last 5
            years. Most recently at neobank{' '}
            <a
              className="decoration-3 underline underline-offset-8"
              href="https://fondeadora.com/"
            >
              Fondeadora
            </a>
            . <br></br>
            <br></br>Now building on web3, experimenting ideas with EVM based
            smart contracts with Solidity, user interfaces, and everything in
            between.
          </p>
          <br></br>
          <p className="text-lg font-light leading-9	tracking-normal">
            My blog and newsletter is where I share curations and rabbit holes
            what sparks my curiosity such as philosophy, mental models,
            blockchain, and other interesting ideas.
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
