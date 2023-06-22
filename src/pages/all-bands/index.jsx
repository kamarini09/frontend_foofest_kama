import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Anchor from "@/components/Anchor";

export default function MondayBands() {
  const [schedule, setSchedule] = useState(null);
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
  }, []);


  function getSlug(bandName) {
    return bandName
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
  }

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
    (act) => act.act.toLowerCase() !== "break"
  );
  

 
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
        <div className="text-center">
          {filteredActs.map((act, index) => {
            let textStyle;

            // Check the index and set the textStyle accordingly
            if (index < 6) {
              textStyle = "text-5xl font-bold"; // Large
            } else if (index < 12) {
              textStyle = "text-2xl"; // Smaller
            } else {
              return null; // Skip rendering the bands with larger font sizes here
            }

          return (
              <div key={index} className={`cursor-pointer ${textStyle} my-2`}>
                 <a href={`/bands/${getSlug(act.act)}`}>
                   {act.act}
                 </a>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          {filteredActs.map((act, index) => {
            let textStyle;

            // Check the index and set the textStyle accordingly
            if (index >= 12) {
              textStyle = "text-lg"; // Smallest
            } else {
              return null; // Skip rendering the bands with larger font sizes here
            }

           
            return (
              <div key={index} className={`cursor-pointer ${textStyle} my-2`}>
                <a href={`/bands/${getSlug(act.act)}`}>
                   {act.act}
                 </a>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
