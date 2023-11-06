"use client";

import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [value1, setValue1] = useState(45);
  const [value1Checked, setValue1Checked] = useState(false);

  const [value2, setValue2] = useState(30);
  const [value2Checked, setValue2Checked] = useState(false);

  const [value3, setValue3] = useState(20);
  const [value3Checked, setValue3Checked] = useState(false);

  const [value4, setValue4] = useState(5);
  const [value4Checked, setValue4Checked] = useState(false);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let result = 0;

    if (value1Checked) result += value1;
    if (value2Checked) result += value2;
    if (value3Checked) result += value3;
    if (value4Checked) result += value4;

    setSum(result);
  }, [value1Checked, value2Checked, value3Checked, value4Checked]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 ">
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <label
              className="group flex cursor-pointer select-none items-center gap-4"
              htmlFor="box1"
            >
              <span>Piling</span>
              <input
                className="sr-only"
                value={value1}
                checked={value1Checked}
                onChange={(ev) => {
                  setValue1(parseInt(ev.target.value));
                  setValue1Checked(!value1Checked);
                }}
                type="checkbox"
                name="box1"
                id="box1"
              />
              <FontAwesomeIcon
                icon={value1Checked ? faCheckSquare : faSquare}
              />
            </label>
            <label
              className="flex cursor-pointer select-none items-center gap-4"
              htmlFor="box2"
            >
              <span>Maska</span>
              <input
                className="sr-only"
                value={value2}
                checked={value2Checked}
                onChange={(ev) => {
                  setValue2(parseInt(ev.target.value));
                  setValue2Checked(!value2Checked);
                }}
                type="checkbox"
                name="box2"
                id="box2"
              />
              <FontAwesomeIcon
                icon={value2Checked ? faCheckSquare : faSquare}
              />
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <label
              className="flex cursor-pointer select-none items-center gap-4"
              htmlFor="box3"
            >
              <span>Masaż</span>
              <input
                className="sr-only"
                value={value3}
                checked={value3Checked}
                onChange={(ev) => {
                  setValue3(parseInt(ev.target.value));
                  setValue3Checked(!value3Checked);
                }}
                type="checkbox"
                name="box3"
                id="box3"
              />
              <FontAwesomeIcon
                icon={value3Checked ? faCheckSquare : faSquare}
              />
            </label>
            <label
              className="flex cursor-pointer select-none items-center gap-4"
              htmlFor="box4"
            >
              <span>Regulacja brwi</span>
              <input
                className="sr-only"
                value={value4}
                checked={value4Checked}
                onChange={(ev) => {
                  setValue4(parseInt(ev.target.value));
                  setValue4Checked(!value4Checked);
                }}
                type="checkbox"
                name="box4"
                id="box4"
              />
              <FontAwesomeIcon
                icon={value4Checked ? faCheckSquare : faSquare}
              />
            </label>
          </div>
        </div>
        <div>Suma: {sum}</div>
      </div>
    </main>
  );
}
