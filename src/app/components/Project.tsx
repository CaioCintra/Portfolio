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
    width: "calc(100% - 2rem)",
    maxWidth: "900px",
    maxHeight: "calc(100vh - 2rem)",
    bgcolor: "#0E0916",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
    p: { xs: 2, sm: 3, md: 4 },
    borderRadius: "16px",
    border: "1px solid rgba(124, 58, 237, 0.2)",
  };

  return (
    <>
      <div
        className="m-5 w-[45vw]
    h-[450px]
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
    hover:shadow-violet-600/20
  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={props.img}
          alt={props.nome}
          className="w-full h-full object-cover rounded-lg"
          style={{
            filter: isHovered
              ? "brightness(35%) saturate(0)"
              : "brightness(100%)",
            objectPosition: "top",
          }}
        />

        {isHovered && (
          <span
            className="text-base sm:text-lg md:text-2xl font-bold absolute inset-0 flex justify-center items-center text-white cursor-pointer"
            onClick={handleOpen}
          >
            {props.nome}
          </span>
        )}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...modalStyle, outline: "none" }}>
          <div className="w-full max-h-[calc(100vh-2rem)] overflow-y-auto flex flex-col items-center">
            <div className="text-center my-3 sm:my-4 md:my-6 w-full">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-600">
                {props.nome}
              </p>
            </div>

            <img
              src={props.img}
              alt={props.nome}
              className="max-w-[90%] max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-lg shadow-lg"
            />

            <div className="my-4 sm:my-6 px-3 sm:px-4 md:px-6 text-center w-full">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {props.desc}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 w-full px-3 sm:px-4">
              <Button
                href={props.link}
                target="_blank"
                variant="contained"
                className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 w-28 sm:w-32 md:w-36 text-xs sm:text-sm md:text-base"
              >
                Repositório
              </Button>

              {props.site && (
                <Button
                  href={props.site}
                  target="_blank"
                  variant="contained"
                  className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 w-28 sm:w-32 md:w-36 text-xs sm:text-sm md:text-base"
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
