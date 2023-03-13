import { Component, Show, useContext } from "solid-js";
import { AppContext } from "../context/Context";

const SloganOutput: Component = () => {
  const { response } = useContext(AppContext);

  return (
    <div class="px-5 py-4 text-center mt-6 md:mt-8 bg-green-200">
      <span class="text-md md:text-lg font-mono font-semibold">
        <Show when={response()} fallback="Your Notes, Your Control">
          {response()}
        </Show>
      </span>
    </div>
  );
};

export default SloganOutput;
