import GlitchApp from "@/components/glich";
import Rotator from "@/components/rotator";

export const metadata = {
  title: 'Welcome | Isaac Almanza',
};

export default function HomePage() {
  return (<>
      <section>
      <GlitchApp />
      <div className="max-w-2xl mx-auto mt-20 flex-1">
        <div className="my-12">
          <h1 className="tracking-wide text-6xl">
            <span className="leading-12">Hello 👋🏽<br></br> I&apos;m Isaac Almanza</span>
             
          </h1>
        </div>
        <p className=" font-light text-lg	leading-9	tracking-normal">
        I&apos;m a software engineer, entrepreneur and digital nomad based in Latam. I have been building fintech products for the last 5 years in Latam. Most recently at Fondeadora, neobank based out of Mexico.  
        Now transitioning into web3 focusing on smart contracts with solidity, user interfaces, and everything in between. 
        </p><br></br>
        <p className=" font-light text-lg	leading-9	tracking-normal">
       I am curious person who loves getting into new rabbit holes, such as philosophy, mental models, web3/blockchain, and other interesting ideas.
        </p>
        <Rotator />
      </div>
      </section>
    </>
    );
}
