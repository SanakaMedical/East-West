import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import invite from "../assets/images/Invite.png";

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      // fullWidth
      classes={{
        paper: "rounded-lg",
      }}
    >
      <div className="relative">
        <DialogTitle className="flex justify-between items-center pb-2">
          {/* <span className="text-xl font-semibold">Welcome!</span> */}
          <IconButton
            onClick={handleClose}
            className="absolute top-2 right-2"
            size="small"
          >
            <CloseIcon className="h-5 w-5" />
          </IconButton>
        </DialogTitle>
        <DialogContent className="px-6 pb-6">
          <div className="flex flex-col items-center">
            <div className=" flex justify-center  overflow-hidden">
              <img
                src={invite}
                height={300}
                width={300}
                alt="Welcome"
                className=" h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default WelcomePopup;