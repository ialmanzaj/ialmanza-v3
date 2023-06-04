import GlitchApp from "@/components/glich";

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
            <span className="leading-10">Welcome 👋🏽<br></br></span>
             <span className="leading-10">
             to the Home of Isaac</span></h1>
        </div>
        <p className=" font-light text-lg	leading-9	tracking-normal	">
        Isaac Almanza is a software engineer, builder, educator who focuses on building cutting-edge fintech and web3 products. 
        He is currently building a neobank based out of Mexico. He likes to occupy himself learning and building in web3 with complex tasks to push the limits of what current exists in the market.
        </p>
      </div>
      </section>
    </>
    );
}
