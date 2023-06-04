import GlitchApp from "@/components/glich";

export const metadata = {
  title: 'Welcome | Isaac Almanza',
};

export default function HomePage() {
  return (<>
      <section>
      <GlitchApp />
      <div className="max-w-xl mx-auto mt-20 flex-1">
        <h1 className="font-bold text-3xl font-serif">Hi, I&apos;m Isaac Almanza</h1>
        <p className="my-5">
        Isaac is a self-taught, independent builder, educator, and software engineer who focuses on cutting-edge fintech and web3 solutions. 
        He is currently building a neobank based out of Mexico. Isaac likes to occupy himself learning and buidling in web3 with complex tasks to push the limits of what current exists in the market.
        </p>
      </div>
      </section>
    </>
    );
}
