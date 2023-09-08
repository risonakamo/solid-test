import {render} from "solid-js/web";
import { createSignal } from "solid-js";
import {JSXElement} from "solid-js/types";

function MainIndex():JSXElement
{
  const [thing,setThing]=createSignal<string>("huh");

  return <>
    hello
  </>;
}

function main()
{
  render(MainIndex,document.querySelector("main")!);
}

window.onload=main;