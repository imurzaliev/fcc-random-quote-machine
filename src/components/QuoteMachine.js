import React, { Component } from "react";
import { random } from "lodash";
import Display from "./Display";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh"
  }
};

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
    this.generateQuoteIndex = this.generateQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then(response => response.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.generateQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.generateQuoteIndex];
  }
  // returns an integer representing an index in state.quotes
  // if state.quotes in empty, returns undefined
  generateQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ generateQuoteIndex: this.generateQuoteIndex() });
  }

  render() {
    return (
      <Grid
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container
      >
        <Grid xs={11} lg={8} item>
          {this.selectedQuote ? (
            <Display
              selectedQuote={this.selectedQuote}
              assignNewQuoteIndex={this.assignNewQuoteIndex}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(QuoteMachine);
