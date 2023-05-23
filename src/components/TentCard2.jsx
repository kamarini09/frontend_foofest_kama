import { useContext, useEffect } from "react";
import { StoreContext, DispatchContext } from "@/context/storeContext";
import { v4 as uuidv4 } from "uuid";
import CalculateTents from "./CalculateTents"

export default function TentCardNoOption() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);

  const twoTent = state.tentBasket.find((tent) => tent.tentName === "2PERSON");
  const threeTent = state.tentBasket.find((tent) => tent.tentName === "3PERSON");
  const hasTent = state.tentBasket.some((tent) => tent.hasTent);

  //im getting all the amount of tickets from the basket
  function getTotalBasketTickets() {
    return state.ticketBasket.reduce((total, ticket) => total + ticket.amount, 0);
  }

  const totalBasketTickets = getTotalBasketTickets();
  const { num2PersonTents } = CalculateTents(totalBasketTickets);
  const { num3PersonTents } = CalculateTents(totalBasketTickets);



  const getTotalBasketTents = () => {
    return state.tentBasket.reduce((total, tent) => total + tent.tentAmount, 0);
  };

  const totalBasketTents = getTotalBasketTents();
//   const maxTents = Math.floor(totalBasketTickets / 3) + Math.floor((totalBasketTickets % 3) / 2);
  const tents = CalculateTents(totalBasketTickets);


  return (
  <section className={`flex gap-4 flex-wrap `}>
      <article
        className="relative flex items-start justify-between border-2 border-black bg-white p-4 shadow-xl sm:p-6 lg:p-8"
        href="#"
      >
        <div className="pt-4 text-gray-500">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            2 people tent
          </h3>

          <p className="mt-2 hidden text-sm sm:block">299-</p>

          {num2PersonTents}
          
        </div>
      </article>

      <article
        className="relative flex items-start justify-between border-2 border-black bg-white p-4 shadow-xl sm:p-6 lg:p-8"
        href="#"
      >
        <div className="pt-4 text-gray-500">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            3 people tent
          </h3>

          <p className="mt-2 hidden text-sm sm:block">399,-</p>
          
          {num3PersonTents}
          
        </div>
      </article>
    </section>
  );
}


