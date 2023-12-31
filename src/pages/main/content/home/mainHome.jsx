import React from "react";

// Styles importation
import "./mainHome.scss";

import Band from "@components/ui/band/band";
import MainBanner from "./components/banner/mainBanner";
import MainPresentaion from "./components/presentation/presentation";
import MainCta from "./components/cta/cta";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";
import ListProblem from "./components/listProblem/ListProblem";
import Contact from "./components/contact/contact";
import Background3d from "@components/ui/background/background3D";
import ChatbotComponent from "../../../../components/assistance/ChatbotComponent";
import SliderScroll from "@components/ui/sliderScroll/ScrollSlider";
import BlueBack from "../../components/background/blurBackground";
import CallToAction from "./components/CallToAction/CallToAction";


function MainHome() {
  return (
    <div className="super-global-container home">
      <BlueBack />
      <MainBanner />
      <ChatbotComponent />
      <Band />
      <MainPresentaion />
      <MainCta />
      {/* <Problem /> */}
      <ListProblem />
      <Solution />
      <CallToAction />
      <Contact />
      <Background3d />
      <SliderScroll />
    </div>
  );
}

export default MainHome;
