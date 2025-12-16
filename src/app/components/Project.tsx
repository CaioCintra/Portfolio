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
    width: "90%",
    maxWidth: "900px",
    maxHeight: "90vh",
    bgcolor: "#0E0916",
    boxShadow: 24,
    p: 3,
    borderRadius: "12px",
  };

  return (
    <>
      <div
        className="
    m-5
    w-[90vw]
    h-[220px]
    sm:h-[280px]
    md:h-[350px]
    lg:w-[800px]
    lg:h-[450px]
    hover:lg:w-[840px]
    ease-in-out
    duration-500
    relative
    cursor-pointer
    overflow-hidden
    rounded-md
  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={props.img}
          alt=""
          className="w-full h-full object-cover rounded-md"
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
        <Box sx={{ ...modalStyle, outline: "none" }}>
          <div className="w-full max-h-[90vh] overflow-y-auto flex flex-col items-center">
            <div className="text-center my-4">
              <p className="text-2xl font-bold">{props.nome}</p>
            </div>

            <img
              src={props.img}
              alt=""
              className="w-full max-h-[300px] object-cover rounded-md"
            />

            <div className="my-6 px-4 text-center">
              <p>{props.desc}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Button
                href={props.link}
                target="_blank"
                variant="contained"
                className="bg-violet-900 hover:bg-violet-700 w-36"
              >
                Repositório
              </Button>

              {props.site && (
                <Button
                  href={props.site}
                  target="_blank"
                  variant="contained"
                  className="bg-violet-900 hover:bg-violet-700 w-36"
                >
                  Site
                </Button>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
