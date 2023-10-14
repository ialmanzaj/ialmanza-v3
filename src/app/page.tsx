import Link from 'next/link';

export const metadata = {
  title: 'Isaac Almanza | Software enginer',
};

export default function HomePage() {
  return (
    <>
      <div className="mx-auto mt-20 max-w-2xl flex-1 font-light leading-9 tracking-normal">
        <section className="my-10">
          <h1 className="leading-12 text-4xl tracking-wide">
            <span className="">
              Hey!<br></br> Welcome to Isaac Almanza&apos;s Home👋🏽
            </span>
          </h1>
          <br></br>
        </section>
        <section>
          <p className="text-lg">
            Isaac Almanza is self-taught software engineer, maker and digital
            nomad based LATAM. Currently building crypto experiments and ideas
            with smart contracts, Solidity, EVM, UI, and everything in between.
          </p>
          <br></br>
        </section>

        <section>
          <p className="text-lg font-light	tracking-normal">
            I write on{' '}
            <Link
              className="decoration-3 underline underline-offset-8"
              href="/blog"
            >
              my blog
            </Link>{' '}
            about my learnings and also in my{' '}
            <a
              className="decoration-3 underline underline-offset-8"
              href="https://ialmanza.substack.com/"
            >
              newsletter
            </a>{' '}
            share my curiosity such as cryto/defi, philosophy, mental models,
            nomading & life.
          </p>
          <br></br>
        </section>
        <section>
          <h3 className="text-2xl">Projects</h3>
          <ul className="my-8 list-disc px-8">
            <li>
              <span className="font-bold">
                <a
                  className="decoration-3 underline underline-offset-8"
                  href="https://web3lingo.com/"
                >
                  Web3lingo
                </a>
              </span>
              : is a platform that gamifies education to help developers to get
              new skills in the web3 development and security.
            </li>
          </ul>
          <p className="text-lg font-light	leading-9	tracking-normal"></p>
          <br></br>
        </section>
        <section>
          <h3 className="text-2xl">How can I help you?</h3>
         
          <p className="text-lg font-light	">
            For any inquiries regarding contracting/hiring or colaboration, drop
            me a note at{' '}
            <span className="decoration-3 underline underline-offset-8">
              hello@ialmanza.com
            </span>
            , or via{' '}
            <a
              className="decoration-3 underline underline-offset-8"
              href="https://twitter.com/ialmanzaj/"
            >
              twitter dms
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
