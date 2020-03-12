import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Display = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typography id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>
        New Quote
      </Button>
      <IconButton
        id="tweet"
        target="_blank"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=IskenderM`
        )}
      >
        <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default Display;
