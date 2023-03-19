import { Component } from "react";
import { StyledImageGalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
    render() {
        const { toggleModal, smallImageUrl, bigImageUrl } = this.props;
        return <>
            <StyledImageGalleryItem>
                <ImageComponent smallImageUrl={smallImageUrl} bigImageUrl={bigImageUrl} toggleModal={toggleModal} />
            </StyledImageGalleryItem>
        </>
    }
}

export class ImageComponent extends Component {
    render() {
        const { toggleModal, smallImageUrl, bigImageUrl } = this.props;
        return <>
            <GalleryItemImage src={smallImageUrl} alt="" data-url={bigImageUrl} onClick={toggleModal} />
        </>
    }  
}