import type { Component } from "solid-js";
import { createSignal, useContext } from "solid-js";
import axios from "axios";
import { AppContext } from "../context/Context";

const SloganForm: Component = () => {
  const { setResponse } = useContext(AppContext);
  const [inputText, setInputText] = createSignal<string>("");
  const [buttonText, setButtonText] = createSignal<string>("Generate for me");

  const openAPICall = async () => {
    const url = "https://api.openai.com/v1/completions";

    const params = {
      model: "text-davinci-003",
      prompt: "Generate a short 'slogan' for a " + inputText(),
      max_tokens: 60,
      temperature: 0,
    };

    await axios
      .post(url, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_OPENAI_API_KEY,
        },
      })
      .then((response) => {
        setResponse(response.data.choices[0]?.text);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e: Event) => {
    setInputText((e.target as HTMLInputElement).value);
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setButtonText("Generating...");
    await openAPICall();
    setButtonText("Generate for me");
  };

  return (
    <form class="ts-generator__form text-center">
      <input
        class="ts-generator__input w-full text-lg border-[3px] p-3 mb-8"
        placeholder="Note App in Blockchain"
        value={inputText()}
        onInput={(e) => handleInputChange(e)}
      />
      <button
        class="rounded relative inline-flex text-lg font-semibold group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
        onClick={(e) => handleSubmit(e)}
        type="button"
      >
        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span class="relative">{buttonText()}</span>
      </button>
    </form>
  );
};

export default SloganForm;
