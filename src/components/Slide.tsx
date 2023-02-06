import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';

interface WebsiteSliderProps {}

const WebsiteSlide: React.FC<WebsiteSliderProps> = () => {
    return (
        <div className="website-slider-buttons p-1 p-md-2">
            <a href="#" className="btn-prev-slide btn btn-sm btn-icon btn-soft-secondary mr-2">
                <i className="fas fa-chevron-left btn-icon-inner"></i>
            </a>

            <a href="#" className="btn-next-slide btn btn-sm btn-icon btn-soft-secondary">
                <i className="fas fa-chevron-right btn-icon-inner"></i>
            </a>
        </div>
    );
};


export default WebsiteSlide;
