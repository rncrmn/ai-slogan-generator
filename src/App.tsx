import type { Component } from "solid-js";
import SloganForm from "./components/SloganForm";
import SloganOutput from "./components/SloganOutput";
import Footer from "./components/Footer";

const App: Component = () => {
  return (
    <div class="ts-generator h-screen w-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
      <div class="ts-generator__container w-[500px] bg-white py-12 px-8 shadow-md rounded-lg">
        <h1 class="text-4xl font-bold text-center mb-10">
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
