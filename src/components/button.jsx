import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function Button() {
  return (
    <Zoom>
      <Fab>
        <AddIcon />
      </Fab>
    </Zoom>
  );
}
