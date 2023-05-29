import React from "react";
import { useContext } from "react";
import { DispatchContext, StoreContext } from "@/context/storeContext";
import { v4 as uuidv4 } from "uuid";
import Anchor from "./Anchor";
import QuantityInput from "./QuantityInput";

const TicketCard = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);
  const vipTicket = state.ticketBasket.find((ticket) => ticket.name === "VIP");
  const regularTicket = state.ticketBasket.find(
    (ticket) => ticket.name === "Regular"
  );

  function addRegularTicket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: "Regular",
        id: uuidv4(),
        amount: 1,
        price: 799,
      },
    });
  }

  function addVIPTicket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: "VIP",
        id: uuidv4(),
        amount: 1,
        price: 1299,
      },
    });
  }

  function removeOneVIP() {
    dispatch({
      action: "REMOVE_TICKET",
      payload: {
        name: "VIP",
      },
    });
  }

  function removeOneREGULAR() {
    dispatch({
      action: "REMOVE_TICKET",
      payload: {
        name: "Regular",
      },
    });
  }

  async function sendPutRequest() {
    const totalAmount = state.ticketBasket.reduce(
      (acc, ticket) => acc + ticket.amount,
      0
    );

    // Send PUT request
    const response = await fetch(
      "https://brazen-fortune-fight.glitch.me/reserve-spot",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          area: state.area,
          amount: totalAmount,
        }),
      }
    );

    // Error handling
    if (!response.ok) {
      // Note: this will only catch network / connection errors
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // If successful, get the response data
    const data = await response.json();

    console.log("PUT response data:", data); // Console log the response data

    // Dispatch all the response data
    dispatch({ action: "SET_RESERVATION_DATA", payload: data });
  }

  const isAvailable =
    (vipTicket && vipTicket.amount > 0) ||
    (regularTicket && regularTicket.amount > 0);

  function getTotalBasketTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalBasketTickets = getTotalBasketTickets();
  const canAddMoreTickets = totalBasketTickets < state.available;

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 mt-4">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              VIP Tickets
            </div>
            <div className="uppercase tracking-wide text-sm text-black">
              1299,-
            </div>
            <p className="mt-2 text-gray-500">
              Experience the festival with extra perks as a VIP.
            </p>
            <div className="w-32">
              <QuantityInput
                value={vipTicket ? vipTicket.amount : 0}
                onClickAdd={addVIPTicket}
                onClickRemove={removeOneVIP}
                canAddMoreTickets={canAddMoreTickets}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 mt-4">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Regular Tickets
            </div>
            <p className="mt-2 text-gray-500">
              Enjoy the festival with our standard ticket.
            </p>
            <div className="w-32">
              <QuantityInput
                value={regularTicket ? regularTicket.amount : 0}
                onClickAdd={addRegularTicket}
                onClickRemove={removeOneREGULAR}
                canAddMoreTickets={canAddMoreTickets}
              />
            </div>
          </div>
        </div>
      </div>

      <Anchor
        href="/accomodations/"
        onClick={sendPutRequest}
        disabled={!isAvailable}
        className="w-full text-center"
      >
        START RESERVATION
      </Anchor>
    </>
  );
};

export default TicketCard;
