import React, { Component } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../store/Store";
import { onLoading, offLoading } from "../store/Action";

class Loading extends Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.loading ? "loading" : "no-loading"}
        <button
          onClick={(event) => {
            this.props.onLoading();
          }}
        >
          OnLoading
        </button>

        <button
          onClick={(event) => {
            this.props.offLoading();
          }}
        >
          OffLoading
        </button>
      </div>
    );
  }
}

type Props = {
  loading: boolean;
  onLoading(): void;
  offLoading(): void;
};

type State = {};

const mapStateToProps = (state: ApplicationState) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoading: () => dispatch(onLoading()),
    offLoading: () => dispatch(offLoading()),
  };
};

export const LoadingComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
