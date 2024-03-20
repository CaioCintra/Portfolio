"use client";
import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";

export default function Project(props: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "85%",
    bgcolor: "#0E0916",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div
        className={`m-5 w-[800px] hover:w-[820px] ease-in-out duration-500 relative cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={props.img}
          alt=""
          className="rounded-md"
          style={{ filter: isHovered ? "brightness(30%)" : "brightness(100%)" }}
        />
        {isHovered && (
          <span
            className="text-xl absolute inset-0 flex justify-center items-center text-white bg-black bg-transparent"
            onClick={handleOpen}
          >
            {props.nome}
          </span>
        )}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle} className="rounded-lg justify-between">
          <div className="text-center m-5">
            <p className="text-2xl font-bold">{props.nome}</p>
          </div>
          <img src={props.img} alt="" className="w-full rounded-md" />
          <div className="m-6">
            <p className="-m-4">{props.desc}</p>
          </div>
          <div>
            <Button
              href={props.link}
              variant="contained"
              className="bg-violet-900 hover:bg-violet-700 m-3 w-36"
            >
              Repositório
            </Button>
            {props.site ? (
              <Button
                href={props.site}
                variant="contained"
                className="bg-violet-900 hover:bg-violet-700 m-3 w-36"
              >
                Site
              </Button>
            ) : (
              <></>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
}
