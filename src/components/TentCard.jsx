import { useContext, useEffect } from "react";
import { StoreContext, DispatchContext } from "@/context/storeContext";
<<<<<<< HEAD

import CalculateTents from "./CalculateTents"

export default function TentCardNoOption() {
=======
import { v4 as uuidv4 } from "uuid";
import CalculateTents from "./CalculateTents";

export default function TentCard() {
>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);

  const twoTent = state.tentBasket.find((tent) => tent.tentName === "2PERSON");
  const threeTent = state.tentBasket.find(
    (tent) => tent.tentName === "3PERSON"
  );
  const hasTent = state.tentBasket.some((tent) => tent.hasTent);

<<<<<<< HEAD
  //im getting all the amount of tickets from the basket
=======
>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8
  function getTotalBasketTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalBasketTickets = getTotalBasketTickets();
  const { num2PersonTents } = CalculateTents(totalBasketTickets);
  const { num3PersonTents } = CalculateTents(totalBasketTickets);

<<<<<<< HEAD

=======
  //this function prioritize the 3tent people. so it first divide the tickets with
  //3tents and after the remaining with two

  function addTwoPersonTent() {
    if (canAddMoreTents && num2PersonTents < tents.num2PersonTents) {
      dispatch({
        action: "ADD_TENT",
        payload: {
          tentName: "2PERSON",
          tentID: uuidv4(),
          tentAmount: 1,
          tentAmountPeople: 2,
          price: 299,
        },
      });
    }
  }

  function addThreePersonTent() {
    if (canAddMoreTents && num3PersonTents < tents.num3PersonTents) {
      dispatch({
        action: "ADD_TENT",
        payload: {
          tentName: "3PERSON",
          tentID: uuidv4(),
          tentAmount: 1,
          tentAmountPeople: 3,
          price: 399,
        },
      });
    }
  }

  function removeOneTwoPersonTent() {
    if (twoTent && twoTent.tentAmount > 0) {
      dispatch({
        action: "REMOVE_TENT",
        payload: {
          tentName: "2PERSON",
        },
      });
    }
  }

  function removeOneThreePersonTent() {
    if (threeTent && threeTent.tentAmount > 0) {
      dispatch({
        action: "REMOVE_TENT",
        payload: {
          tentName: "3PERSON",
        },
      });
    }
  }
>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8

  const getTotalBasketTents = () => {
    return state.tentBasket.reduce((total, tent) => total + tent.tentAmount, 0);
  };

  const totalBasketTents = getTotalBasketTents();
<<<<<<< HEAD
//   const maxTents = Math.floor(totalBasketTickets / 3) + Math.floor((totalBasketTickets % 3) / 2);
  const tents = CalculateTents(totalBasketTickets);
=======
  const maxTents =
    Math.floor(totalBasketTickets / 3) +
    Math.floor((totalBasketTickets % 3) / 2);
  const tents = CalculateTents(totalBasketTickets);
  let canAddMoreTents = totalBasketTents + 5 < maxTents;
>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8


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

<<<<<<< HEAD
          {num2PersonTents}
          
=======
          <button
            type="button"
            onClick={addTwoPersonTent}
            disabled={!canAddMoreTents || !hasTent}
            className={`w-10 h-10 leading-10 transition hover:opacity-75 ${
              canAddMoreTents && hasTent
                ? "text-gray-600"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            +
          </button>
>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8
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

<<<<<<< HEAD
          <p className="mt-2 hidden text-sm sm:block">399,-</p>
          
          {num3PersonTents}
          
=======
          <input
            type="number"
            id="Quantity"
            value={num3PersonTents}
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            onClick={addThreePersonTent}
            disabled={!canAddMoreTents || !hasTent}
            className={`w-10 h-10 leading-10 transition hover:opacity-75 ${
              canAddMoreTents && hasTent
                ? "text-gray-600"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            +
          </button>
>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8
        </div>
      </article>
    </section>
  );
}


