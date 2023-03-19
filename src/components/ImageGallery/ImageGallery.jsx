import { Component } from "react";
import { StyledImageGallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export class ImageGallery extends Component {
    render() {
        const { toggleModal, images } = this.props;
        return (
            <StyledImageGallery>
                {images.map((image) => {
                    return <ImageGalleryItem key={image.id} smallImageUrl={image.smallImageUrl} bigImageUrl={ image.largeImageUrl } toggleModal = {toggleModal} ></ImageGalleryItem>
                })}
            </StyledImageGallery>
        )
    }
}