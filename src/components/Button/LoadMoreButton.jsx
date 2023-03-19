import { StyledButton } from "./LoadMoreButton.styled";
import { Component } from "react";
import {ButtonContainer} from "./LoadMoreButton.styled"

export class LoadMoreButton extends Component {
    render() {
        return <ButtonContainer>
            <StyledButton onClick={this.props.handleLoadMore}>Load more</StyledButton>
        </ButtonContainer>
    }
}