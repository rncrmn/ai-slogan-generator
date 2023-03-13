import type { Component } from "solid-js";
import SloganForm from "./components/SloganForm";
import SloganOutput from "./components/SloganOutput";
import Footer from "./components/Footer";

const App: Component = () => {
  return (
    <div class="ts-generator h-screen w-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
      <div class="ts-generator__container max-w-[500px] w-full bg-white py-8 px-4 md:py-12 md:px-8 shadow-md rounded-lg">
        <h1 class="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-10">
          Free Slogan Generator
        </h1>
        <SloganForm />
        <SloganOutput />
      </div>
      <Footer />
    </div>
  );
};

export default App;
