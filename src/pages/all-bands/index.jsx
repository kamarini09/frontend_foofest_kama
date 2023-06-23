import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Anchor from "@/components/Anchor";

export default function MondayBands() {
  const [schedule, setSchedule] = useState(null);
  const [bands, setBands] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch schedule
    fetch("https://brazen-fortune-fight.glitch.me/schedule")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSchedule(data);
      })
      .catch(console.error);

    // Fetch bands
    fetch("https://brazen-fortune-fight.glitch.me/bands")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBands(data);
      })
      .catch(console.error);
  }, []);

  if (schedule === null || bands === null) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white bg-gradient-to-r from-custom-purple via-custom-yellow to-custom-red">
        <span className="animate-bounce200 text-8xl">.</span>
        <span className="animate-bounce400 text-8xl">.</span>
        <span className="animate-bounce600 text-8xl">.</span>
      </div>
    );
  }

  const midgardActs = schedule.Midgard.mon;
  const vanaheimActs = schedule.Vanaheim.mon;
  const jotunheimActs = schedule.Jotunheim.mon;

  const filteredActs = [
    ...midgardActs,
    ...vanaheimActs,
    ...jotunheimActs
  ].filter((act) => act.act.toLowerCase() !== "break");

  const bandNames = bands
    .filter((band) =>
      filteredActs.some((act) => act.act.toLowerCase() === band.name.toLowerCase())
    )
    .map((band) => band.name);

  return (
    <Layout>
      <section className="flex flex-col justify-between px-10 h-full">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white py-4 pt-10 mt-[5rem]">
            Bands Playing on Monday
          </h1>
          <h2 className="text-2xl md:text-2xl text-white font-light pb-10 w-full lg:w-1/2">
            Here are the bands that are playing on Monday in Midgard, Vanaheim, and Jotunheim.
          </h2>
        </div>
      </section>
      <section className="container mx-auto p-4 text-center">
        <section className="container mx-auto p-4 text-center">
          <div className="text-center">
            {bandNames.map((name, index) => {
              const band = bands.find((band) => band.name.toLowerCase() === name.toLowerCase());

              if (!band) {
                return null;
              }

              let textStyle;
              if (index < 4) {
                textStyle = "text-5xl font-bold";
              } else if (index < 12) {
                textStyle = "text-2xl font-bold";
              } else {
                textStyle = "text-lg";
              }

              return (
                <div key={index} className={`cursor-pointer ${textStyle} my-2`}>
                  <a href={`/bands/${band.slug}`}>
                    {name}
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </Layout>
  );
}
