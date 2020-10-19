import React from "react";
import { CourseJsonLd } from "next-seo";
import Header from "../HomePageComponents/Hero";
import Main from "../Components/Main/index";
import Services from "../HomePageComponents/Services";
import Page from "../Components/page";
import Produtions from "../HomePageComponents/Produtions";
import About from "../HomePageComponents/About";
import Contato from "../HomePageComponents/Contato";
import Follow from "../HomePageComponents/Follow";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function Home() {
  return (
    <>
      <Page
        description={
          "Cerimonial | Event Planer | Assessoria - Nossa maior paixão, é o seu sonho."
        }
        image={"images/bannner.png"}
        title={"VM Eventos"}
        openGraph={{
          url: "http://comunicacaovm.mathalvz.com/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/images/bannner.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/images/bannner.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/images/bannner.png" },
            { url: "https://www.example.ie/images/bannner.png" },
          ],
          site_name: "Vm Eventos",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      >
        <Nav />
        <Header />

        <Main>
          <About />
          <Services />

          <Produtions />

          <Contato />

          <Follow />
          <Footer />
        </Main>
      </Page>

      <CourseJsonLd
        courseName="VM"
        description="Cerimonial | Event Planer | Assessoria - Nossa maior paixão, é o seu sonho."
        providerName="VM Eventos"
        providerUrl="http://comunicacaovm.mathalvz.com/"
      />
    </>
  );
}
