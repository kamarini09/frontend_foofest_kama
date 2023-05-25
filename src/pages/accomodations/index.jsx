import FlowLayout from "@/components/FlowLayout";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import TentCard from "@/components/TentCard";
import Checkbox from "@mui/material/Checkbox";
import Anchor from "@/components/Anchor";
import { useContext } from "react";
import { StoreContext, DispatchContext } from "@/context/storeContext";
import Timer from "@/components/Timer";
import CalculateTents from "@/components/CalculateTentss";
import { v4 as uuidv4 } from "uuid";

//TEST

export default function Accomodations() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);

  //i do that to disable the button
  const tentNotChecked = state.tentBasket.length === 0;

  function getTotalBasketTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }
  const totalBasketTickets = getTotalBasketTickets();

  function selectGreenOption(event) {
    const { checked } = event.target;
    dispatch({
      action: "GREEN_OPTION",
      payload: {
        hasGreen: checked,
        price: checked ? 249 : 0,
      },
    });
  }

  function chooseTentOption() {
    dispatch({
      action: "TENT_OPTION",
      payload: {
        isChosentent: true,
      },
    });
    //i decided to put them here instead of the tent component so they are called once when chooseTentOption is called
    addTwoPersonTent();
    addThreePersonTent();
  }

  function notChooseTentOption() {
    dispatch({
      action: "TENT_OPTION",
      payload: {
        isChosentent: false,
      },
    });
  }

  function addTwoPersonTent() {
    const { num2PersonTents } = CalculateTents(totalBasketTickets);
    dispatch({
      action: "ADD_TENT",
      payload: {
        tentName: "2-Person",
        tentID: uuidv4(),
        tentAmount: num2PersonTents,
        tentAmountPeople: 2,
        price: 299,
      },
    });
  }

  function addThreePersonTent() {
    const { num3PersonTents } = CalculateTents(totalBasketTickets);
    dispatch({
      action: "ADD_TENT",
      payload: {
        tentName: "3-Person",
        tentID: uuidv4(),
        tentAmount: num3PersonTents,
        tentAmountPeople: 3,
        price: 399,
      },
    });
  }

  function emptyTentBasket() {
    dispatch({ action: "EMPTY_TENT_BASKET" });
  }
  return (
    <FlowLayout>
      <Timer />
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-xl mb-4 mt-4">
        <div className="md:flex">
          <div className="p-8">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checked}
                  onChange={selectGreenOption}
                />
              }
              label="Green Option / 249-"
            />

            <RadioGroup>
              <label>
                <div>
                  <FormControlLabel
                    value="set-up-tent"
                    control={<Radio />}
                    label="Rent a tent"
                    onClick={chooseTentOption}
                  />
                  <TentCard />
                </div>
              </label>

              <FormControlLabel
                value="own-tent"
                control={<Radio />}
                label="No, I'm bringing my own tent"
                onClick={() => {
                  notChooseTentOption();
                  emptyTentBasket();
                }}
              />
            </RadioGroup>
          </div>
        </div>
      </div>

      <Anchor
        href="/guests/"
        disabled={tentNotChecked}
        className="w-full text-center"
      >
        GO TO GUESTS
      </Anchor>
    </FlowLayout>
  );
}
