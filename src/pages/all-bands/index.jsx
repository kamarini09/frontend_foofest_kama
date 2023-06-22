import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

export default function MondayBands() {
  const [schedule, setSchedule] = useState(null);

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
  }, []);

  if (schedule === null) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white bg-gradient-to-r from-custom-purple via-custom-yellow to-custom-red">
        <span className="animate-bounce200 text-8xl">.</span>
        <span className="animate-bounce400 text-8xl">.</span>
        <span className="animate-bounce600 text-8xl">.</span>
      </div>
    );
  }

  // Get acts playing on Monday in Midgard, Vanaheim, and Jotunheim
  const midgardActs = schedule.Midgard.mon;
  const vanaheimActs = schedule.Vanaheim.mon;
  const jotunheimActs = schedule.Jotunheim.mon;

  // Filter out "break" acts
  const filteredActs = [...midgardActs, ...vanaheimActs, ...jotunheimActs].filter(
    (act) => act.act !== "break"
  );

  // Calculate the maximum number of acts per row
  const maxActsPerRow = 12;

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
        <div className="flex flex-wrap justify-center">
          {filteredActs.map((act, index) => {
            let size = "text-lg";
            if (index < 2) {
              size = "text-2xl";
            } else if (index < 4) {
              size = "text-xl";
            }
            return (
              <div
                key={index}
                className={`cursor-pointer ${size} w-1/${maxActsPerRow} py-2`}
              >
                {act.act}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
